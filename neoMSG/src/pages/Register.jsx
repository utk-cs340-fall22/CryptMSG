import React , { useState } from 'react'
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth , storage , db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate , Link } from 'react-router-dom';

const Register = () => {
  const [err,setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    // const file = (e.target[3].files.length === 0) ? defaultPFP : e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        setErr(error.message);
        setErrMsg("Email in use already");
        console.log(error.message);
      });;

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }

    // try {
      // const res = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      //   setErr(error.message);
      //   setErrMsg("Email in use already");
      //   console.log(error.message);
      // });
    //   const storageRef = ref(storage, displayName);

    //   await uploadBytesResumable(storageRef, file).then(() => {
    //     getDownloadURL(storageRef).then(async (downloadURL) => {
    //       try {
    //         await updateProfile(res.user, {
    //           displayName,
    //           photoURL: downloadURL,
    //         });
    //         await setDoc(doc(db, "users", res.user.uid), {
    //           uid: res.user.uid,
    //           displayName,
    //           email,
    //           photoURL: downloadURL,
    //         });

    //         await setDoc(doc(db, "userChats", res.user.uid), {});
    //         navigate("/");

    //       } catch (error) {
    //         console.log(error.message);
    //         setErr(error.message);
    //       }
    //     });
    //   });
    // } catch(error) {
    //   setErr(error.message);
    //   console.log(err);
    // }  
  }

  return (
    <div className="background-container">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">CryptMSG</span>
          <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="display name"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password" autoComplete="on"/>
            <input style={{display:"none"}} type="file" id="file"/>
            <label htmlFor='file'>
              Add Avatar
            </label>
            <button>Sign Up</button>
            {/* {err && <span>Something went wrong</span>} */}
            {loading && <span>Uploading image...</span>}
            {err && <span>{errMsg}</span>}
          </form>
          <p>You have an account already? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
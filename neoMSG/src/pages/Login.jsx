import React , { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate , Link } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  // const [err,setErr] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    await signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/");
    }).catch(error => {
      setErr(error.code);
    })
    // try {
    //   await signInWithEmailAndPassword(auth, email, password).catch(err => {
    //     setErr(err);
    //   });
    //   navigate("/");
    // } catch(err) {
    //   console.log(err);
    //   setErr(err);
    // }  
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CryptMSG</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button>Login</button>
          {/* {err && <span>Something went wrong</span>} */}
          <span>{err}</span>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login
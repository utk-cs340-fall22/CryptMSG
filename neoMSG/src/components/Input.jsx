import React, { useContext, useState } from "react";
import * as FaIcons from 'react-icons/fa';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleKeySend = (e) => {
    if (e.code === "Enter") {
      handleSend();
      document.getElementById("chat-input").value = "";
    }
  };

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div id="input-flex">
      <div className='input'>
        <input 
          type="text" 
          id="chat-input"
          placeholder='Message...'
          onKeyDown={handleKeySend}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='send'>
          <input 
            type="file" 
            style={{display:"none"}} 
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor='file'>
            <FaIcons.FaPaperclip className="attach-file-input"/>
          </label>
          <button onClick={handleSend}><FaIcons.FaPaperPlane className="chat-send-input"/></button>
        </div>
      </div>
    </div>
  )
}

export default Input
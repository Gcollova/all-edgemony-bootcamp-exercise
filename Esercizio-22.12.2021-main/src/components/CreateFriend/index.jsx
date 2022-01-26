import { useState, useEffect } from "react";
import { httpPOST } from "../../libs/http";
import Modals from "../Modals";
import styles from './CreateFriend.module.scss'

const CreateFriend = () => {
    
  const [friendName, setFriendName] = useState("");
  const [friendPhoto, setFriendPhoto] = useState("");  
  const [formPostObj, setFormPostObj] = useState({});
  const [state,setState]=useState(true)
  const handleSendBtn = (event) => {
    event.preventDefault();
    httpPOST("/friends", formPostObj);
    setState(false)
    setTimeout(()=>{
      setState(true)
    },5000)
  };
  
  useEffect(() => {
    setFormPostObj({
      author: friendName,
      
      
      photo: friendPhoto,
    });
  }, [friendName, friendPhoto,]);

  return (
    <div className={styles.createPost}>
  {!state ? <Modals status="create"  message="Amico Aggiunto!" /> : null}
      <form>
        <div className={styles.__author}>
          <input
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            name="friend"
            id="firend"
            type="text"
            placeholder="Friend Name"
            required
          />

          <input
            onChange={(e) => setFriendPhoto(e.target.value)}
            value={friendPhoto}
            name="img"
            id="img"
            type="text"
            placeholder="Img URL"
          />

          <button type="submit" onClick={handleSendBtn}>
            ADD
          </button>
        </div>

        
      </form>
    </div>
  );
};

export default CreateFriend;
import { useState, useEffect } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import { MessagePreview } from "../../components/MessagePreview";
import { Post } from "../../components/Post";
import { http } from "./../../libs/http";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Modals from "../../components/Modals";

const friends = [];

const messages= [];

const posts= [];
const Home = () => {
  
  const [flag,setFlag]= useState(true)
  function changeflag(){
    setFlag(false);
  }
  
  
  
  const [friendsPreview, setFriendsPreview] = useState(friends);
  const [allPosts, setAllPosts] = useState(posts);
  const [messagesPreview, setMessagesPreview] = useState(messages);
  
 
  useEffect(() => {

    http("/friends?_limit=4").then((data) => setFriendsPreview(data));
    http("/messages?_limit=4").then((data) => setMessagesPreview(data));
    http("/posts").then((data) => setAllPosts(data.reverse()));

    setTimeout(()=>{
      setFlag(true)    

    },5000)

  }, [flag]);




  return (
    <section className={styles.home}>
      <h3>Bevenuto utente</h3>
      <div className={styles.grid}>
        <aside>
          {friendsPreview.map((friend, index) => (
            <FriendPreview key={index} data={friend} />
          ))}
        </aside>
        <main>
          <Link to="/new-post">
            <button className={styles.createPostBtn}>
              + Create a new post!
            </button>
          </Link>
          {!flag ? <Modals status="delete"  message="Post Eliminato!" /> : null}
          {allPosts.map((post, index) => (
            <Post key={index} data={post} flag={changeflag} />
          ))}
        </main>
        <aside>
          {messagesPreview.map((message, index) => (
            <MessagePreview key={index} data={message} />
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Home;

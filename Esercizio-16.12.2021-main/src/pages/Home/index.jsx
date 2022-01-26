import { useState,useEffect } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import { MessagePreview } from "../../components/MessagePreview";
import { Post } from "../../components/Post";
import styles from "./Home.module.scss";
import { http } from "../../libs/http";



const friends = [];

const messages = [];

const posts = [];

const Home = () => {
  const [friendsPreview, setFriendsPreview] = useState(friends);
  const [allPosts,setAllPosts ] = useState(posts);
  const [messagesPreview,setMessagePreview ] = useState(messages);
  // const friendPreview = [];
  useEffect(()=>{
  http("/friends?_limit=4").then((data) => setFriendsPreview(data))
  http("/posts").then((data) => setAllPosts(data))
  http("/messages?_limit=4").then((data) => setMessagePreview(data))
  
},[])

  
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
          {allPosts.map((post, index) => (
            <>
                    
              <Post key={index} data={post} />
            </>
            
          ))}
        </main>
        <aside>
          {messagesPreview.map((message, index) => (
            <>
              
              <MessagePreview key={index} data={message} />
            </>
            
          ))}
        </aside>
      </div>
    </section>
    
  );
};

export default Home;

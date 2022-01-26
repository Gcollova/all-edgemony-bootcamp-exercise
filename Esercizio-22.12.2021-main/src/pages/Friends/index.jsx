import { useState, useEffect } from "react";

import { FriendPreview } from "../../components/FriendPreview";
import Pagination from "../../components/Pagination/";
import { http } from "../../libs/http";
import styles from "./Friends.module.scss";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);
  const [pagination,setPagination]= useState(1);

  useEffect(() => {
    http(`/friends?_page=${pagination}`).then((friendsList) => setFriendsList(friendsList));
  }, [pagination]);

  return (
    <>
    <div className={styles.Friends}>

    
    
     
      {friendsList.map((friend) => (
        <FriendPreview data={friend} key={friend.id} />
      ))}

    </div>
      <Pagination current={pagination} setCurrent={setPagination} state={pagination} />
    </>
  );
};

export default Friends;

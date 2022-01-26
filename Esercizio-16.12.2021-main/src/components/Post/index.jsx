import styles from "./Post.module.scss";
import FixedDate from "../Date";

const Post = (props) => {
  const data = props.data || {
    author: "User",
    text: "text",
    date: new Date(),
    photo:
      "https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
  };
  const date = data.date

  // const hasImage = (photo) => {
  //   if(photo) {
  //     return <img src={data.photo} alt={data.author} />
  //   } else {
  //     return <></>
  //   }
  // }
  
  return (
    <article className={styles.post}>
      <h3>{data.author}</h3>
      <p>
        <small>
        {FixedDate(date)}
        </small>
      </p>
      <p>{data.text}</p>

      {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}
      {/* hasImage(data.photo) */}
    </article>
  );
};

export { Post };

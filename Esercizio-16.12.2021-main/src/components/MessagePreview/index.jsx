import styles from "./MessagePreview.module.scss";
import FixedDate from "../Date";



const MessagePreview = (props) => {
  const data = props.data || {
    text: "lorem ipsum",
    date: new Date(),
    sender: "User",
  };
  const date = data.date
  console.log(new Date(date))
  console.log(new Date())
  return (
    <div className={styles.message}>
      <h5>{data.sender}</h5>
      <p>
        <small>
          {FixedDate(date)}
        </small>
      </p>
      <p>{data.text}</p>
    </div>
  );
};

export { MessagePreview };

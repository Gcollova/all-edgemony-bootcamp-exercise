import styles from "./RandomComponents.module.scss";

const RandomComponent = (props) => {
  
  return (
    <div className={styles.component}>
      <div>
        <p>{props.data.text}</p>
      </div>
      <div>
        <a href={props.data.source_url}>{props.data.source_url}</a>
      </div>
    </div>
  );
};

export default RandomComponent;

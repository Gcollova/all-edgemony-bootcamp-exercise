import styles from "./Main.module.scss";
import RandomComponent from "../RandomComponents";

const Main = (props) => {
  return (
    <div className={styles.main}>
      <RandomComponent data={props.data} />
    </div>
  );
};

export default Main;

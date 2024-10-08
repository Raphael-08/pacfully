import styles from "./style.module.scss";
import Magnetic from "@/components/Magnetic";

export default function index() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <a>Instagram</a>
      </Magnetic>
      <Magnetic>
        <a>Facebook</a>
      </Magnetic>
      <Magnetic>
        <a>Linkedin</a>
      </Magnetic>
    </div>
  );
}

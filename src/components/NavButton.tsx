import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

export default function NavBar({ title, link }) {
  return (
    <>
      <li className={styles["nav-li"]}>
        <Link className={styles["nav-a"]} to={link}>
          {title}
        </Link>
      </li>
    </>
  );
}

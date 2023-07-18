import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

export default function Dropdown({ submenus, url, ativo }) {
  return (
    <div 
      className={styles.dropdown} 
      style={{display: ativo ? "block" : "none"}}
    >
      {submenus.map(submenu => (
          <Link
            className={styles.submenu}
            key={`${url}/${submenu}`} 
            to={`${url}/${submenu}`}
          >
            {submenu}
          </Link>
        ))}
    </div>
  );
}
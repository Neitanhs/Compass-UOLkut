import React from "react";
import styles from "./footer.module.css";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();

  const isProfilePath = location.pathname === "/profile";

  return (
    <footer className={`${styles.footer} ${isProfilePath ? styles.hidden : ""}`}>
      <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
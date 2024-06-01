import cl from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={cl.footer} style={{ backgroundColor: "white" }}>
      <div className={cl.copyright}>
        © 2024 Copyright, All Right Reserved, Made by Ilya Yugai with{" "}
        <span className={cl.heart}>❤️</span>
      </div>
      <div className={cl.socialicon}>
        <a
          href="https://twitter.com"
          target="_blank"
          style={{ margin: "0 25px" }}
        >
          🐦
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          style={{ margin: "0 25px" }}
        >
          🅕
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          style={{ margin: "0 25px" }}
        >
          📸
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          style={{ margin: "0 25px" }}
        >
          💼
        </a>
      </div>
    </footer>
  );
};

export default Footer;

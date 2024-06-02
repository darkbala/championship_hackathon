import Header from "../../components/Header/Header.jsx";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section style={{ paddingTop: "120px" }}>{children}</section>
    </div>
  );
};

export default Layout;

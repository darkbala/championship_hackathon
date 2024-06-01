import Header from "../../components/Header/Header.jsx";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <section >
                {children}
            </section>
        </div>
    );
};

export default Layout;
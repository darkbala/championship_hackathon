import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./module/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import TransactionPage from './pages/TransactionPage/TransactionPage.jsx';
import Signup from "./module/Auth/Signup/Signup.jsx";
import Login from "./module/Auth/Login/Login.jsx";
import Logout from "./module/Auth/Logout/Logout.jsx";
import About from "./components/About/About.jsx";

function App() {

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/transaction" exact element={<TransactionPage/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App;

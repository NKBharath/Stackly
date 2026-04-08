import { useLocation, useNavigate } from "react-router-dom";
import "./home.css";
function Home() {
    const location = useLocation();
    const {username, password} = location.state || {};
    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate("/",{
            state: {
                username: "",
                password: "",
            }
        })
    }
    return ( 
      <div className="main">
        <p>Welcome, {username}!</p>
        <button onClick={handleLogout}>LogOut</button   >
      </div>
     );
}

export default Home;
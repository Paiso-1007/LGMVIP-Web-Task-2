import React, { useState } from "react";
import UserCard from "./Components/UserCard";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import "./styles.css";


const API = "https://reqres.in/api/users?page=1";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDataVisible, setUserDataVisible] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.data) {
        setUsers(data.data);
        setUserDataVisible(true); 
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

   

  return (
    <div className="app">
      <Navbar onGetUsers={fetchUsers} />
      {loading ? (
        <Loader />
      ) : (
        userDataVisible && (  
          <div className="user-grid">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )
      )}
      <br />
      <Footer />
    </div>
  );
};


export default App;

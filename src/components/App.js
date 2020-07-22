import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.userID)
  };
  const handleLogout = () => window.FB.logout(() => setUserID(""));

  return (
    <div>
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userId={userID} />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
      <footer>Mark Rea 2020</footer>
    </div>
  );
}

export default App;

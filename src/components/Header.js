import { Avatar, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
function Header() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [burgerActive, setburgerActive] = useState(true);

  const burger = () => {
    if (burgerActive === true) {
      setburgerActive(false);
    } else {
      setburgerActive(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  const docs = () => {
    history.push("/docs");
  };
  const videos = () => {
    history.push("/videos");
  };
  useEffect(async () => {
    const URL =
      "https://kernelbackend.herokuapp.com/api/admin/auth/account/" +
      localStorage.getItem("uid");

    const options = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };

    const resp = await fetch(URL, options);
    const respData = await resp.json();
    setUser(respData);
  }, []);

  const uploaded = () =>{
      history.push('/uploaded')
  }
  const users = () =>{
      history.push('/users')
  }
  return (
    <div className={`header ${!burgerActive && "hheight"}`}>
      <div className="header_left">
        <img src={process.env.PUBLIC_URL + "./logo.png"} alt="" />
      </div>
      <div className={`header_right ${burgerActive && "rightNone"}`}>
        <p onClick={docs}>Documents</p>
        <p onClick={videos}>Videos</p>
        <p onClick={uploaded}>Uploaded Docs</p>
        <p onClick={users}>Our Users</p>
        <Avatar className="avatar" />
        <h3>Hello, {user.username}</h3>
        <Button className="logout" variant="contained" onClick={logout}>
          Logout
        </Button>
      </div>
      <Menu className="burger" onClick={burger} />
    </div>
  );
}

export default Header;

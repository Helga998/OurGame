import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu";

function Layout({user, setUser}) {
  return (
    <div>
      <Menu user={user} setUser={setUser} />
      <div className="container" style={{ marginTop: "10px" }}></div>
      <Outlet />
    </div>
  );
}

export default Layout;

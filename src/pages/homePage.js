import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";

const HomePage = () => {
  const history = useHistory();
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Navbar />
      <h1>HOMEPAGE</h1>
      <p>Development Demo</p>
      <p className="button-submit" onClick={() => history.push("/login")}>
        Go To Login
      </p>
      <p className="button-submit" onClick={() => history.push("/register")}>
        Go To Register
      </p>
      <p className="button-submit" onClick={() => history.push("/profile/1")}>
        Go To Profile
      </p>
    </div>
  );
};

export default HomePage;

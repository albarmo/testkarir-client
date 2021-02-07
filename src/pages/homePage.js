import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";

const HomePage = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <h1>HOMEPAGE</h1>
      <p>Development Demo</p>
      <p
        className="button-submit-register"
        onClick={() => history.push("/login")}
      >
        Go To Login
      </p>
      <p
        className="button-submit-register"
        onClick={() => history.push("/register")}
      >
        Go To Register
      </p>
      <p
        className="button-submit-register"
        onClick={() => history.push("/test/1")}
      >
        Go To test
      </p>
      <p
        className="button-submit-register"
        onClick={() =>
          history.push("/profile/d4646423-7f26-4511-9496-423fb92efff3")
        }
      >
        Go To Profile
      </p>
    </div>
  );
};

export default HomePage;

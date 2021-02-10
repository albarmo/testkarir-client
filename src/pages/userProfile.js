import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style/userProfile.css";
import Navbar from "../components/navbar";
import qoreContext from "../qoreContext";

const UserProfile = () => {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState();

  const handleLogout = () => {
    localStorage.clear();
    console.log("User is logged out, localStorage now is clear");
    history.push("/");
  };

  // id dummy untuk demo
  // id asli dari use params ketika di push router
  const { data: profileData, status, error } = qoreContext
    .view("allMember")
    .useGetRow(id);

  console.log(status, "<< status");
  console.log(profileData, "<< status");
  console.log(error, "<< error");

  useEffect(() => {
    setData(profileData);
  }, []);
  return (
    <>
      {/* data : {data} */}
      <div className="user-profile">
        <Navbar />

        {profileData ? (
          <div className="container-profile">
            <div className="username-profile">
              <h1 className="username-profile">{profileData.username}</h1>
              <p>{profileData.email}</p>
              <p style={{ marginTop: "15%", fontWeight: "normal" }}>
                Your account status :
                {profileData.status ? "Actived" : "Suspend"}
              </p>
              <p style={{ fontWeight: "normal" }}>User Id : {profileData.id}</p>
              <p style={{ fontWeight: "normal" }}>
                Kota : {profileData.domicile}
              </p>
              <p style={{ fontWeight: "normal" }}>
                Tangal Lahir : {profileData.birthDate}
              </p>
            </div>
            <h3 className="history-header">History Tes</h3>
            <div className="history-test-container">
              <div className="history-card">
                <h4>Tes Minat 1</h4>
                <p>11/03/1998</p>
              </div>
              <div className="right-card">
                <p style={{ fontWeight: "bold" }}>Lihat hasil</p>
              </div>
            </div>
          </div>
        ) : null}
        <div className="button-logout" onClick={() => handleLogout()}>
          Logout
        </div>
      </div>
    </>
  );
};

export default UserProfile;

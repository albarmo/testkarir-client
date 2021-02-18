import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style/userProfile.css";
import Navbar from "../components/navbar";
import qoreContext from "../qoreContext";
import Cookies from "js-cookie";
import graphicImage from "../materials/profile-graphic.png";

const UserProfile = () => {
  const { user } = qoreContext.useCurrentUser();
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState();

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("token");
    console.log("User is logged out, localStorage now is clear");
    history.push("/");
  };

  // id dummy untuk demo
  const { data: profileData, status, error } = qoreContext
    .view("allMember")
    .useGetRow(id);

  useEffect(() => {
    setData(profileData);
  }, []);

  console.log(profileData);

  return (
    <>
      <div className="user-profile">
        <div className="jubmotron-profile">
          <Navbar />
          <div className="container-jumbotron-profile">
            <div className="jumbotron-user">
              <h1 id="user-name">{user ? user.data.username : "loading"}</h1>
              <h4 id="user-email">{user ? user.data.email : "loading"}</h4>
            </div>
            <div className="jumbotron-graphic">
              <img src={graphicImage} alt="image" width="550px" />
            </div>
          </div>
          <div style={{ height: "150px" }}></div>
        </div>

        {profileData ? (
          <div className="container-profile">
            <div className="username-profile">
              <h1 className="username-profile">Ayo Test Sekarang</h1>
            </div>
            <div className="history-test-container">
              <div className="history-card">
                <h2 style={{ marginBottom: "40px", color: "white" }}>
                  Tes Minat 1
                </h2>
                <p style={{ marginTop: "-20px", color: "white" }}>5 menit</p>
              </div>
              <div className="history-card">
                <h2 style={{ marginBottom: "40px", color: "white" }}>
                  Tes Minat 1
                </h2>
                <p style={{ marginTop: "-20px", color: "white" }}>5 menit</p>
              </div>
              <div className="history-card">
                <h2 style={{ marginBottom: "40px", color: "white" }}>
                  Tes Minat 1
                </h2>
                <p style={{ marginTop: "-20px", color: "white" }}>5 menit</p>
              </div>
              <div className="history-card">
                <h2 style={{ marginBottom: "40px", color: "white" }}>
                  Tes Minat 1
                </h2>
                <p style={{ marginTop: "-20px", color: "white" }}>5 menit</p>
              </div>
            </div>
            <h3 className="history-header">Lihat lebih bannyak tes</h3>
          </div>
        ) : null}

        <div className="container-profile">
          <div className="username-profile">
            <h1 className="username-profile">Rekomendasi Artikel</h1>
          </div>
        </div>

        <div className="recomend-container">
          <div className="artikel-card">
            {/* <img
              src="https://c0.klipartz.com/pngpicture/533/98/gratis-png-homer-simpson-bart-simpson-dibujo-pub-quiz-pensamiento-inicio-de-sesion-ixl-zamora.png"
              alt="article image"
              width="60%"
              style={{ marginLeft: "20%" }}
            /> */}
            <h2>Artikel 1</h2>
            <p>5 menit</p>
          </div>
          <div className="artikel-card">
            {/* <img
              src="https://p7.hiclipart.com/preview/893/90/392/homer-simpson-marge-simpson-bart-simpson-lisa-simpson-maggie-simpson-homer.jpg"
              alt="article image"
              width="60%"
              style={{ marginLeft: "20%" }}
            /> */}
            <h2>Artikel 2</h2>
            <p>5 menit</p>
          </div>
          <div className="artikel-card">
            {/* <img
              src="https://w7.pngwing.com/pngs/484/879/png-transparent-homer-simpson-marge-simpson-lisa-simpson-bart-simpson-television-bart-simpson-homer-simpson-marge-simpson-lisa-simpson.png"
              alt="article image"
              width="60%"
              style={{ marginLeft: "20%" }}
            /> */}
            <h2>Artikel 3</h2>
            <p>5 menit</p>
          </div>
          <div className="artikel-card">
            {/* <img
              src="https://e7.pngegg.com/pngimages/994/607/png-clipart-the-simpson-homer-simpson-holding-donut-illustration-homer-simpson-bart-simpson-donuts-computer-icons-homero-text-smiley.png"
              alt="article image"
              width="60%"
              style={{ marginLeft: "20%" }}
            /> */}
            <h2>Artikel 3</h2>
            <p>5 menit</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "60%",
            marginLeft: "30%",
          }}
        >
          <div
            className="button-logout"
            onClick={() => history.push("/agreement")}
          >
            Mulai Test
          </div>

          <div
            className="button-logout"
            onClick={() => history.push("/submision")}
          >
            Ajukan Test
          </div>

          <div className="button-logout" onClick={() => handleLogout()}>
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style/userProfile.css";
import Navbar from "../components/navbarTransparent";
import qoreContext from "../qoreContext";
import Cookies from "js-cookie";
import graphicImage from "../materials/profile-graphic.png";

const UserProfile = () => {
  const { data: allTest } = qoreContext.view("allTest").useListRow({
    limit: 10,
    order: "asc",
  });

  console.log(allTest);

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
              {allTest
                ? allTest.map((val, id) => {
                    return (
                      <>
                        <div
                          className="history-card"
                          onClick={() =>
                            history.push("/agreement", { testId: val.id })
                          }
                        >
                          <h2 style={{ marginBottom: "40px", color: "white" }}>
                            {val.name}
                          </h2>
                          <p style={{ marginTop: "-20px", color: "white" }}>
                            {val.testType.displayField}
                          </p>
                        </div>
                      </>
                    );
                  })
                : "loading"}
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
            <h2>Artikel 1</h2>
            <p>5 menit</p>
          </div>
          <div className="artikel-card">
            <h2>Artikel 2</h2>
            <p>5 menit</p>
          </div>
          <div className="artikel-card">
            <h2>Artikel 3</h2>
            <p>5 menit</p>
          </div>
          <div className="artikel-card">
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

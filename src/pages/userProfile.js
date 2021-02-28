import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style/userProfile.css";
import NavbarTransparent from "../components/navbarTransparent";
import Footer from "../components/footer";
import qoreContext from "../qoreContext";

import graphicImage from "../materials/profile-graphic.png";
import Swal from "sweetalert2";

import Moment from "react-moment";
import "moment-timezone";

const UserProfile = () => {
  const { data: allTest } = qoreContext.view("allTest").useListRow({
    limit: 10,
    order: "asc",
  });
  const { user } = qoreContext.useCurrentUser();
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState();
  const [userProfile, setUserProfile] = useState("");
  const [submisions, setSubmisions] = useState();

  // id dummy untuk demo
  const { data: profileData, status, error } = qoreContext
    .view("allMember")
    .useGetRow(id);

  const { data: allSubmission, revalidate } = qoreContext
    .view("allSubmission")
    .useListRow({
      limit: 50,
      order: "asc",
    });

  useEffect(() => {
    revalidate();
    if (user) {
      setUserProfile(user);
      setSubmisions(allSubmission);
      console.log(user);
    } else {
      console.log("LOADING");
    }
  }, []);

  let userId = user ? user.data.id : null;
  let role = user ? user.data.role.displayField : "loading";
  let today = new Date();

  // console.log(userId, "userid");
  let filteredSubmisions = allSubmission
    ? allSubmission.filter((val) => val.contributor.id === userId)
    : "loading";
  // console.log(allSubmission);
  // console.log(filteredSubmisions, "filtered sub");
  let userData = user ? user.data : "loading";

  if (role === "participants") {
    var submisionId = user ? userData.submisionId.nodes : null;
    var userSubmisionId = user
      ? userData.submisionId.nodes.map((val) => val.id)
      : "loading submisionId user";

    var participantTestFilter = allSubmission
      ? allSubmission.filter(
          (val, id) => val.id == "c69ce6b0-f0c7-46e6-851c-9acbe0155a54"
        )
      : "tidak ada";
    // console.log(participantTestFilter, "aw");
  }

  const { data: allArticle } = qoreContext.view("allArticle").useListRow(
    {
      limit: 4,
      order: "asc",
    },
    { networkPolicy: "cache-only" }
  );

  useEffect(() => {
    setData(user);
  }, []);

  function testHandler(test) {
    let type = test.type;
    if (type === "PG") {
      history.push("/freetest");
    }
    if (type == "R") {
      history.push("/agreement", { testId: test.id });
    }
    if (type == "TF") {
      history.push("/agreement", { testId: test.id });
    }
  }

  function goTotestHandler(date, test) {
    if (date < today) {
      Swal.fire("Any fool can use a computer");
    } else {
      history.push("/agreement", { testId: test.id });
    }
  }

  return (
    <>
      <div className="user-profile">
        <div className="jubmotron-profile">
          <NavbarTransparent />
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

        {role === "contributor" ? (
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
                          onClick={() => testHandler(val)}
                        >
                          <h2 style={{ marginBottom: "40px", color: "white" }}>
                            {val.name}
                          </h2>
                          <p style={{ marginTop: "-20px", color: "white" }}>
                            {val.testType.displayField} - {val.type}
                          </p>
                        </div>
                      </>
                    );
                  })
                : "belum ada test nih !"}
            </div>
          </div>
        ) : null}

        {role === "participants" ? (
          <div className="container-profile">
            <div className="username-profile">
              <h1 className="username-profile">Test Anda</h1>
            </div>
            <div className="history-test-container">
              {participantTestFilter
                ? participantTestFilter.map((val, id) => {
                    return (
                      <>
                        <div
                          className="history-card"
                          onClick={() => goTotestHandler(val.date, val)}
                        >
                          <h2 style={{ marginBottom: "40px", color: "white" }}>
                            {val.test ? val.test.displayField : "loading"}
                          </h2>
                          <p style={{ marginTop: "-20px", color: "white" }}>
                            <Moment fromNow ago>
                              {val.date ? val.date : "loading data"}
                            </Moment>
                            {val.date < today ? " again" : " ago"}
                          </p>
                        </div>
                      </>
                    );
                  })
                : "loading"}
            </div>
          </div>
        ) : null}

        <div className="username-profile">
          <h1 className="username-profile">Rekomendasi Artikel</h1>
        </div>
        <div className="recomend-container">
          {allArticle
            ? allArticle.map((article, id) => {
                return (
                  <>
                    <div
                      key={id}
                      className="artikel-card"
                      id="color-overlay"
                      onClick={() => history.push(`/read/${article.id}`)}
                      style={{
                        backgroundImage: `url("${article.image}")`,
                        backgroundSize: "cover",
                      }}
                    >
                      <h2>{article.title}</h2>
                    </div>
                  </>
                );
              })
            : null}
        </div>

        {role == "contributor" ? (
          <div className="submision">
            <h1>Pengajuan tes di teskarir kurang dari 5 menit</h1>
            <p>
              selamat sejahtera sahabat teskarir, kini anda dapat melakukan tes
              secara kelompok, hanya dengan melakukan pengajuan tes melalui
              website resmi teskarir loh, berikut tahapanya
            </p>

            <br></br>
            <div className="process-submision">
              <div className="process-item">
                <h2>1 . Klik Pengajuan Test</h2>
                <p>
                  button pengajuan terdapat dihalaman profile, dapat ditemukan
                  di bawah ini
                </p>
              </div>
              <div className="process-item">
                <h2>2 . Isi Formulir Pengajuan Test</h2>
                <p>
                  Pastikan data yang anda inputkan valid, seperti tanggal tes ,
                  jenis tes yang diajukan dan email yang digunakan aktif ya
                </p>
              </div>
              <div className="process-item">
                <h2>3 . Upload Data Peseta </h2>
                <p>
                  Setelah mengisi form pengajuan anda dapat melakukan upload
                  data peserta, pada tes ini anda menjadi kontributor dari tes
                  yang diajukan, data yang digunakan akan diproses untuk
                  registrasi otomatis
                </p>
              </div>
              <div className="process-item">
                <h2>4. Selesai </h2>
                <p>
                  Setelah pengajuan dilakukan anda akan segera dihubungi oleh
                  tim dari teskarir
                </p>
              </div>
              <div
                className="process-item"
                onClick={() => history.push("/submision")}
                style={{ cursor: "pointer" }}
              >
                <h2> Ajukan Tes Sekarang</h2>
                <p>klik disini untuk ajukan tes</p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="submision-table">
          {role === "contributor" && filteredSubmisions.length > 0 ? (
            <>
              <h2>Tabel Submision</h2>
              <table
                className="userSubmision-sub"
                // style={{
                //   backgroundColor: "white",
                //   width: "30%",
                //   height: "300px",
                //   justifyContent: "space-around",
                //   textAlign: "left",
                // }}
              >
                <tr>
                  <th>NO</th>
                  <th>Tes</th>
                  <th>Tanggal</th>
                  <th>Count</th>
                  <th>contributor</th>
                  <th>Status</th>
                </tr>
                {filteredSubmisions
                  ? filteredSubmisions.map((val, id) => {
                      return (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>
                            {val.test ? val.test.displayField : "loading"}
                          </td>
                          <td>
                            <Moment parse="YYYY-MM-DD HH:mm">
                              {val.date ? val.date : "loading"}
                            </Moment>
                          </td>
                          <td>
                            <Moment fromNow ago>
                              {val.date ? val.date : "loading"}
                            </Moment>
                            {val.date < today ? " again" : " ago"}
                          </td>
                          <td>
                            {val.contributor
                              ? val.contributor.displayField
                              : "loading"}
                          </td>
                          <td> {val.status ? val.status : "loading"}</td>
                        </tr>
                      );
                    })
                  : "loading data"}
              </table>
            </>
          ) : null}
        </div>

        {role === "participants" ? (
          <>
            <h2>Tabel Submision</h2>
            <table
              className="userSubmision"
              style={{
                backgroundColor: "white",
                width: "50%",
                height: "300px",
                justifyContent: "space-around",
                textAlign: "left",
              }}
            >
              <tr>
                <th>NO</th>
                <th>Tes</th>
                <th>Tanggal</th>
                <th>Count</th>
                <th>contributor</th>
                <th>Status</th>
              </tr>
              {participantTestFilter
                ? participantTestFilter.map((val, id) => {
                    return (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td
                          onClick={() => goTotestHandler(val.date)}
                          style={{ fontWeight: "bolder", cursor: "pointer" }}
                        >
                          {val.test ? val.test.displayField : "loading"}
                        </td>
                        <td>
                          <Moment parse="YYYY-MM-DD HH:mm">
                            {val.date ? val.date : "loading"}
                          </Moment>
                        </td>
                        <td>
                          <Moment fromNow ago>
                            {val.date ? val.date : "loading"}
                          </Moment>
                          {val.date < today ? " again" : " ago"}
                        </td>
                        <td>
                          {val.contributor
                            ? val.contributor.displayField
                            : "loading"}
                        </td>
                        <td> {val.status ? val.status : "loading"}</td>
                      </tr>
                    );
                  })
                : "loading data"}
            </table>
          </>
        ) : null}

        <Footer />
      </div>
    </>
  );
};

export default UserProfile;

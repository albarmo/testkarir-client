import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";
import qoreContext from "../qoreContext";
import "./style/homepage.css";

// graphic images
import jumbotronImage from "../materials/jumbotron.png";
import cardImage1 from "../materials/card-image-1.png";
import cardImage2 from "../materials/card-image-2.png";
import cardImage3 from "../materials/card-image-3.png";
import imageArtistik from "../materials/artistik.png";
import imageRealistik from "../materials/realistik.png";
import imageInvestigatif from "../materials/investigatif.png";
import imageKonvensional from "../materials/konvensional.png";
import imageEnterprising from "../materials/enterprising.png";
import imageSocial from "../materials/social.png";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

// audio
import useSound from "use-sound";
import kuntoAudio from "../audio/kuntoo.mp3";
import rehatAudio from "../audio/kuntoo.mp3";

const HomePage = () => {
  const history = useHistory();
  const [play, { stop }] = useSound(kuntoAudio, { volume: 0.5 });
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <>
      <div className="jumbotron">
        <Navbar />
        {/* jumbotron */}
        <div className="container-jumbotron">
          <div className="jumbotron-text">
            <div>
              <span>
                <h3>#Tentukan langkahmu</h3>
                <h1>Kenali Diri untuk Masa Depan</h1>
              </span>
              <p>
                Kami adalah website khusus tes psikologi yang diprakarsai
                Universitas Udayana kita menyediakan tes psikologi gratis lho
              </p>
              <div
                className="button-jumbotron"
                onClick={() => history.push("/freetest")}
              >
                Coba Gratis
              </div>
            </div>
          </div>
          <div className="image-jumbotron">
            <img src={jumbotronImage} alt="image-jumbotron" width="80%" />
          </div>
        </div>
        {/* section 2 - video */}
        <div className="section-video">
          <div
            className="section-video-text"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1>Ayo Tekan "Play"</h1>
            <p>
              Kami mengabdikan diri untuk membantu anak bangsa dalam menemukan
              dan mengembangkan Karir sesuai Bakat dan Lingkungan yang dimiliki,
              kenali kamu lebih dalam hanya dengan klik ‘Play’.
            </p>
          </div>
          <iframe
            width="30%"
            height="28%"
            src="https://www.youtube.com/embed/Xz7g0-LZEmA"
            allowFullScreen
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // autoplay="true"
          />
        </div>
        {/* section 3 - about teskarir */}
        <div className="section-company">
          <div className="company-text">
            <h2>
              Mulai revolusi dirimu bersama <span>teskarir</span>
            </h2>
            <p>
              Setiap manusia akan mengalami masa-masa revolusinya sendiri baik
              dalam kehidupan dan Karir, jadi kapan kamu akan memilih waktunya?
            </p>
          </div>
          {/* card */}
          <div className="company-card">
            {/* card items */}
            <div className="card">
              <img className="card-image" src={cardImage1} alt="card-1" />
              <h3 className="card-title">Siapa Kami</h3>
              <p>
                Tim kami adalah Psikolog dan praktisi SDM yang siap membantu
                anda dalam perencanaan Karir, Konsultasi, dan Tes Karir.
              </p>
              <div className="button-card" onClick={() => history.push("/")}>
                Coba Gratis
              </div>
            </div>
            <div className="card">
              <img className="card-image" src={cardImage2} alt="card-1" />
              <h3 className="card-title">Mengapa teskarir ?</h3>
              <p>
                Saat ini fitur yang kami sediakan GRATIS, jadi silahkan nikmati
                fitur tes dan mengikuti jadwal Konsultasi yang diadakan setiap
                hari Sabtu dan Minggu
              </p>
              <div className="button-card" onClick={() => history.push("/")}>
                Coba Gratis
              </div>
            </div>
            <div className="card">
              <img className="card-image" src={cardImage3} alt="card-1" />
              <h3 className="card-title">Card Kosong</h3>
              <p>
                masih koosongg ini masih kosoong ada yang ini diiisi apaa yaaa
                kalo cuma dua kaya sepi
              </p>
              <div className="button-card" onClick={() => history.push("/")}>
                Coba Gratis
              </div>
            </div>
          </div>
        </div>

        {/* section 4 - the result */}
        <div className="section-result">
          <div className="section-result-text">
            <h2>
              Do what you want, <span>not</span> what they say.
            </h2>
          </div>
          <div className="result-card-container">
            {/* card-profile-items */}

            <div className="card-profile tooltip">
              {/* audio hover */}
              <span className="tooltiptext">
                <button
                  onMouseEnter={() => {
                    setIsHovering(true);
                    play();
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    stop();
                  }}
                >
                  Seorang konvensional itu ............
                  <div>Hover Audio</div>
                </button>
              </span>
              {/* audio hover */}
              <p className="card-bg-text">
                KON
                <br />
                VEN
                <br />
                SIO
                <br /> NAL
              </p>

              <img
                className="card-image-profile"
                src={imageKonvensional}
                alt="card-1"
              />
              <h3 className="card-title-profile">Konvensional</h3>
            </div>
            {/* card-profile-items */}
            <div className="card-profile tooltip">
              <span className="tooltiptext">
                Seorang Investigatif itu ............
              </span>
              {/* audio hover */}
              <p className="card-bg-text">
                INV
                <br />
                EST
                <br />
                IGA
                <br />
                TIF
              </p>

              <img
                className="card-image-profile"
                src={imageInvestigatif}
                alt="card-1"
              />
              <h3 className="card-title-profile">Investigatif</h3>
            </div>
            {/* card-profile-items */}
            <div className="card-profile tooltip">
              <span className="tooltiptext">
                Seorang Artistik itu ............
              </span>
              <p className="card-bg-text" style={{ fontSize: "5rem" }}>
                AR
                <br />
                TIS
                <br />
                TIK
              </p>

              <img
                className="card-image-profile"
                src={imageArtistik}
                alt="card-1"
              />
              <h3 className="card-title-profile">Artistik</h3>
            </div>
            {/* card-profile-items */}
            <div className="card-profile tooltip">
              <span className="tooltiptext">
                Seorang Realistik itu ............
              </span>
              <p className="card-bg-text">
                RE
                <br />
                AL
                <br />
                IS
                <br />
                TIK
              </p>

              <img
                className="card-image-profile"
                src={imageRealistik}
                alt="card-1"
              />
              <h3 className="card-title-profile">Realistik</h3>
            </div>
            {/* card-profile-items */}
            <div className="card-profile tooltip">
              <span className="tooltiptext">
                Seorang Enterprising itu ............
              </span>
              <p className="card-bg-text">
                ENT
                <br />
                ERP
                <br />
                RIS
                <br />
                ING
              </p>

              <img
                className="card-image-profile"
                src={imageEnterprising}
                alt="card-1"
              />
              <h3 className="card-title-profile">Enterprising</h3>
            </div>
            {/* card-profile-items */}
            <div className="card-profile tooltip">
              <span className="tooltiptext">
                Seorang Socialis itu ............
              </span>
              <p className="card-bg-text">
                SO
                <br />
                CI
                <br />
                AL
                <br />
                IS
              </p>

              <img
                className="card-image-profile"
                src={imageSocial}
                alt="card-1"
              />
              <h3 className="card-title-profile">Socialis</h3>
            </div>
          </div>
        </div>

        {/* section 5 - social media */}
        <div className="section-social-media">
          <div className="social-text">
            <div className="social-media container">
              <h2>@2021 Teskarir.com</h2>
              <div className="social-items">
                {/* items */}
                <div className="items">
                  <FaFacebookF />
                  <a
                    href="https://www.facebook.com/teskarir/?modal=admin_todo_tour"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h3>facebook</h3>
                  </a>
                </div>
                {/* items */}
                <div className="items">
                  <FaInstagram />
                  <a
                    href="https://www.instagram.com/teskarir/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h3>instagram</h3>
                  </a>
                </div>
                {/* items */}
                <div className="items">
                  <FaUserFriends />
                  <a
                    href="https://room.meetzippy.com/mz/room/userreg/bdfc425c2a1f4129886b"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h3>Ruang Konsultasi</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

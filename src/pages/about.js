import react, { useState, useEffect } from "react";
import { useHsitory } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./style/about.css";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <div className="about">
        <Navbar />
        <div className="about-container">
          <h1>Apa itu teskarir.com?</h1>
          <p>
            Kami adalah website khusus tes psikologi yang diprakarsai
            Universitas Udayana kita menyediakan tes psikologi gratis lho
            contohnya yaitu tes yang seperti ini : kamu cocok dengan karir yang
            mana ? Sebelum cus ke tes dengarkan dulu ya video cofounder kita
            soal teskarir.com Cheers….
          </p>

          <iframe
            width="60%"
            height="400px"
            src="https://www.youtube.com/embed/Xz7g0-LZEmA"
            allowFullScreen
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // autoplay="true"
          />
        </div>
        <div className="about-container">
          <h3>Apa itu teskarir.com?</h3>
          <div className="about-sociale">
            <p>
              <a
                href="https://room.meetzippy.com/mz/room/userreg/bdfc425c2a1f4129886b"
                style={{ textDecoration: "none", color: " #0f7c9a" }}
              >
                <FaFacebookF /> teskarir
              </a>
            </p>
            <p>
              <a
                href="https://room.meetzippy.com/mz/room/userreg/bdfc425c2a1f4129886b"
                style={{ textDecoration: "none", color: "#0f7c9a" }}
              >
                <FaInstagram /> @teskarir
              </a>
            </p>

            <p>
              <a
                href="https://room.meetzippy.com/mz/room/userreg/bdfc425c2a1f4129886b"
                style={{ textDecoration: "none", color: "#0f7c9a" }}
              >
                <FaUserFriends /> Group
              </a>
            </p>
          </div>
          <div>
            <h2
              style={{
                textAlign: "left",
                width: "100%",
                padding: "0",
                color: "#0f7c9a",
                marginTop: "60px",
              }}
            >
              Our Office
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3781101183004!2d115.21783771541682!3d-8.65554229045315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409bed2a5729%3A0xc60ccdd8244eb9bf!2sJl.%20Kepundung%20No.9%2C%20Dangin%20Puri%2C%20Kec.%20Denpasar%20Tim.%2C%20Kota%20Denpasar%2C%20Bali%2080232!5e0!3m2!1sid!2sid!4v1614351264961!5m2!1sid!2sid"
              width="500"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;

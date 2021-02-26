import react from "react";
import "./style/footer.css";
import { useHistory } from "react-router-dom";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const Footer = () => {
  const history = useHistory();
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <h3>Teskarir @2021</h3>
          <div className="footer-sociale">
            <p>
              <a
                href="https://room.meetzippy.com/mz/room/userreg/bdfc425c2a1f4129886b"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaFacebookF /> teskarir
              </a>
            </p>
            <p>
              <a
                href="https://room.meetzippy.com/mz/room/userreg/bdfc425c2a1f4129886b"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaInstagram /> @teskarir
              </a>
            </p>

            <p>
              <a
                href="https://room.meetzippy.com/mz/room/userreg/bdfc425c2a1f4129886b"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaUserFriends /> Group
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

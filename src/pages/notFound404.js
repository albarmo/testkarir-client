import react from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useHistory } from "react-router-dom";
import "./style/notFound.css";

export const NotFoundP404 = () => {
  const history = useHistory();
  return (
    <>
      <div className="not-found">
        <Navbar />
        <div className="not-found-container">
          <h1>
            404<br></br> Oops, Page Not Found!
          </h1>
          <p>
            Halaman yang kamu cari tidak dapat ditemukan, pastikan url yang kamu
            masukan benar
          </p>
          <div className="button-notfound" onClick={() => history.push("/")}>
            Back To Home
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFoundP404;

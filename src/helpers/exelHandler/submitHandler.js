import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import qoreContext from "../../qoreContext";

const BulkDataInsert = (props) => {
  const history = useHistory();
  let index = null;
  const [emailError, setEmailNotUnique] = useState("email@error.com");
  const [accounts, setAccounts] = useState("");
  const { send, status } = qoreContext
    .view("allParticipants")
    .useForm("participantUpload");

  async function bulkCreateParticipant(data) {
    console.log(data.date);
    setEmailNotUnique(data.email);
    console.log(data, "insertttting");
    let gender = "male";
    if (data.jenisKelamin == "P") {
      gender = "female";
    }
    let newData = await send({
      email: data.email,
      password: "Password123",
      birtHdate: data.birtHdate,
      domicile: data.domisili,
      status: true,
      gender: gender,
      indentityNumber: data.noIdentitas,
      fullname: data.fullname,
      instansi: "instance",
      educational: "educational",
      contributor: props.contributor,
      submisionId: props.submision.id,
    });
  }
  function trigger(indexLoop) {
    console.log(indexLoop, "<< IndexLooping");
    for (let i = 0; i < indexLoop; i++) {
      bulkCreateParticipant(props.data[i]);
    }
  }

  if (status == "error") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `email ${emailError}  sudah terdaftar;`,
    });
  }

  useEffect(() => {
    setAccounts(props.data);
    console.log(props.data, "props bulk insert");
    index = props.data.length;
    trigger(props.data.length);
  }, []);

  return (
    <>
      <h5>{status}</h5>
      {status === "success" ? (
        <button
          className="button-submision"
          onClick={() =>
            history.push("/report", {
              submision: props.submision,
              data: accounts,
            })
          }
        >
          Lihat Report Pengajuan
        </button>
      ) : null}
    </>
  );
};

export default BulkDataInsert;

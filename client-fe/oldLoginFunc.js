function login(e) {
  e.preventDefault();
  let userCheck = authData.filter(function (user) {
    return user.email === email;
  });
  if (userCheck.length > 0) {
    console.log(`user ada! email => ${userCheck[0].email}`);
    console.log(`user ada! email => ${userCheck[0].password}`);
    if (userCheck[0].passwordShow == password) {
      console.log("GENERATE TOKEN");
      history.push(`/profile/${userCheck[0].id}`);
    } else if (userCheck[0].passwordShow != password) {
      Swal.fire({
        icon: "warning",
        text: "email or password wrong!",
      });
    }
  } else if (userCheck.length == 0) {
    let userCheckByUsername = authData.filter(function (user) {
      return user.username === email;
    });
    if (userCheckByUsername.length >= 1) {
      console.log("user ada! username =>", userCheckByUsername[0].username);
      if (userCheckByUsername[0].passwordShow == password) {
        console.log("GENERATE TOKEN");
        history.push(`/profile/${userCheckByUsername[0].id}`);
      } else if (userCheckByUsername[0].passwordShow != password) {
        Swal.fire({
          icon: "warning",
          text: "email or password wrong!",
        });
      }
    } else {
      console.log("user tidak ada");
    }
  }
}

// // PDF -------------------------------------------------------------------
// doc.setFont("times", "bold");
// doc.setFontSize(22);
// doc.text(`Hii, ${props.location.state.user.data.username} `, 24, 24);
// doc.setFontSize(12);
// doc.setFont("times", "normal");
// doc.text(
//   `Terima kasih banyak sudah melakukan tes minat di teskarir, berikut hasilnya :), `,
//   24,
//   34
// );
// doc.addImage(imgData, "JPEG", 40, 40, 50, 50);
// doc.setFontSize(11);
// doc.setFont("times", "normal");

// // PDF -------------------------------------------------------------------

// function contertPDF() {
//   console.log("<<<<< jsPDF >>>>");
//   doc.save(
//     `Hasil test ${
//       props.location.state.user.username
//         ? props.location.state.user.username
//         : props.location.state.user.data.username
//     } - Teskarir.pdf`
//   );
// }

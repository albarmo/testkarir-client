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

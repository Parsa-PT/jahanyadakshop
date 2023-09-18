export const AddShipping = async (data) => {
  if (data.address || data.nocode || data.city || data.capital !== "") {
    await fetch("http://127.0.0.1:8000/shipping/", {
      method: "POST",
      body: JSON.stringify({
        address: data.address,
        nocode: data.nocode,
        city: data.city,
        user: 10,
        capital: data.capital,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      if (res.status === 200) {
        // setSuc("Login successful");
        setTimeout(() => {
          window.location.assign("/ordersection/paymentmethode/");
        }, 1000);

        localStorage.setItem("shipping", JSON.stringify(data));
      }

      return res.json();
    });
  }
};

export const CreateNewUser = async (data) => {
  if (
    data.fullname ||
    data.username ||
    data.mail ||
    data.password1 ||
    data.password2 !== ""
  ) {
    await fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      if (response.ok === true) {
        setTimeout(() => {
          window.location.assign("/ordersection/registeraccount/logintoken");
        }, 1000);
      }
      return response.json();
    });
  } else {
    alert("درخواست ارسال نشد");
    window.location.reload();
  }
};

export const GetToken = async (data) => {


  let result = {}

  if (data.username || data.password !== "") {
    await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          // setSuc("Login successful");
          setTimeout(() => {
            window.location.assign("/ordersection/shipping");
          }, 1000);
        }

        return res.json();
      })
      .then((data) => {
        if (data.access) {
          localStorage.setItem("token", JSON.stringify(data.access));
          localStorage.setItem("loggedIn", true);
          result = true;
        } else {
          result = false;
        }
      });
  }



  if(result === true){
    return true
  }else{
    return false
  }
};

export const HandlePeyment = async (data) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/377");
  const dataTop = await response.json();
  let link = {dataTop}

  return link
};

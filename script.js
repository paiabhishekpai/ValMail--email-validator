let ResCont = document.querySelector("#ResCont");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "abc",
  email: "abc@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  ResCont.innerHTML = `<img width="123" src="img/loading.gif" alt="">`

//  api_key= insert api key here
  let email = document.getElementById("email").value;
  console.log(email);
  let url = `https://api.emailvalidation.io/v1/info?apikey=${api_key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  console.log("done");
  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }
  console.log(str);
  ResCont.innerHTML = str;
});

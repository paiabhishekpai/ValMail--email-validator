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
    let key = ema_live_lpEQqiccdAnusY13zXnAOOzgweGcgSL6vHxUwV3C
    let email = document.getElementById("email").value
    console.log(email);
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url);
    let result = await res.json();
    console.log("done")
    let str = ``;
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`;
        }
    }
    console.log(str)
    ResCont.innerHTML = str;
});

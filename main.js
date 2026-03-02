const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === "12345" && password === "11111111") {
        window.location.href = "indexx.html";
    } else {
        alert("Login yoki parol noto‘g‘ri!");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("admin-auth");
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("adminLogin").value;
        const password = document.getElementById("adminPassword").value;

        if (username === "admin" && password === "admin123") {
            document.cookie = "adminLoggedIn=true; path=/";
            window.location.href = "admin.html";
        } else {
            alert("Невірні дані адміністратора!");
        }
    });
});

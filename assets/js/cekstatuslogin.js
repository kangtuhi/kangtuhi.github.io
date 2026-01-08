document.addEventListener("DOMContentLoaded", () => {
  const auth = localStorage.getItem("auth");
  const user = JSON.parse(localStorage.getItem("authUser"));

  if (auth && user) {
    document.querySelector(".auth-guest").classList.add("d-none");
    document.querySelector(".auth-user").classList.remove("d-none");
    document.getElementById("navUserName").innerText = user.name;
  }
});

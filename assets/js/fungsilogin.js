function register() {
  const name = regName.value;
  const email = regEmail.value;
  const password = regPassword.value;

  if (!name || !email || !password) {
    Swal.fire("Error", "Pesan KANG TUHI : Lengkapi semua field", "warning");
    return;
  }

  localStorage.setItem(
    "user",
    JSON.stringify({
      name,
      email,
      password,
    })
  );

  Swal.fire(
    "Berhasil",
    "Pesan KANG TUHI : Registrasi sukses, silakan login",
    "success"
  );
  bootstrap.Modal.getInstance(registerModal).hide();
}

function login() {
  const email = loginEmail.value;
  const password = loginPassword.value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== email || user.password !== password) {
    Swal.fire("Gagal", "Pesan KANG TUHI : Email atau password salah", "error");
    return;
  }

  localStorage.setItem("auth", "true");
  localStorage.setItem("authUser", JSON.stringify(user));

  Swal.fire("Sukses", "Pesan KANG TUHI : Login berhasil", "success").then(() =>
    location.reload()
  );
}

function logout() {
  localStorage.removeItem("auth");
  localStorage.removeItem("authUser");
  location.reload();
}

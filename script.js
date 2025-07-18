document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const msgErro = document.getElementById("msgErro");

  if (user === "admin" && pass === "admin123") {
    window.location.href = "/painel.html"; // redireciona se for certo
  } else {
    msgErro.textContent = "Usuário ou senha incorretos.";
  }
});

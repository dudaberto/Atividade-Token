async function login() {
  const user = document.getElementById('email').value;
  const psw = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, psw })
    });

    const data = await res.json();
    console.log(data);

    if (!res.ok) throw new Error(data.message || 'Erro no login');

    localStorage.setItem('token', data.token);
    window.location.href = 'home.html';
  } catch (err) {
    alert('Login falhou: ' + err.message);
  }
}

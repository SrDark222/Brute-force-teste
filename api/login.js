export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Método não permitido');

  const { username, password } = req.body || {};

  // Simulando erro clássico
  if (!username || !password) return res.status(400).send('Erro: Preencha todos os campos');

  // Rejeita qualquer coisa (pra bruteforce testar)
  return res.status(401).send('Login inválido');
}

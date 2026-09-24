export default function Footer() {
  // new Date().getFullYear() pega o ano atual automaticamente,
  // assim o "© 2026" nunca fica desatualizado.
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Primos Code. Tecnologia a serviço do seu negócio.</p>
        <p>Joinville, SC — Brasil</p>
      </div>
    </footer>
  );
}

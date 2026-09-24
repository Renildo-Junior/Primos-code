export default function Footer() {
  // new Date().getFullYear() pega o ano atual automaticamente,
  // assim o "© 2026" nunca fica desatualizado.
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/primoscode?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/primos-code/posts/?feedView=all",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.4a1.56 1.56 0 0 1 .04 3.1ZM5.5 9.75h2.8v9.75H5.5Zm5.22 0h2.68v1.33h.04c.37-.7 1.29-1.44 2.66-1.44 2.84 0 3.37 1.87 3.37 4.29v6.57h-2.8v-6.14c0-1.46-.03-3.35-2.04-3.35-2.05 0-2.36 1.6-2.36 3.25v6.24h-2.8Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <p>© {year} Primos Code. Tecnologia a serviço do seu negócio.</p>
          <p>São Paulo — Brasil</p>
        </div>

        <div className="footer-social">
          <p>Conheça e nos acompanhe em nossas redes</p>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

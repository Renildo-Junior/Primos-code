import Link from "next/link";
import Image from "next/image";

// Lista de links do menu. Fica num array pra ser fácil adicionar
// ou remover uma página sem mexer no JSX lá embaixo.
const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/pacotes", label: "Pacotes" },
  { href: "/modelo-comercial", label: "Modelo Comercial" },
  { href: "/diferenciais", label: "Diferenciais" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/img/logo.png"
            alt="Primos Code"
            width={220}
            height={40}
            priority
          />
        </Link>

        <nav className="main-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

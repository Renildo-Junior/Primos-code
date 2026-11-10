"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <nav id="main-navigation" className={`main-nav${menuOpen ? " main-nav-open" : ""}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contato" onClick={() => setMenuOpen(false)}>Fale com a gente <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

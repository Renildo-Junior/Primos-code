// "use client" avisa o Next.js que este componente roda no
// NAVEGADOR do usuário (não no servidor). Precisamos disso aqui
// porque usamos useState (interatividade) e onSubmit no formulário.
// Sem essa linha, o Next tentaria renderizar isso só no servidor
// e o formulário não reagiria aos cliques.
"use client";

import { useState } from "react";
import Section from "@/components/Section";

const whatsappNumber = "5511988758704";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = [
      `Olá! Meu nome é ${form.nome}.`,
      `Meu e-mail: ${form.email}`,
      "",
      form.mensagem,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <Section eyebrow="Contato" title="Vamos falar sobre o seu projeto">
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <p style={{ marginBottom: 16 }}>
            Conte um pouco sobre o desafio do seu negócio. Ao continuar, sua
            mensagem será preparada no WhatsApp para você enviar diretamente
            para o nosso time.
          </p>
          <p>
            <strong style={{ color: "var(--color-white)" }}>E-mail:</strong>{" "}
            <a href="mailto:Primoscode@gmail.com">Primoscode@gmail.com</a>
          </p>
          <p>
            <strong style={{ color: "var(--color-white)" }}>Local:</strong>{" "}
            São Paulo — Brasil
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card" style={{ display: "grid", gap: 16 }}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Continuar pelo WhatsApp
          </button>
        </form>
      </div>
    </Section>
  );
}

// Estilo inline reaproveitado nos três campos, só para não repetir
// o mesmo objeto três vezes.
const inputStyle = {
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid var(--color-border)",
  backgroundColor: "var(--color-bg)",
  color: "var(--color-white)",
  fontFamily: "inherit",
};

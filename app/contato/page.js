// "use client" avisa o Next.js que este componente roda no
// NAVEGADOR do usuário (não no servidor). Precisamos disso aqui
// porque usamos useState (interatividade) e onSubmit no formulário.
// Sem essa linha, o Next tentaria renderizar isso só no servidor
// e o formulário não reagiria aos cliques.
"use client";

import { useEffect, useState } from "react";
import Section from "@/components/Section";

const whatsappNumber = "5511988758704";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", servico: "", pacote: "", mensagem: "" });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setForm((current) => ({
      ...current,
      servico: query.get("servico") || current.servico,
      pacote: query.get("pacote") || current.pacote,
    }));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = [
      `Olá! Meu nome é ${form.nome}.`,
      `Meu e-mail: ${form.email}`,
      form.servico ? `Serviço de interesse: ${form.servico}` : "",
      form.pacote ? `Pacote de interesse: ${form.pacote}` : "",
      "",
      form.mensagem,
    ].filter((line) => line !== "").join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <Section eyebrow="Contato" title="Vamos falar sobre o seu projeto">
      <div className="contact-layout">
        <div>
          <p style={{ marginBottom: 16 }}>
            Conte o que está acontecendo ou o que gostaria de construir. Se veio
            de um pacote ou serviço, ele já aparece selecionado — nossa equipe
            vai entender seu contexto e preparar uma cotação adequada.
          </p>
          <div className="contact-promise">
            <span aria-hidden="true">✦</span>
            <p><strong>Sem compromisso e sem termos complicados.</strong><br />Você conversa com pessoas que querem entender antes de recomendar.</p>
          </div>
          <p>
            <strong style={{ color: "var(--color-white)" }}>E-mail:</strong>{" "}
            <a href="mailto:Primoscode@gmail.com">Primoscode@gmail.com</a>
          </p>
          <p>
            <strong style={{ color: "var(--color-white)" }}>Local:</strong>{" "}
            São Paulo — Brasil
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card contact-form">
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
            <label htmlFor="servico">O que você precisa?</label>
            <select
              id="servico"
              name="servico"
              value={form.servico}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Selecione se já souber (opcional)</option>
              <option>Desenvolvimento de software</option>
              <option>Qualidade de software</option>
              <option>Suporte técnico</option>
              <option>Manutenção de computadores</option>
              <option>Automação e integrações</option>
              <option>Outro / ainda não sei</option>
            </select>
          </div>
          <div>
            <label htmlFor="pacote">Pacote para cotação</label>
            <select
              id="pacote"
              name="pacote"
              value={form.pacote}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Quero uma recomendação</option>
              <option>Primos Code Prime</option>
              <option>Primos Code Elite</option>
              <option>Primos Code Premium</option>
              <option>Quero ajuda para escolher</option>
            </select>
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
              placeholder="O que você precisa? Qual problema quer resolver? Se puder, conte prazos e quantos equipamentos ou pessoas estão envolvidos."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Preparar mensagem no WhatsApp <span aria-hidden="true">↗</span>
          </button>
          <span className="form-note">Sua mensagem abre no WhatsApp para você revisar e enviar.</span>
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
  fontSize: "1rem",
};

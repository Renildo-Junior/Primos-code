// "use client" avisa o Next.js que este componente roda no
// NAVEGADOR do usuário (não no servidor). Precisamos disso aqui
// porque usamos useState (interatividade) e onSubmit no formulário.
// Sem essa linha, o Next tentaria renderizar isso só no servidor
// e o formulário não reagiria aos cliques.
"use client";

import { useState } from "react";
import Section from "@/components/Section";

export default function ContatoPage() {
  // useState guarda o "estado" do formulário: os valores digitados
  // e se ele já foi enviado ou não.
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  // Chamado a cada tecla digitada em qualquer campo.
  // "e.target.name" é o atributo name do input (ex: "nome"),
  // e usamos ele como chave dinâmica no objeto do estado.
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Chamado quando o formulário é enviado.
  function handleSubmit(e) {
    e.preventDefault(); // evita o recarregamento padrão da página

    // AQUI é onde, no futuro, você chamaria uma API real:
    // fetch("/api/contato", { method: "POST", body: JSON.stringify(form) })
    // Por enquanto só simulamos o envio no front-end.
    console.log("Dados do formulário:", form);
    setEnviado(true);
  }

  return (
    <Section eyebrow="Contato" title="Vamos falar sobre o seu projeto">
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <p style={{ marginBottom: 16 }}>
            Conte um pouco sobre o desafio do seu negócio. Nosso time retorna
            para agendar o diagnóstico inicial.
          </p>
          <p>
            <strong style={{ color: "var(--color-white)" }}>E-mail:</strong>{" "}
            contato@primoscode.com.br
          </p>
          <p>
            <strong style={{ color: "var(--color-white)" }}>Local:</strong>{" "}
            São Paulo — Brasil
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card" style={{ display: "grid", gap: 16 }}>
          {enviado ? (
            <p style={{ color: "var(--color-gold)" }}>
              Mensagem enviada! Em breve entraremos em contato.
            </p>
          ) : (
            <>
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
                Enviar mensagem
              </button>
            </>
          )}
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

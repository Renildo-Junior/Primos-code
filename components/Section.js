// Componente "genérico" de seção: recebe um texto pequeno (eyebrow),
// um título, um parágrafo de apoio e "children" (qualquer coisa
// que colocarmos dentro da tag <Section>...</Section> no lugar que usar).
export default function Section({ eyebrow, title, description, alt, children }) {
  return (
    <section className={alt ? "section-alt" : ""}>
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        {description && <p style={{ maxWidth: 680, marginBottom: 32 }}>{description}</p>}
        {children}
      </div>
    </section>
  );
}

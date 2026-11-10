import Link from "next/link";

export default function PricingCard({ name, description, idealFor, includes, highlight = false }) {
  return (
    <article className={`pricing-card${highlight ? " pricing-card-highlight" : ""}`}>
      {highlight && <span className="pricing-badge">Um ótimo começo</span>}
      <div className="pricing-card-heading">
        <span className="pricing-mark" aria-hidden="true">{highlight ? "✦" : "◈"}</span>
        <span className="pricing-tier">{name.replace("Primos Code ", "PRIMOS CODE / ")}</span>
      </div>
      <h3>{name.replace("Primos Code ", "")}</h3>
      <p className="pricing-description">{description}</p>
      <div className="ideal-for">
        <span>IDEAL PARA</span>
        <p>{idealFor}</p>
      </div>
      <div className="package-includes">
        <span>O QUE PODE ENTRAR</span>
        <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <p className="custom-quote">Escopo e investimento definidos após entendermos sua necessidade.</p>
      <Link href={`/contato?pacote=${encodeURIComponent(name)}`} className={`btn ${highlight ? "btn-primary" : "btn-outline"} pricing-cta`}>
        Quero cotar este pacote <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

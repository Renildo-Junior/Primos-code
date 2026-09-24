// "highlight" é um booleano opcional: quando true, deixa o card
// destacado (fundo dourado), igual ao "Primos Code Prime" no slide.
export default function PricingCard({ name, description, highlight = false }) {
  return (
    <div
      className="card"
      style={
        highlight
          ? { backgroundColor: "var(--color-gold)", borderColor: "var(--color-gold)" }
          : undefined
      }
    >
      <h3 style={highlight ? { color: "#12233a" } : undefined}>{name}</h3>
      <p style={highlight ? { color: "#3a3110" } : undefined}>{description}</p>
    </div>
  );
}

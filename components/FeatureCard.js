// Card reutilizável: título + lista de bullets.
// "items" é um array de strings, ex: ["Item 1", "Item 2"].
export default function FeatureCard({ title, items = [] }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          // O "key" é obrigatório no React quando geramos elementos
          // dentro de um .map() — ajuda o React a saber qual item
          // mudou, sem ele o React reclama no console.
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

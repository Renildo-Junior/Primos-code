import Section from "@/components/Section";

export const metadata = {
  title: "Diferenciais | Primos Code",
};

const diferenciais = [
  { title: "Softwares intuitivos", text: "Interfaces fáceis de usar, pensadas para o dia a dia de quem opera." },
  { title: "Acompanhamento estratégico contínuo", text: "Não entregamos e vamos embora: seguimos ao lado do seu negócio." },
  { title: "Resultados claros e mensuráveis", text: "Você sabe exatamente o que está sendo entregue e o impacto gerado." },
  { title: "Implementação rápida e sem complicações", text: "Processo estruturado para colocar a solução no ar sem dor de cabeça." },
];

export default function DiferenciaisPage() {
  return (
    <Section eyebrow="Diferenciais" title="Por que trabalhar com a Primos Code">
      <div className="grid">
        {diferenciais.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

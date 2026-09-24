import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export const metadata = {
  title: "Modelo Comercial | Primos Code",
};

export default function ModeloComercialPage() {
  return (
    <Section
      eyebrow="Modelo comercial"
      title="Do diagnóstico ao suporte contínuo"
      description="Nosso compromisso é com o sucesso do seu projeto. Atuamos desde a análise inicial até o desenvolvimento em pacotes bem definidos, com suporte contínuo que garante evolução constante, segurança e resultados confiáveis."
    >
      <div className="grid">
        <FeatureCard
          title="Diagnóstico Inicial"
          items={["Análise técnica completa", "Levantamento de riscos", "Mapeamento de oportunidades"]}
        />
        <FeatureCard
          title="Projeto com Pacote Fechado"
          items={["Escopo definido", "Planejamento detalhado", "Entrega estruturada com resultados claros"]}
        />
        <FeatureCard
          title="Consultoria Mensal"
          items={["Suporte contínuo", "Otimização e evolução do software", "Sistemas e processos sempre atualizados"]}
        />
      </div>
    </Section>
  );
}

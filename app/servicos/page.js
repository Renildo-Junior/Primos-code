import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

// Boa prática: cada page.js pode exportar seu próprio "metadata"
// para sobrescrever o title/description da página específica.
export const metadata = {
  title: "Serviços | Primos Code",
};

export default function ServicosPage() {
  return (
    <Section
      eyebrow="Serviços"
      title="Tecnologia pensada para apoiar a operação"
      description="Tecnologia pensada para apoiar a operação e acompanhar o crescimento do negócio."
    >
      <div className="grid">
        <FeatureCard
          title="Desenvolvimento de Software"
          items={["Sistemas web sob medida", "Integrações e automações", "Evolução contínua do produto"]}
        />
        <FeatureCard
          title="Qualidade de Software (QA) e Automação"
          items={["Testes manuais e automatizados", "Prevenção de bugs em produção", "Validação de regras de negócio"]}
        />
        <FeatureCard
          title="Suporte técnico e manutenção de sistemas"
          items={["Atendimento a chamados", "Correções e ajustes", "Acompanhamento contínuo"]}
        />
        <FeatureCard
          title="Manutenção de máquinas e ambientes"
          items={["Cuidado com a infraestrutura do cliente", "Prevenção de falhas", "Ambientes estáveis e seguros"]}
        />
      </div>
    </Section>
  );
}

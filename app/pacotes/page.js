import Section from "@/components/Section";
import PricingCard from "@/components/PricingCard";

export const metadata = {
  title: "Pacotes | Primos Code",
};

export default function PacotesPage() {
  return (
    <Section
      eyebrow="Pacotes"
      title="Soluções completas para cada momento do seu projeto"
      description="Possuímos pacotes completos de desenvolvimento de software, projetados para atender às necessidades reais de cada cliente. Oferecemos soluções com todas as funcionalidades essenciais, além de suporte dedicado e serviços contínuos de manutenção."
    >
      <div className="grid">
        <PricingCard
          highlight
          name="Primos Code Prime"
          description="Ideal para começar seu projeto com todas as funcionalidades básicas, suporte essencial e manutenção confiável."
        />
        <PricingCard
          name="Primos Code Elite"
          description="Para projetos que precisam de mais recursos e personalização, com suporte dedicado e evolução contínua."
        />
        <PricingCard
          name="Primos Code Premium"
          description="Pacote completo para empresas que buscam máxima performance, segurança avançada e acompanhamento integral do software."
        />
      </div>
    </Section>
  );
}

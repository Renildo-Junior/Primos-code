import Section from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import Link from "next/link";

export const metadata = {
  title: "Pacotes | Primos Code",
};

export default function PacotesPage() {
  return (
    <Section
      eyebrow="Pacotes"
      title="Um ponto de partida. Uma solução do seu tamanho."
      description="Os pacotes ajudam a organizar o tipo de acompanhamento. Como cada empresa e projeto tem um contexto diferente, não exibimos preços fixos: conte o que precisa e fazemos uma cotação, indicando a opção mais adequada — ou uma proposta personalizada."
    >
      <div className="pricing-grid">
        <PricingCard
          highlight
          name="Primos Code Prime"
          description="O essencial bem-feito para organizar uma necessidade pontual, dar o primeiro passo em um produto ou cuidar da rotina técnica."
          idealFor="Pequenas melhorias, um novo projeto inicial, suporte pontual ou quem quer validar uma ideia com escopo objetivo."
          includes={["Levantamento inicial e escopo enxuto", "Desenvolvimento ou suporte sob demanda", "Validação das entregas combinadas", "Orientação para os próximos passos"]}
        />
        <PricingCard
          name="Primos Code Elite"
          description="Mais fôlego para projetos em evolução, com personalização, entregas organizadas e parceria técnica recorrente."
          idealFor="Empresas com sistema em operação, integrações a fazer ou uma lista contínua de melhorias e ajustes."
          includes={["Planejamento por etapas e prioridades", "Desenvolvimento e integrações personalizadas", "Testes e acompanhamento das entregas", "Suporte e evolução alinhados ao projeto"]}
        />
        <PricingCard
          name="Primos Code Premium"
          description="Acompanhamento mais próximo para operações que dependem de tecnologia e precisam evoluir continuamente com previsibilidade."
          idealFor="Operações com necessidades complexas, múltiplos sistemas ou demanda recorrente por desenvolvimento, qualidade e suporte."
          includes={["Diagnóstico e planejamento abrangentes", "Evolução contínua e acompanhamento prioritário", "Qualidade, automação e prevenção de falhas", "Visibilidade de andamento e revisão de prioridades"]}
        />
      </div>
      <div className="quote-banner">
        <div><span className="eyebrow">Não sabe qual escolher?</span><h3>Você conta o desafio. A gente recomenda o caminho.</h3><p>Sem compromisso: analisamos o que precisa, entendemos suas prioridades e retornamos com uma cotação adequada ao seu cenário.</p></div>
        <Link href="/contato?pacote=Quero%20ajuda%20para%20escolher" className="btn btn-primary">Me ajudem a escolher <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="faq-block">
        <span className="eyebrow">Perguntas frequentes</span>
        <h2>Antes de pedir sua cotação</h2>
        <details><summary>Os pacotes têm preço fechado?</summary><p>Não. A cotação é feita depois de entendermos o escopo, a urgência e o contexto do seu projeto. Assim, a proposta reflete o que você realmente precisa.</p></details>
        <details><summary>Posso pedir ajuda para escolher?</summary><p>Sim! Se não souber qual pacote faz mais sentido, escolha “Quero ajuda para escolher” no formulário e descreva seu desafio. A recomendação faz parte da conversa inicial.</p></details>
        <details><summary>Os pacotes também atendem suporte técnico?</summary><p>Sim. Atendimento para computadores, configurações, atualizações e manutenção pode ser avaliado na cotação. Conte quantos equipamentos estão envolvidos e o que está acontecendo.</p></details>
      </div>
    </Section>
  );
}

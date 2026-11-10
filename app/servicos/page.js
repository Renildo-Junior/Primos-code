import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

// Boa prática: cada page.js pode exportar seu próprio "metadata"
// para sobrescrever o title/description da página específica.
export const metadata = {
  title: "Serviços | Primos Code",
};

export default function ServicosPage() {
  return (
    <>
      <Section
        eyebrow="Serviços"
        title="Tecnologia pensada para apoiar a operação"
        description="Da rotina do escritório aos sistemas que movem o negócio, ajudamos sua tecnologia a funcionar melhor — com atendimento próximo e soluções que fazem sentido."
      >
        <div className="service-showcase-grid">
          <article className="service-showcase">
            <div className="showcase-image">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80" alt="Detalhe de uma placa eletrônica" loading="lazy" />
              <span className="showcase-label">01 / DESENVOLVIMENTO</span>
            </div>
            <div className="showcase-content">
              <span className="eyebrow">Software sob medida</span>
              <h3>Uma solução com a cara da sua operação</h3>
              <p>Construímos e evoluímos sistemas web que resolvem necessidades específicas, simplificam tarefas e crescem junto com seu negócio.</p>
              <ul><li>Sistemas e aplicações web</li><li>Integrações entre ferramentas</li><li>Automação de processos repetitivos</li><li>Melhorias e evolução de sistemas existentes</li></ul>
              <Link href="/contato?servico=Desenvolvimento%20de%20software" className="text-link">Conversar sobre desenvolvimento <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
          <article className="service-showcase">
            <div className="showcase-image">
              <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=80" alt="Código de software em uma tela" loading="lazy" />
              <span className="showcase-label">02 / QUALIDADE</span>
            </div>
            <div className="showcase-content">
              <span className="eyebrow">Qualidade e automação</span>
              <h3>Mais confiança antes de cada entrega</h3>
              <p>Encontramos problemas cedo, validamos regras importantes e ajudamos o produto a funcionar de forma previsível para quem usa.</p>
              <ul><li>Testes manuais e automatizados</li><li>Validação de fluxos e regras de negócio</li><li>Identificação de falhas e prevenção</li><li>Revisão contínua da experiência de uso</li></ul>
              <Link href="/contato?servico=Qualidade%20de%20software" className="text-link">Conversar sobre qualidade <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        </div>
      </Section>
      <section id="suporte" className="support-section">
        <div className="container">
          <div className="support-heading">
            <div>
              <span className="eyebrow">Suporte técnico do dia a dia</span>
              <h2>Problema com tecnologia? <span className="text-gold">A gente ajuda.</span></h2>
              <p>Conte com uma mão amiga para cuidar de computadores, programas e dos imprevistos que atrapalham sua rotina. Explicamos o que está acontecendo sem complicar.</p>
            </div>
            <Link href="/contato?servico=Suporte%20t%C3%A9cnico" className="btn btn-primary">Pedir ajuda técnica <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="support-grid">
            <FeatureCard title="Computador lento ou travando" items={["Verificação do que está deixando a máquina lenta", "Organização de programas e inicialização", "Análise de espaço e desempenho", "Orientação para evitar que o problema volte"]} />
            <FeatureCard title="Limpeza e cuidados" items={["Limpeza lógica e organização de arquivos", "Verificação de armazenamento e itens temporários", "Cuidados preventivos com o equipamento", "Orientações para manter a máquina em boas condições"]} />
            <FeatureCard title="Configurações e instalação" items={["Configuração inicial de computadores e periféricos", "Instalação e ajustes de programas", "Impressoras, e-mail, áudio, vídeo e acessórios", "Acesso a redes e ferramentas de trabalho"]} />
            <FeatureCard title="Atualização de sistema operacional" items={["Atualizações do Windows e outros sistemas compatíveis", "Verificação de compatibilidade e espaço disponível", "Apoio antes e depois da atualização", "Orientações básicas de segurança e backup"]} />
            <FeatureCard title="Dificuldades cotidianas" items={["Ajuda com erros, pop-ups e mensagens confusas", "Problemas de conexão e acesso a serviços", "Arquivos que não abrem ou não são encontrados", "Dúvidas com aplicativos e tarefas de rotina"]} />
            <FeatureCard title="Suporte a sistemas e manutenção" items={["Correções e pequenos ajustes em sistemas", "Acompanhamento de chamados e incidentes", "Manutenção preventiva do ambiente", "Identificação e encaminhamento de problemas recorrentes"]} />
          </div>
          <p className="support-note">Cada caso é diferente: entendemos o cenário antes de recomendar o atendimento. Quando a demanda exigir peças, licenças ou serviços externos, alinhamos isso com você antes de qualquer contratação.</p>
        </div>
      </section>
    </>
  );
}

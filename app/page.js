import Link from "next/link";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow"><span className="status-dot" /> Tecnologia próxima, soluções que evoluem</span>
            <h1>
              Seu negócio merece uma tecnologia <span className="text-gold">que acompanha você.</span>
            </h1>
            <p>
              Do computador que precisa voltar a funcionar ao software que vai
              transformar sua operação: a Primos Code conecta pessoas, processos
              e tecnologia com cuidado de ponta a ponta.
            </p>
            <div className="cta-group">
              <Link href="/contato" className="btn btn-primary">
                Conte o que você precisa <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/servicos" className="btn btn-outline">
                Explorar soluções
              </Link>
            </div>
            <div className="hero-trust">
              <span><span aria-hidden="true">✓</span> Conversa sem compromisso</span>
              <span><span aria-hidden="true">✓</span> Solução no tamanho certo</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
              alt="Equipe colaborando em soluções de tecnologia"
              fetchPriority="high"
            />
            <div className="visual-shade" />
            <div className="floating-card floating-card-top">
              <span className="floating-icon" aria-hidden="true">✦</span>
              <span><strong>Mais clareza.</strong><small>Menos complicação.</small></span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="online-indicator" />
              <span><strong>Tecnologia em boas mãos</strong><small>Suporte, evolução e parceria</small></span>
            </div>
            <span className="visual-caption">Ideias melhores começam com uma boa conversa.</span>
          </div>
        </div>
      </section>

      <div className="trust-strip" aria-label="Áreas de atuação">
        <div className="container trust-strip-inner">
          <span>Desenvolvimento</span><i />
          <span>Suporte próximo</span><i />
          <span>Qualidade de software</span><i />
          <span>Automação inteligente</span>
        </div>
      </div>

      <Section eyebrow="Quem somos" title="Parceria técnica de verdade" alt>
        <p className="section-lead">
          A gente traduz desafios reais em tecnologia útil — e continua por perto
          depois que a solução entra em ação.
        </p>
        <div className="grid">
          <FeatureCard
            title="Como atuamos"
            items={[
              "Desenvolvimento que acompanha o crescimento do negócio",
              "Qualidade voltada à usabilidade",
              "Tecnologia aplicada ao negócio",
            ]}
          />
          <FeatureCard
            title="O problema que resolvemos"
            items={[
              "Sistemas que não atendem às necessidades do negócio",
              "Usabilidade confusa que dificulta o trabalho dos usuários",
              "Processos manuais e retrabalho no dia a dia",
              "Tecnologia que atrapalha mais do que ajuda",
            ]}
          />
          <FeatureCard
            title="Nossa solução"
            items={[
              "Sistemas alinhados às necessidades reais do negócio",
              "Soluções simples, usáveis e fáceis de manter",
              "Processos automatizados para reduzir retrabalho",
              "Tecnologia que apoia a operação e gera resultado",
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="O que fazemos" title="Tecnologia para cada desafio">
        <div className="home-services-grid">
          <Link href="/servicos" className="service-tile">
            <span className="tile-icon" aria-hidden="true">⌘</span>
            <span className="tile-number">01 / SOFTWARE</span>
            <h3>Soluções sob medida</h3>
            <p>Sistemas, integrações e automações desenhados para a rotina do seu negócio.</p>
            <span className="tile-link">Conheça os serviços <span aria-hidden="true">↗</span></span>
          </Link>
          <Link href="/servicos#suporte" className="service-tile service-tile-image">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
              alt="Profissional realizando manutenção em equipamento"
              loading="lazy"
            />
            <span className="tile-overlay" />
            <span className="tile-icon" aria-hidden="true">⌁</span>
            <span className="tile-number">02 / SUPORTE TÉCNICO</span>
            <h3>Seu dia a dia, sem travar</h3>
            <p>Configuração, limpeza, atualizações e ajuda prática para os imprevistos de tecnologia.</p>
            <span className="tile-link">Saiba como ajudamos <span aria-hidden="true">↗</span></span>
          </Link>
          <Link href="/servicos" className="service-tile">
            <span className="tile-icon" aria-hidden="true">◈</span>
            <span className="tile-number">03 / QUALIDADE</span>
            <h3>Confiança em cada entrega</h3>
            <p>Testes e melhoria contínua para sua tecnologia funcionar como deveria.</p>
            <span className="tile-link">Conheça os serviços <span aria-hidden="true">↗</span></span>
          </Link>
        </div>
      </Section>

      <Section eyebrow="Nosso jeito" title="Tecnologia sem mistério, em cada etapa" alt>
        <div className="journey-grid">
          <div className="journey-step"><span>01</span><h3>Escutamos</h3><p>Entendemos sua necessidade antes de indicar qualquer solução.</p></div>
          <div className="journey-step"><span>02</span><h3>Planejamos</h3><p>Alinhamos prioridades, expectativas e o caminho mais adequado.</p></div>
          <div className="journey-step"><span>03</span><h3>Fazemos junto</h3><p>Executamos com transparência e mantemos você por dentro.</p></div>
          <div className="journey-step"><span>04</span><h3>Seguimos perto</h3><p>Apoiamos a operação e evoluímos a solução quando necessário.</p></div>
        </div>
      </Section>

      <Section>
        <div className="center">
          <span className="eyebrow">Vamos começar?</span>
          <h2>Qual desafio de tecnologia podemos resolver com você?</h2>
          <p style={{ margin: "0 auto 24px" }}>
            Pode ser uma ideia, um sistema ou aquele problema que não pode esperar.
            Conte pra gente — vamos encontrar o melhor próximo passo.
          </p>
          <Link href="/contato" className="btn btn-primary">
            Entrar em contato
          </Link>
        </div>
      </Section>
    </>
  );
}

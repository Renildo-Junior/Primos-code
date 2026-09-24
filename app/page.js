import Link from "next/link";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

// Cada página do App Router é o "export default" de um arquivo
// chamado page.js dentro de uma pasta. A pasta define a URL:
// app/page.js -> "/"  (esta página)
// app/servicos/page.js -> "/servicos"
export default function HomePage() {
  return (
    <>
      {/* HERO: primeira coisa que o visitante vê */}
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Primos Code</span>
          <h1>
            Tecnologia a serviço do <span className="text-gold">seu negócio</span>
          </h1>
          <p>
            Somos uma consultoria de tecnologia que atua como parceira técnica
            dos nossos clientes. Unimos suporte, desenvolvimento, automação e
            qualidade para garantir software confiável, sustentável e que
            realmente apoie o negócio.
          </p>
          <div className="cta-group">
            <Link href="/contato" className="btn btn-primary">
              Fale com a gente
            </Link>
            <Link href="/servicos" className="btn btn-outline">
              Ver serviços
            </Link>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <Section eyebrow="Quem somos" title="Parceria técnica de verdade" alt>
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

      {/* CHAMADA FINAL */}
      <Section>
        <div className="center">
          <h2>Vamos conversar sobre o seu projeto?</h2>
          <p style={{ margin: "0 auto 24px" }}>
            Do diagnóstico inicial ao suporte contínuo, cuidamos de cada etapa.
          </p>
          <Link href="/contato" className="btn btn-primary">
            Entrar em contato
          </Link>
        </div>
      </Section>
    </>
  );
}

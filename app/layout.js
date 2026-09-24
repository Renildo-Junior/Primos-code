import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// "metadata" é lido automaticamente pelo Next.js e vira as tags
// <title> e <meta description> do <head> do HTML — bom para SEO.
export const metadata = {
  title: "Primos Code | Tecnologia a serviço do seu negócio",
  description:
    "Consultoria de tecnologia especializada em desenvolvimento de software, QA e automação, suporte técnico e manutenção de sistemas.",
  icons: {
    icon: "/img/icon.png",
  },
};

// Este é o componente "molde" de TODAS as páginas do site.
// Tudo que colocamos em app/<pagina>/page.js entra no lugar de
// {children} aqui embaixo, entre o Header e o Footer.
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

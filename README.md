# Primos Code — Site institucional

Site de apresentação da **Primos Code**, construído com **Next.js** (React) e
JavaScript puro, usando as cores e a logo da apresentação da empresa.

---

## 1. O que é cada tecnologia (resumo rápido)

| Tecnologia | O que é | Para que serve aqui |
|---|---|---|
| **Node.js** | Ambiente que roda JavaScript fora do navegador | É o "motor" que executa o Next.js na sua máquina e no servidor |
| **npm** | Gerenciador de pacotes que vem junto com o Node | Instala e organiza as bibliotecas do projeto (`package.json`) |
| **React** | Biblioteca para construir interfaces em componentes | Cada pedaço da tela (menu, botão, card) é um componente React |
| **Next.js** | Framework construído sobre o React | Cuida de rotas (URLs), performance, SEO e build de produção pra você |

Pense assim: **Node.js** é o motor do carro, **npm** é quem entrega as
peças, **React** é a peça que monta os bancos e o painel, e **Next.js** é a
montadora que já entrega o carro pronto, com rodas, motor e painel
encaixados do jeito certo.

---

## 2. Estrutura de pastas

```
primos-code-site/
├── app/                      <- App Router do Next.js: CADA PASTA = UMA URL
│   ├── layout.js             <- "molde" que envolve todas as páginas (Header + Footer)
│   ├── globals.css           <- estilos globais e cores da marca
│   ├── page.js                -> URL "/"                (Home)
│   ├── servicos/page.js       -> URL "/servicos"
│   ├── pacotes/page.js        -> URL "/pacotes"
│   ├── modelo-comercial/page.js -> URL "/modelo-comercial"
│   ├── diferenciais/page.js   -> URL "/diferenciais"
│   └── contato/page.js        -> URL "/contato"
├── components/                <- pedaços de interface reutilizados nas páginas
│   ├── Header.js               (cabeçalho fixo com logo e menu)
│   ├── Footer.js               (rodapé)
│   ├── Section.js              (bloco padrão: eyebrow + título + descrição)
│   ├── FeatureCard.js          (card com título + lista de itens)
│   └── PricingCard.js          (card usado na página de Pacotes)
├── public/
│   └── img/
│       ├── logo.png            (logo completa, extraída da apresentação)
│       └── icon.png            (só o símbolo, usado como favicon)
├── jsconfig.json              <- habilita o atalho de import "@/..."
├── next.config.mjs            <- configurações do Next.js
├── package.json               <- lista de dependências e scripts (npm run dev, etc.)
└── .gitignore                 <- arquivos que NÃO devem ir para o GitHub
```

### Por que "cada pasta é uma URL"?

O Next.js (versão App Router, que estamos usando) usa **roteamento por
arquivos**: não existe um arquivo de rotas centralizado como em outros
frameworks. Você cria uma pasta dentro de `app/`, coloca um `page.js`
dentro dela, e pronto — aquela pasta virou uma página acessível pela URL
com o mesmo nome.

```
app/servicos/page.js  →  seusite.com/servicos
app/contato/page.js   →  seusite.com/contato
```

Quer criar uma página nova, por exemplo "Sobre"? Basta criar
`app/sobre/page.js` com um componente React dentro. Não precisa registrar
rota em nenhum outro lugar.

---

## 3. Conceitos usados no código (explicados)

### `layout.js` — o molde de tudo
Todo Next.js App Router tem um `app/layout.js`. Ele envolve **todas** as
páginas do site. Aqui colocamos o `<Header />` e o `<Footer />` dentro
dele, então eles aparecem em toda página automaticamente — você não
precisa importar Header/Footer em cada `page.js`.

### Componentes React
Um componente é só uma função JavaScript que devolve HTML (na verdade
"JSX", uma sintaxe que mistura JS com HTML). Exemplo simplificado do
`Footer.js`:

```js
export default function Footer() {
  return <footer>© 2026 Primos Code</footer>;
}
```

Depois, em qualquer lugar, você usa `<Footer />` como se fosse uma tag
HTML normal.

### Props (propriedades)
Componentes recebem dados de fora através de "props", parecido com
atributos de HTML. No `FeatureCard.js`:

```js
<FeatureCard title="Serviços" items={["Item 1", "Item 2"]} />
```

Dentro do componente, `title` e `items` chegam como parâmetros da função
e podem ser usados no JSX.

### `useState` e `"use client"` (página de Contato)
Por padrão, componentes do Next.js App Router rodam **no servidor**
(chamados de "Server Components") — mais rápidos e melhores para SEO,
mas não conseguem reagir a cliques, digitação, etc.

Quando uma página precisa de interatividade — como o formulário de
contato, que guarda o que o usuário digita — usamos:

1. `"use client"` no topo do arquivo: avisa "isso roda no navegador".
2. `useState`: guarda um valor que pode mudar (o "estado") e faz a tela
   re-renderizar sozinha quando ele muda.

### `next/link` e `next/image`
- `<Link href="/contato">` do Next.js troca de página **sem recarregar
  o site inteiro** (navegação instantânea, como um app).
- `<Image>` do Next.js otimiza automaticamente o tamanho e o carregamento
  das imagens (mais rápido que uma tag `<img>` comum).

### CSS global x estilo inline
Colocamos a maior parte do visual em `app/globals.css`, usando
**variáveis CSS** (`--color-bg`, `--color-gold`, etc.) definidas uma vez
no topo do arquivo. Isso significa: se um dia quiser mudar o tom do
dourado da marca, você troca em uma linha e o site inteiro atualiza.

---

## 4. Como rodar o projeto na sua máquina

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado (versão 18
ou superior).

```bash
# 1. Entrar na pasta do projeto
cd primos-code-site

# 2. Instalar as dependências (cria a pasta node_modules)
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
```

Depois abra **http://localhost:3000** no navegador. Qualquer alteração
que você salvar em um arquivo aparece na hora (hot reload).

Para gerar a versão de produção (otimizada):

```bash
npm run build
npm run start
```

---

## 5. Como subir para o GitHub

```bash
# dentro da pasta primos-code-site
git init
git add .
git commit -m "Primeira versão do site institucional Primos Code"

# crie um repositório vazio no GitHub antes deste passo,
# depois copie a URL que ele te dá (SSH ou HTTPS)
git remote add origin <URL_DO_SEU_REPOSITORIO>
git branch -M main
git push -u origin main
```

O arquivo `.gitignore` já está configurado para **não enviar** a pasta
`node_modules` (ela é recriada com `npm install`) nem arquivos `.env`
com senhas ou chaves.

### Colocando o site no ar (deploy)
A forma mais simples para projetos Next.js é a [Vercel](https://vercel.com/)
(empresa que mantém o Next.js): você conecta o repositório do GitHub e
ela publica o site automaticamente a cada `git push`, de graça no plano
gratuito.

---

## 6. Próximos passos sugeridos

- Trocar o e-mail e o texto de contato pelos dados reais da empresa.
- Conectar o formulário de contato a um serviço de envio de e-mail (por
  exemplo, uma rota de API do próprio Next.js em `app/api/contato/route.js`,
  ou um serviço como Resend/EmailJS).
- Adicionar imagens reais do time/projetos na home.
- Registrar um domínio (ex: primoscode.com.br) e apontar para o deploy.

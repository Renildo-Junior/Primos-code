# Primos Code — Site institucional

Site de apresentação da **Primos Code**, construído com **Next.js** (React) e
JavaScript puro, usando as cores e a logo da apresentação da empresa.

O site apresenta os serviços, pacotes, modelo comercial e diferenciais da
Primos Code em uma experiência responsiva. A home reúne atalhos para as
soluções e etapas de atendimento; o menu móvel pode ser aberto e fechado; e
os serviços incluem suporte técnico para problemas do dia a dia.

## Como o site funciona

O projeto usa o App Router do Next.js. A aplicação começa em
`app/layout.js`, que monta a estrutura comum de todas as páginas:

1. O `Header` aparece no topo.
2. O conteúdo da rota atual entra dentro de `<main>`.
3. O `Footer` aparece no final, incluindo localização e redes sociais.

Cada pasta dentro de `app/` representa uma rota. Por exemplo,
`app/servicos/page.js` gera a página `/servicos`. Os componentes da pasta
`components/` são reutilizados para manter o visual consistente.

O formulário da página `/contato` valida os campos obrigatórios e prepara uma
mensagem preenchida para o WhatsApp da empresa, que o cliente pode revisar e
enviar. Ele não envia mensagens automaticamente, e-mails nem possui API de
contato configurada.

Na página `/pacotes`, cada opção descreve para quem é indicada e exemplos do
que pode incluir. Os botões de cotação levam ao formulário com o pacote
selecionado. Os links de contato em `/servicos` também preenchem o serviço de
interesse. A cotação e o escopo são definidos após a conversa com o cliente;
não há preços fixos publicados.

A página `/servicos#suporte` descreve ajuda cotidiana com computadores lentos,
limpeza lógica, configurações e instalações, atualizações do sistema
operacional, dificuldades com aplicativos e manutenção de sistemas.

As fotografias da home e dos serviços são carregadas do Unsplash. Elas são
ilustrativas e ficam hospedadas externamente, portanto precisam de conexão
com a internet para aparecer. O Unsplash permite o uso das fotos sob sua
licença sem autorização individual prévia; consulte a [licença do
Unsplash](https://unsplash.com/license) para os termos aplicáveis.

Os ícones do Instagram e do LinkedIn ficam no componente global
`components/Footer.js` e abrem os perfis da empresa em uma nova aba.

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
│   ├── Header.js               (cabeçalho com menu móvel interativo)
│   ├── Footer.js               (rodapé)
│   ├── Section.js              (bloco padrão: eyebrow + título + descrição)
│   ├── FeatureCard.js          (card com título + lista de itens)
│   └── PricingCard.js          (pacotes e atalhos para cotação)
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

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm, instalado junto com o Node.js
- Git, caso queira clonar o projeto

### Instalação do zero

Clone o repositório e entre na pasta que contém o `package.json`:

```bash
git clone https://github.com/Renildo-Junior/Primos-code.git
cd Primos-code
```

Se o projeto já estiver baixado, entre diretamente na pasta correta:

```bash
cd primos-code-site
```

Instale as dependências:

```bash
npm install
```

### Ambiente de desenvolvimento

Inicie o servidor:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

Rotas disponíveis no ambiente local:

| Página | URL |
|---|---|
| Home | `http://localhost:3000/` |
| Serviços e suporte técnico | `http://localhost:3000/servicos` |
| Seção de suporte técnico | `http://localhost:3000/servicos#suporte` |
| Pacotes | `http://localhost:3000/pacotes` |
| Modelo comercial | `http://localhost:3000/modelo-comercial` |
| Diferenciais | `http://localhost:3000/diferenciais` |
| Contato | `http://localhost:3000/contato` |

### Fluxo de cotação e contato

1. Escolha um pacote em `/pacotes`, ou inicie uma conversa sobre um serviço
   em `/servicos`.
2. O formulário de `/contato` abre com a opção correspondente pré-selecionada.
   Também é possível escolher um serviço e um pacote diretamente no formulário.
3. Preencha nome, e-mail e descrição da necessidade. Se possível, informe
   prazos, quantidade de equipamentos e o problema observado.
4. Clique em **Preparar mensagem no WhatsApp** para revisar os dados no
   WhatsApp antes de enviar.

O cliente decide se envia a mensagem. A cotação não é automática: a equipe
avalia o contexto para indicar o pacote e escopo adequados.

Enquanto `npm run dev` estiver ativo, salve os arquivos para usar o
recarregamento automático. Para encerrar o servidor, pressione `Ctrl + C`.

### Build e produção local

Para validar e gerar a versão otimizada:

```bash
npm run build
```

Depois da build, execute a versão de produção:

```bash
npm run start
```

O comando `npm run start` precisa ser executado depois de `npm run build`.
Ele normalmente disponibiliza a aplicação em `http://localhost:3000`.

### Comandos disponíveis

| Comando | Função |
|---|---|
| `npm install` | Instala as dependências do `package.json` |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão otimizada para produção |
| `npm run start` | Executa a build de produção |
| `npm run lint` | Executa `next lint`; requer configuração ESLint local |

### Alterando o projeto

- Edite páginas em `app/`.
- Edite componentes reutilizáveis em `components/`.
- Edite cores e layout global em `app/globals.css`.
- Coloque imagens públicas em `public/img/`.
- Salve o arquivo e atualize o navegador quando necessário.

Não coloque senhas, tokens ou arquivos `.env.local` no Git. O `.gitignore`
do projeto já ignora arquivos de ambiente e a pasta `node_modules`.

Para conferir quais arquivos foram alterados:

```bash
git status
```

O projeto pode ser executado em qualquer ambiente com Node.js compatível;
não é necessário instalar React ou Next.js globalmente.

---

## 5. Como publicar no GitHub

```bash
# conferir as alterações
git status

# preparar os arquivos alterados
git add .
git commit -m "Descreve a alteração"
git push origin main
```

O arquivo `.gitignore` já está configurado para **não enviar** a pasta
`node_modules` (ela é recriada com `npm install`) nem arquivos `.env`
com senhas ou chaves.

### Publicando na Vercel

A forma mais simples para projetos Next.js é a [Vercel](https://vercel.com/)
(empresa que mantém o Next.js). Para publicar:

1. Entre na Vercel usando sua conta do GitHub.
2. Clique em **Add New > Project**.
3. Importe o repositório `Renildo-Junior/Primos-code`.
4. Mantenha o framework como **Next.js**.
5. Deixe os comandos de build e a pasta de saída no padrão automático.
6. Clique em **Deploy**.

Depois do primeiro deploy, cada `git push origin main` pode iniciar um novo
deploy automaticamente, se o projeto estiver conectado ao GitHub.

Para testar o resultado, abra a URL `.vercel.app` fornecida pela Vercel e
acesse as mesmas rotas listadas na seção de ambiente local.

---

## 6. Próximos passos sugeridos

- Trocar o e-mail e o texto de contato pelos dados reais da empresa.
- Conectar o formulário de contato a um serviço de envio de e-mail quando
  essa funcionalidade for necessária, usando variáveis de ambiente seguras.
- Se preferir não depender de imagens hospedadas externamente, salvar imagens
  licenciadas em `public/img/` e atualizar os caminhos nas páginas.
- Registrar um domínio (ex: primoscode.com.br) e apontar para o deploy.

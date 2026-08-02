# Landing Page — BiotecBrazil

Landing page institucional e comercial estática para a BiotecBrazil, preparada para publicação no GitHub Pages.

## O que esta versão inclui

- Posicionamento claro para cursos, assessoria científica e soluções para empresas
- Layout responsivo para celular, tablet e desktop
- Cursos em formato de lista de interesse, sem divulgar datas antigas
- Seleção do curso com preenchimento automático do formulário
- Formulário que cria uma mensagem organizada no WhatsApp
- Seção de autoridade com referências externas à USP, POLI-USP e publicação científica
- Biografia e titulações apresentadas de forma mais precisa
- SEO básico, dados estruturados, sitemap, robots.txt, manifesto e página 404
- Acessibilidade e animações leves, sem frameworks
- Carregamento automático de fotografia institucional opcional

## Arquivos principais

- `index.html`: conteúdo e estrutura-base
- `styles.css`: identidade visual e responsividade
- `enhancements.css`: refinamentos da versão 2
- `script.js`: navegação, conversão, autoridade, SEO e WhatsApp
- `robots.txt`: regras para buscadores
- `sitemap.xml`: mapa da página
- `site.webmanifest`: informações do aplicativo/site
- `404.html`: redirecionamento de URLs inexistentes
- `.github/workflows/deploy.yml`: publicação pelo GitHub Actions

## Publicação no GitHub Pages

O workflow está configurado para publicar automaticamente a branch `main`.

Para a primeira ativação:

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **GitHub Actions**.
3. Abra a aba **Actions** e confirme a execução de **Deploy to GitHub Pages**.

Endereço esperado:

`https://rsucupira.github.io/lp-biotecbrazil/`

## Fotografia institucional

Para substituir automaticamente o bloco com as iniciais, adicione uma fotografia autorizada neste caminho:

`assets/photos/elidamar.webp`

Recomendações:

- formato vertical;
- proporção próxima de 4:5;
- pelo menos 1.200 px de altura;
- arquivo WebP otimizado, preferencialmente abaixo de 500 KB;
- enquadramento com espaço ao redor do rosto e dos ombros.

Se o arquivo não existir, a página mantém automaticamente o bloco visual com as iniciais `EN`.

## Dados atualmente configurados

- WhatsApp: `+55 (11) 97851-2581`
- E-mail: `contato@biotecbrazil.com.br`
- Página pública prevista: `https://rsucupira.github.io/lp-biotecbrazil/`

## Próximos dados comerciais necessários

- datas das próximas turmas;
- modalidade e carga horária de cada curso;
- valores e condições de pagamento;
- fotografia oficial da coordenação;
- confirmação dos canais oficiais de redes sociais;
- decisão sobre registro dos contatos em Tally, CRM, planilha ou e-mail, além do WhatsApp.

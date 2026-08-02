# Landing Page — BiotecBrazil

Landing page institucional e comercial estática para a BiotecBrazil, preparada para publicação no GitHub Pages.

## Estado atual

A implementação está concluída no branch `main`. Como o projeto usa apenas HTML, CSS e JavaScript, a publicação foi simplificada para **Deploy from a branch**, sem workflow próprio.

## O que esta versão inclui

- posicionamento para cursos, assessoria científica e soluções para empresas;
- layout responsivo para celular, tablet e desktop;
- cursos em formato de lista de interesse, sem datas antigas;
- seleção do curso com preenchimento automático do formulário;
- formulário que cria uma mensagem organizada no WhatsApp;
- campo opcional de telefone;
- histórico institucional de eventos e comunidades;
- seção de autoridade com referências externas à USP, POLI-USP e publicação científica;
- biografia e titulações apresentadas de forma mais precisa;
- razão social e CNPJ no rodapé e nos dados estruturados;
- SEO básico, sitemap, `robots.txt`, manifesto e página 404;
- acessibilidade e animações leves, sem frameworks;
- fotografia institucional local opcional, com fallback para a imagem do site atual.

## Arquivos principais

- `index.html`: conteúdo e estrutura-base;
- `styles.css`: identidade visual e responsividade;
- `enhancements.css`: refinamentos de conversão e autoridade;
- `script.js`: navegação, formulário, seções adicionais, SEO e WhatsApp;
- `robots.txt`: regras para buscadores;
- `sitemap.xml`: mapa da página;
- `site.webmanifest`: informações do site;
- `404.html`: redirecionamento de URLs inexistentes;
- `.nojekyll`: publicação direta dos arquivos estáticos.

## Ativação do GitHub Pages

Esta é a única etapa obrigatória que precisa ser feita na interface do GitHub:

1. abra **Settings → Pages**;
2. em **Build and deployment → Source**, selecione **Deploy from a branch**;
3. selecione o branch **main**;
4. selecione a pasta **/ (root)**;
5. clique em **Save**.

Endereço esperado:

`https://rsucupira.github.io/lp-biotecbrazil/`

Após a ativação, alterações futuras no branch `main` serão publicadas automaticamente.

## Fotografia institucional

O site tenta carregar primeiro:

`assets/photos/elidamar.webp`

Quando o arquivo não existe, tenta usar como fallback a imagem já publicada no site institucional. Caso nenhuma imagem carregue, mantém o bloco com as iniciais `EN`.

Para a versão definitiva, recomenda-se adicionar uma fotografia autorizada localmente:

- formato vertical;
- proporção próxima de 4:5;
- pelo menos 1.200 px de altura;
- arquivo WebP abaixo de 500 KB;
- fundo simples e enquadramento profissional.

## Dados configurados

- WhatsApp: `+55 (11) 97851-2581`
- E-mail: `contato@biotecbrazil.com.br`
- Razão social: `BIOTEC CONSULTORIA EM BIOTECNLOGIA LTDA`
- CNPJ: `38.383.562/0001-34`
- Página prevista: `https://rsucupira.github.io/lp-biotecbrazil/`

## Dados comerciais ainda necessários

Estes dados não bloqueiam a publicação, mas serão necessários antes de iniciar campanhas ou matrículas:

- datas das próximas turmas;
- modalidade e carga horária de cada curso;
- valores e condições de pagamento;
- confirmação final da fotografia;
- confirmação dos canais oficiais de Instagram e LinkedIn;
- definição de um sistema para registrar leads além do WhatsApp, como Tally, CRM, planilha ou e-mail.

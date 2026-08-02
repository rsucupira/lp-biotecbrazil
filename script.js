(() => {
  const CONFIG = {
    whatsapp: '5511978512581',
    siteUrl: 'https://rsucupira.github.io/lp-biotecbrazil/',
    companyName: 'BiotecBrazil – NanoBiotech Solutions'
  };

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const form = document.querySelector('#contact-form');
  const interestField = form?.querySelector('[name="interest"]');
  const messageField = form?.querySelector('[name="message"]');
  const formNote = document.querySelector('#form-note');

  const addHeadEnhancements = () => {
    if (!document.querySelector('link[href="enhancements.css"]')) {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'enhancements.css';
      document.head.appendChild(stylesheet);
    }

    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = CONFIG.siteUrl;
      document.head.appendChild(canonical);
    }

    if (!document.querySelector('link[rel="manifest"]')) {
      const manifest = document.createElement('link');
      manifest.rel = 'manifest';
      manifest.href = 'site.webmanifest';
      document.head.appendChild(manifest);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', CONFIG.siteUrl);
    if (!ogUrl.parentNode) document.head.appendChild(ogUrl);

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${CONFIG.siteUrl}#organization`,
          name: CONFIG.companyName,
          alternateName: 'BiotecBrazil',
          url: CONFIG.siteUrl,
          email: 'contato@biotecbrazil.com.br',
          sameAs: [
            'https://www.instagram.com/biotecbrazil/',
            'https://www.linkedin.com/company/biotecbrazil/'
          ],
          areaServed: 'BR',
          knowsAbout: ['Biotecnologia', 'Nanobiotecnologia', 'Biorremediação', 'Engenharia genética', 'Assessoria científica']
        },
        {
          '@type': 'Person',
          '@id': `${CONFIG.siteUrl}#elidamar`,
          name: 'Elidamar Nunes de Carvalho Lima',
          jobTitle: 'Bióloga, professora e pesquisadora',
          affiliation: { '@type': 'Organization', name: 'BiotecBrazil' },
          sameAs: [
            'https://br.linkedin.com/in/elidamarnunes',
            'https://www.poli.usp.br/noticias/biologa-encontra-solucoes-para-desafios-na-saude-por-meio-da-engenharia/'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${CONFIG.siteUrl}#website`,
          url: CONFIG.siteUrl,
          name: 'BiotecBrazil',
          publisher: { '@id': `${CONFIG.siteUrl}#organization` },
          inLanguage: 'pt-BR'
        }
      ]
    });
    document.head.appendChild(schema);
  };

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  const preselectInterest = (interest, message = '') => {
    if (interestField) interestField.value = interest;
    if (messageField && message && !messageField.value.trim()) messageField.value = message;
    form?.classList.add('contact-highlight');
    window.setTimeout(() => form?.classList.remove('contact-highlight'), 1400);
  };

  document.querySelectorAll('[data-interest]').forEach((button) => {
    button.addEventListener('click', () => {
      preselectInterest(button.dataset.interest || 'Outro assunto');
    });
  });

  const improveCourseFlow = () => {
    const cards = [...document.querySelectorAll('#cursos .course-card')];
    cards.forEach((card) => {
      const title = card.querySelector('h3')?.textContent?.trim();
      const link = card.querySelector('.text-link');
      if (!link || !title) return;

      link.href = '#contato';
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.textContent = 'Entrar na lista de interesse →';
      link.setAttribute('aria-label', `Entrar na lista de interesse do curso ${title}`);
      link.addEventListener('click', () => {
        preselectInterest('Curso ou formação', `Tenho interesse no curso “${title}” e gostaria de receber informações sobre a próxima turma.`);
      });
    });

    const note = document.querySelector('.course-note p');
    if (note) {
      note.innerHTML = '<strong>Próximas turmas:</strong> escolha o curso e deixe seu contato. A equipe enviará formato, datas, carga horária e condições atualizadas antes da inscrição.';
    }
  };

  const improveBiography = () => {
    const name = document.querySelector('.portrait-label strong');
    if (name) name.textContent = 'Profa. Dra. Elidamar Nunes de Carvalho Lima';

    const bio = document.querySelector('#sobre .section-heading');
    const paragraphs = bio?.querySelectorAll(':scope > p:not(.eyebrow)');
    if (paragraphs?.[0]) {
      paragraphs[0].textContent = 'Bióloga, mestre em Biotecnologia pela USP e doutora em Ciências pelo Programa de Pós-Graduação em Infectologia da UNIFESP, com trajetória de pesquisa e pós-doutorado na Escola Politécnica da USP.';
    }
    if (paragraphs?.[1]) {
      paragraphs[1].textContent = 'Sua atuação integra ensino, pesquisa, nanobiotecnologia, saúde, meio ambiente e desenvolvimento de projetos científicos multidisciplinares.';
    }

    const qualifications = document.querySelectorAll('#sobre .qualification > div');
    if (qualifications[0]) qualifications[0].innerHTML = '<strong>Doutorado</strong><span>Ciências • Infectologia, UNIFESP</span>';
    if (qualifications[1]) qualifications[1].innerHTML = '<strong>Pós-doutorado</strong><span>Escola Politécnica da USP</span>';
    if (qualifications[2]) qualifications[2].innerHTML = '<strong>Atuação</strong><span>Ensino, pesquisa e inovação</span>';

    const trajectoryLink = document.querySelector('#sobre .text-link');
    if (trajectoryLink) {
      trajectoryLink.href = 'https://www.poli.usp.br/noticias/biologa-encontra-solucoes-para-desafios-na-saude-por-meio-da-engenharia/';
      trajectoryLink.textContent = 'Conhecer a trajetória na POLI-USP ↗';
    }
  };

  const addEvidenceSection = () => {
    if (document.querySelector('#autoridade')) return;
    const testimonials = document.querySelector('#depoimentos');
    if (!testimonials) return;

    const section = document.createElement('section');
    section.className = 'section evidence-section';
    section.id = 'autoridade';
    section.innerHTML = `
      <div class="container">
        <div class="section-heading heading-row reveal">
          <div>
            <p class="eyebrow">Autoridade verificável</p>
            <h2>Trajetória conectada ao ensino, à pesquisa e à inovação.</h2>
          </div>
          <p>Em ciência, confiança também se constrói com referências. Estes links externos ajudam o visitante a conhecer parte da atuação acadêmica e científica da coordenação.</p>
        </div>
        <div class="evidence-grid">
          <a class="evidence-card reveal" href="https://www.poli.usp.br/noticias/biologa-encontra-solucoes-para-desafios-na-saude-por-meio-da-engenharia/" target="_blank" rel="noopener">
            <span class="evidence-source">POLI-USP</span>
            <h3>Perfil institucional e trajetória multidisciplinar</h3>
            <p>Reportagem da Escola Politécnica sobre a atuação de Elidamar Nunes em ciência, saúde e engenharia.</p>
            <strong>Consultar referência ↗</strong>
          </a>
          <a class="evidence-card reveal" href="https://eaulas.usp.br/portal/home.action/course?course=12973" target="_blank" rel="noopener">
            <span class="evidence-source">e-Aulas USP</span>
            <h3>Participação em formação universitária</h3>
            <p>Registro institucional relacionado à disciplina Introdução à Biotecnologia e a conteúdo acadêmico na USP.</p>
            <strong>Consultar referência ↗</strong>
          </a>
          <a class="evidence-card reveal" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8367085/" target="_blank" rel="noopener">
            <span class="evidence-source">Publicação científica</span>
            <h3>Pesquisa em nanotecnologia e vacinas</h3>
            <p>Artigo científico sobre perspectivas do uso de nanotubos de carbono no desenvolvimento de vacinas.</p>
            <strong>Consultar referência ↗</strong>
          </a>
        </div>
        <p class="evidence-disclaimer reveal">Os links direcionam a páginas externas de instituições e bases científicas. Eles são apresentados como referências de trajetória, não como endosso comercial aos serviços.</p>
      </div>`;

    testimonials.before(section);
  };

  const setupObserver = () => {
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -45px' })
      : null;

    document.querySelectorAll('.reveal').forEach((element) => {
      if (element.classList.contains('is-visible')) return;
      if (observer) observer.observe(element);
      else element.classList.add('is-visible');
    });
  };

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const interest = String(data.get('interest') || '').trim();
    const message = String(data.get('message') || '').trim();

    const whatsappMessage = [
      'Olá, BiotecBrazil!',
      '',
      `Meu nome é ${name}.`,
      `E-mail: ${email}`,
      `Interesse: ${interest}`,
      '',
      'Mensagem:',
      message,
      '',
      'Contato enviado pela landing page da BiotecBrazil.'
    ].join('\n');

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    if (formNote) formNote.textContent = 'Abrindo o WhatsApp com sua mensagem...';
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  addHeadEnhancements();
  improveCourseFlow();
  improveBiography();
  addEvidenceSection();
  setupObserver();

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

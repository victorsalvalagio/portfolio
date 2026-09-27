/* =========================
   ANIMAÇÃO DAS SEÇÕES
   ========================= */

// Pega todas as seções da página
const sections = document.querySelectorAll("section");

// Observa quando as seções aparecem na tela
const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // Se a seção estiver aparecendo na tela
            if (entry.isIntersecting) {

                // Adiciona a classe que torna a seção visível
                entry.target.classList.add("visivel");
            }
        });
    },
    {
        threshold: 0.15
    }
);


// Começa a observar cada seção
sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================
   ANIMAÇÃO DAS HABILIDADES
   ========================= */

// Pega todos os cards de habilidades
const habilidades = document.querySelectorAll(".habilidade");

// Observa quando os cards aparecem
const habilidadeObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                // Torna o card visível
                entry.target.classList.add("visivel");
            }
        });
    },
    {
        threshold: 0.2
    }
);


// Começa a observar cada habilidade
habilidades.forEach((habilidade) => {
    habilidadeObserver.observe(habilidade);
});


/* =========================
   MENU ATIVO
   ========================= */

// Pega todos os links do menu
const navLinks = document.querySelectorAll(".nav-link");

// Observa as seções para descobrir qual está ativa
const menuObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // Verifica se a seção está aparecendo
            if (entry.isIntersecting) {

                // Pega o ID da seção
                const id = entry.target.getAttribute("id");

                // Remove "ativo" de todos os links
                navLinks.forEach((link) => {
                    link.classList.remove("ativo");
                });

                // Procura o link correspondente
                const linkAtivo = document.querySelector(
                    `.nav-link[href="#${id}"]`
                );

                // Ativa o link encontrado
                if (linkAtivo) {
                    linkAtivo.classList.add("ativo");
                }
            }
        });
    },
    {
        threshold: 0.4
    }
);


// Começa a observar as seções
sections.forEach((section) => {
    menuObserver.observe(section);
});
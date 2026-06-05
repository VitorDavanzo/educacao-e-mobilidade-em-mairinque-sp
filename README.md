# Mapeamento Escolar e Mobilidade em Mairinque - SP

Este projeto de mapeamento escolar foi desenvolvido com o objetivo de unir tecnologia e planejamento urbano, facilitando o acesso à informação e a mobilidade estudantil no município de Mairinque - SP. A plataforma centraliza dados de infraestrutura escolar para auxiliar as famílias no planejamento logístico diário.

---

## Funcionalidades

* **Consulta por Bairros:** Interface organizada por seções dinâmicas que agrupam as escolas de cada região de Mairinque.
* **Barra de Pesquisa Inteligente:** Filtro em tempo real que localiza escolas por nome, ignorando letras maiúsculas/minúsculas e acentuações.
* **Rolagem Automática:** Ao pesquisar, a tela desliza suavemente até o primeiro resultado encontrado para melhorar a experiência do usuário.
* **Informações de Acessibilidade:** Exibição das modalidades de ensino de cada instituição e a distância exata até o ponto de ônibus mais próximo.
* **Integração com o Google Maps:** Clique interativo em qualquer card de escola que redireciona o usuário diretamente para a localização oficial no Google Maps, permitindo traçar rotas instantaneamente.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web moderno, aplicando conceitos de manipulação dinâmica do DOM (Document Object Model) e design responsivo:

* **HTML5:** Estrutura semântica da página e armazenamento de metadados dinâmicos com *Data Attributes* (`data-*`).
* **CSS3:** Estilização moderna utilizando o seletor universal para reset de layout, efeitos visuais de *hover*, feedback de foco (`:focus`) e transições suaves.
* **JavaScript (ES6):** Lógica do sistema, normalização de strings (tratamento de acentos), manipulação de eventos de teclado (tecla Enter) e controle de fluxo do navegador.

---
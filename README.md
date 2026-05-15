# 🚀 Dev Portfolio - Davidson Oliveira

Este é o meu portfólio pessoal, desenvolvido para centralizar meus projetos, experiências e habilidades técnicas. O projeto foi construído do zero, evoluindo de uma estrutura monolítica para uma arquitetura modularizada, baseada em CSS puro para máximo controle do design e performance.

## 🛠️ Tecnologias Utilizadas

* **React (Vite)** - Framework base para a UI.
* **Vanilla CSS (CSS Puro)** - Estilização customizada e de alta performance, sem dependência de frameworks.
* **Framer Motion** - Animações de interface (como o fundo deslizante do Header e transições de abas).
* **Lucide React** - Conjunto de ícones minimalistas.

> [!NOTE]
> O Tailwind CSS, que fazia parte do projeto inicialmente, foi removido em favor do uso de **CSS Puro**, garantindo uma estrutura de pastas onde os estilos vivem lado a lado com seus componentes (CSS Modular por contexto).

## 👤 Sobre Mim

Olá! Sou o **Davidson Oliveira**, um Desenvolvedor Full Stack apaixonado por transformar ideias complexas em experiências digitais simples e impactantes. Com trajetória no desenvolvimento web, estou focado em criar soluções robustas utilizando o ecossistema moderno de JavaScript (React) e Python.

Minha abordagem combina o rigor técnico com o cuidado estético e de usabilidade do front-end. Atualmente, busco constantemente evoluir e explorar novas tecnologias para entregar produtos que agreguem valor real.

---

## ✨ Features em Destaque

- **Navegação Dinâmica**: Troca fluida entre páginas sem recarregamento, animada pelo Framer Motion.
- **Gradientes Sofisticados**: Títulos textuais em gradiente transparente (`background-clip`) e ícones brilhantes.
- **Efeitos Avançados de CSS**:
  - Borda animada estilo "LED giratório" ao redor da foto de perfil, feita totalmente com propriedades avançadas de CSS (`conic-gradient` e `@keyframes`).
  - Otimização de renderização acelerada por GPU (`will-change`, `backface-visibility`) para *hovers* perfeitamente suaves.
- **Design System Proprio**: Variáveis CSS organizadas globalmente (`global.css`) ditando espaçamentos, cores primárias e paletas.

---

## 📂 Arquitetura de Pastas

O projeto utiliza uma arquitetura baseada na separação de **Páginas** e **Componentes**:

- `src/components/`
  - Elementos reutilizáveis como o `Header.jsx` e seu respectivo `Header.css`.
- `src/pages/`
  - Seções principais do site (ex: `About.jsx`, `Works.jsx`, `PythonProjects.jsx`), cada uma encapsulando sua própria lógica de apresentação e arquivo de estilo dedicado.
- `src/global.css`
  - Ponto de entrada das variáveis de design globais e resets do navegador.
# CSS Style Guide

This project uses a modular approach inspired by BEM with custom properties for theming. Key points:

- **Design Tokens** are defined in `:root` within `style.css` (`--color-bg`, `--color-primary`, `--color-text`, etc.).
- **Reset & Base** section normalizes `box-sizing` and enables smooth scrolling.
- **Components** follow a simple BEM-inspired naming without nesting.
- **Accessibility** features include `:focus-visible` outlines, `prefers-reduced-motion` and `prefers-contrast` media queries.
- **Performance** optimizations use `contain` and `will-change` on animated elements, plus GPU-accelerated transforms.
- **Responsive** behaviour uses a mobile-first strategy with container queries as progressive enhancement.

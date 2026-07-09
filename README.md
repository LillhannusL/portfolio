# Lisa Lillhannus — Portfolio

A personal portfolio site built with Next.js, TypeScript and Tailwind CSS. Showcases selected frontend projects, skills, and a way to get in touch.

**🔗 Live site:** [Lisa Lillhannus Portfolio](https://portfolio-three-ochre-73.vercel.app/)

![Portfolio preview](./public/other/preview.pngpreview.png)

## Features

- **Selected work** — a horizontally scrollable/draggable project rail with real screenshots and gifs, each opening in a full-screen lightbox on click
- **Skills grid** — an interactive toolkit section with expandable proficiency notes per skill
- **About & facts** — a short bio plus quick personal facts
- **Custom cursor** — an animated dot-and-ring cursor on desktop (fine pointer only), disabled automatically on touch devices
- **Animated background** — a lightweight canvas particle effect
- **Accessibility** — visible focus states, a skip-to-content link, `aria` labelling on interactive controls, and reduced-motion support throughout
- **Responsive** — mobile-first layout with a dedicated mobile nav menu

## Tech stack

|            |                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org) (App Router)                                                         |
| Language   | TypeScript                                                                                         |
| Styling    | Tailwind CSS v4                                                                                    |
| Icons      | [Tabler Icons](https://tabler.io/icons), [React Icons](https://react-icons.github.io/react-icons/) |
| Fonts      | Newsreader, Hanken Grotesk, JetBrains Mono (via `next/font/google`)                                |
| Deployment | Vercel                                                                                             |

## Project structure

```
app/
├── components/       # UI components (Navbar, Hero, Work, ProjectCard, Lightbox, About, Skills, Contact, Footer, ...)
├── data/             # Site content — projects, skills, nav links, facts
├── globals.css       # Design tokens (colors, fonts) + base styles
├── layout.tsx         # Root layout, fonts, metadata
└── page.tsx           # Page composition
public/
└── projects/         # Project screenshots and gifs
```

## Contact

- **Email:** [lillhannus.lisa@gmail.com](mailto:lillhannus.lisa@gmail.com)
- **GitHub:** [@LillhannusL](https://github.com/LillhannusL)
- **LinkedIn:** [Lisa Lillhannus](https://www.linkedin.com/in/lisa-lillhannus-873133358)

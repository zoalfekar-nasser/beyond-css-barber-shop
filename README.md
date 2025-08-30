# The Barber Shop - A Modern Front-End Showcase

![The Barber Shop Showcase](/public/site-preview.png) <!-- Suggestion: Add a good screenshot of your finished project here and name it project-screenshot.png -->

**Live Site:** [barbershopkp.netlify.app](https://barbershopkp.netlify.app)

## Project Overview

"The Barber Shop" is a modern, fully responsive, single-page website for a fictional men's grooming salon. This project was developed as a practical application of the advanced front-end principles taught in **Kevin Powell's "Beyond CSS" course**.

The core objective was to build a visually appealing and highly functional website while implementing a professional-grade development workflow. The project's architecture is centered around a powerful **Sass-based Design Token System**, which allows for incredible flexibility, theming capabilities, and long-term maintainability.

## Core Features & Concepts Demonstrated

This project showcases a deep understanding of modern web development standards and best practices.

### 1. Advanced Sass & Design Token Architecture

The styling foundation is a robust and scalable Design Token System, implemented using the 7-1 Sass architecture. This approach avoids "magic numbers" and hardcoded values, ensuring consistency and ease of maintenance.

- **Multi-Theming Engine with CSS Custom Properties:** The site features a theme switcher with four distinct themes (System, Light, Dark, Sleek). This is achieved by leveraging Sass maps to generate a base set of CSS Custom Properties, which are then dynamically updated based on the selected theme via a `data-theme` attribute, showcasing a powerful and efficient theming engine.
- **Fluid Design with `clamp()`:** All spacing and typography are fluid, using the CSS `clamp()` function. This ensures seamless scaling from mobile to desktop screens without the need for numerous media query breakpoints.
- **Scalable Sass Structure:** The 7-1 pattern keeps the codebase organized and manageable, separating concerns into distinct files for tokens, base styles, components, layouts, and utilities.

### 2. Cutting-Edge Web Standards

This project embraces the latest browser APIs and HTML standards to create a modern user experience.

- **The Popover API:** The theme switcher uses the new declarative **Popover API** (`popovertarget` and `popover` attributes). This allows for the creation of a lightweight, accessible, and JavaScript-minimal pop-up menu for theme selection, demonstrating proficiency with emerging browser technologies.
- **Semantic HTML for SEO:** The "Hours" section is marked up with a semantically correct Description List (`<dl>`), `<time>` elements, and enhanced with **Schema.org** microdata (`itemscope`, `itemtype`, `itemprop`). This provides rich, structured data to search engines, drastically improving SEO potential.

### 3. A Foundation of Semantic & Accessible HTML

Accessibility was a primary consideration from the start, ensuring the site is usable for everyone.

- **Logical Document Structure:** Correct use of landmark elements (`<header>`, `<main>`, `<footer>`), a logical heading hierarchy, and `aria-labelledby` attributes ensure easy navigation for screen reader users.
- **Best Practices:** The site includes a "Skip to Main Content" link, descriptive `alt` text for images, and properly associated labels for form inputs.
- **SVG Icon System:** A clean SVG sprite system is used for icons, with `<use>` tags referencing symbols.

## Technical Stack

- **HTML5:** Structured with a strong focus on semantics, SEO, and accessibility.
- **Sass (SCSS):** Leveraging advanced features like maps, functions, mixins, and a modular architecture to power the Design Token System.
- **JavaScript (ESM):** For theme switching logic and DOM manipulation.
- **Vite:** As the build tool for a fast development environment and optimized production builds.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher is recommended)

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/zoalfekar-nasser/beyond-css-barber-shop.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd beyond-css-barber-shop
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Project

1.  **Start the development server:**

    ```sh
    npm run dev
    ```

    This command will start the Vite development server. You can view the project in your browser at `http://localhost:5173` (or the port Vite indicates).

2.  **Build for production:**
    ```sh
    npm run build
    ```
    This command will create a `dist` folder with the optimized, minified files ready for deployment.

```



## Acknowledgments

This project would not have been possible without the invaluable knowledge shared by **Kevin Powell** in his **["Beyond CSS"](https://beyondcss.dev/) course**. The course provided the architectural patterns and modern workflows that form the backbone of this entire application.
```

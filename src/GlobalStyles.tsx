import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --primary-color: #6c63ff;
    --secondary-color: #ff6b6b;
    --background-color: #f0f0f0;
    --text-color: #333;

    --font-body: 'Inter', sans-serif;
    --font-heading: 'Playfair Display', serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-body);
    color: var(--text-color);
    background-color: var(--background-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  h1, h2 {
    font-family: var(--font-heading);
  }

  h1 {
    color: var(--primary-color);
  }
`;

export default GlobalStyles;

<p align="center">
  <img src="https://raw.githubusercontent.com/StructuredLabs/.github/main/GlyphwaldBanner.png" alt="Logo">
</p>

<br>
<br>

# Glyphwald

Glyphwald is a **React + ShadCN** UI component library designed to streamline development with **Vite**, **TypeScript**, and **Tailwind CSS**. Built and maintained by [Structured Labs](https://structuredlabs.com/) and used for designing [Preswald](https://www.preswald.com/), it provides customizable UI components for modern web applications.

## Package

[npm package](https://www.npmjs.com/package/glyphwald)

## Installation

Install Glyphwald via npm:

```sh
npm i glyphwald
```

Or with Yarn:

```sh
yarn add glyphwald
```

## Usage

Import and use components in your project:

```tsx
import { Button } from "glyphwald";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button variant="default" size="lg">Click Me</Button>
    </div>
  );
}
```

## Tailwind CSS Setup

Glyphwald relies on **Tailwind CSS**. Ensure your project has it configured.

### If Tailwind is Missing:

1. Install Tailwind CSS:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. Update `tailwind.config.js`:
   ```js
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
       "./node_modules/@structuredlabs/glyphwald/dist/**/*.js"
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Ensure `src/index.css` includes:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Updating Glyphwald

To update Glyphwald to the latest version:

```sh
npm update glyphwald
```

# Storybook

```
npm run storybook
```


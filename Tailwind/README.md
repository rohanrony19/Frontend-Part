# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Tailwind CSS is a utility-first CSS Framework
installation-->Install tailwind in react vite(open)
               npm create vite my-project
               cd my-project
               npm install
               npm install -D tailwindcss@3 postcss autoprefixer {package.json}
               npx tailwindcss init -p
               -postcss.config.js
               -tailwind.config.js
                    |
               copy and past -> content: [
                                    "./index.html",
                                    "./src/**/*.{jsx,}",
                                ], in content
               In index.css
               copy and paste-> @tailwind base;
                                @tailwind components;
                                @tailwind utilities; 
               In App.jsx
               Add-> return 
                            <!-- (
                            <div>
                                <h1>Apple</h1>
                                <h1 className="text-3xl font-bold underline">
                                Hello world!
                                </h1>
                            </div>  
                            )     -->

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Allow side‑effect CSS imports like './index.css'
declare module '*.css';
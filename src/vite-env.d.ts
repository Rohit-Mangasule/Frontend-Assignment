/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_UNSPLASH_ACCESS_KEY: string;
    // Add more variables as needed...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

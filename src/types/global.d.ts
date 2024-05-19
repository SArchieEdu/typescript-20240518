export {};

declare global {
  const ENV: string;

  interface Window {
    MyLogger: {
      log(): void;
    };
  }
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };

  export default classes;
}

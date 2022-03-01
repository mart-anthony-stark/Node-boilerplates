declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DB_URL: string;
    DB_NAME?: string;
  }
}

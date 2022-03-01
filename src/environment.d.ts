declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DB_URI: string;
    JWT_SECRET: string;
  }
}

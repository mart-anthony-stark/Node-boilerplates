declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    DB_URI: string;
    JWT_SECRET: string;
  }
}

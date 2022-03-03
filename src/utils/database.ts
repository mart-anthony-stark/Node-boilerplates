import mysql from "mysql2";

const database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "school_management",
});

export default database;

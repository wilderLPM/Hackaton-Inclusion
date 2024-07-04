import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
export default class AbstractModels {
    constructor() {
        this.connexion = null;
        this.singleton();
    }
    singleton() {
        if (this.connexion === null) {
            this.connexion = mysql.createConnection({
                host: 'localhost',
                user: process.env.USER_NAME,
                password: process.env.USER_PASSWORD,
                database: 'echo'
            });
        }
    }
}
//# sourceMappingURL=AbstractModels.js.map
import mysql from 'mysql2';
export default class AbstractModels {
    constructor() {
        this.connexion = null;
        this.singleton();
    }
    singleton() {
        if (this.connexion === null) {
            this.connexion = mysql.createConnection({
                host: 'localhost',
                user: 'charlotte',
                password: 'IntoTheWild',
                database: 'echo'
            });
        }
    }
}
//# sourceMappingURL=AbstractModels.js.map
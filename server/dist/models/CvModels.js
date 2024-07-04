import AbstractModels from './AbstractModels.js';
export default class CvModels extends AbstractModels {
    constructor() {
        super();
    }
    findAll() {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM cv', (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
    findOne(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM cv WHERE id=?', [id], (err, result) => {
                if (err)
                    reject(err);
                resolve(result[0]);
            });
        });
    }
    readOneActions(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('SELECT * FROM cv WHERE id = ?', [id], (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
    createOne(cv) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
                    INSERT INTO cv
                        (nom, adresse, tel, mail, experience, formation, skills, profil, age, musique)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `, [
                cv.nom,
                cv.adresse,
                cv.tel,
                cv.mail,
                cv.experience,
                cv.formation,
                cv.skills,
                cv.profil,
                cv.age,
                cv.musique
            ], (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
    patchOne(cv, id) {
        let sql = 'UPDATE cv ';
        let values = Object.values(cv);
        for (const [key] of Object.entries(cv)) {
            if (key !== Object.keys(cv)[Object.keys(cv).length - 1])
                sql += ` SET ${key.toString()} = ?, `;
            else
                sql += `SET ${key.toString()} = ? `;
        }
        sql += 'WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.connexion.query(sql, [...values, id], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    putOne(cv, id) {
        return new Promise((resolve, reject) => {
            this.connexion.query(`
            UPDATE cv
            SET nom=?,
                adresse=?,
                tel=?,
                mail=?,
                experience=?,
                formation=?,
                skills=?,
                profil=?,
                age=?,
                musique=?
            WHERE id = ?
        `, [
                cv.nom,
                cv.adresse,
                cv.tel,
                cv.mail,
                cv.experience,
                cv.formation,
                cv.skills,
                cv.profil,
                cv.age,
                cv.musique,
                id
            ], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    deleteOne(id) {
        return new Promise((resolve, reject) => {
            this.connexion.query('DELETE FROM cv WHERE id=?', [id], (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }
}
//# sourceMappingURL=CvModels.js.map
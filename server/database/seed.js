import users from './data/users.json' assert {type: 'json'};
import CvModels from "../dist/models/CvModels.js";

const cvModels = new CvModels();

for (let user of users.users) {
    cvModels.createOne(user).then();
}
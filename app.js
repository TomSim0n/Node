"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.json()); // => to parse request body with http header "content-type": "application/json"
app.get('/api/liveness', (req, res) => {
    res.send('OK !!!');
});
let idGenerator = 1;
function newId() {
    return idGenerator++;
}
let learningPackages = [
    { id: newId(), title: 'Learn TypeScript', description: "learn all parts of TypeScript", category: "code", targetAudience: "Beginner", difficulty: 10 },
    { id: newId(), title: 'Learn Angular', description: "learn all parts of Angular", category: "code", targetAudience: "Beginner", difficulty: 10 },
    { id: newId(), title: 'Learn NodeJs', description: "learn all parts of NodeJs", category: "code", targetAudience: "Beginner", difficulty: 10 },
    { id: newId(), title: 'Learn Express', description: "learn all parts of Express", category: "code", targetAudience: "Beginner", difficulty: 10 },
];
app.get('/api/learning-package', (req, res) => {
    res.send(learningPackages);
});
app.get('/api/learning-package/:id', (req, res) => {
    const ID = parseInt(req.params.id);
    const foundPackage = learningPackages.find((pkg) => pkg.id === ID);
    if (foundPackage) {
        res.status(200).json(foundPackage);
    }
    else {
        res.status(404).send(`Entity not found for id: ${ID}`);
    }
});
app.post('/api/learning-package', (req, res) => {
    let item = req.body;
    console.log('handle http POST /api/learning-package', item);
    item.id = newId();
    learningPackages.push(item);
    res.send(item);
});
app.put('/api/package/', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, category, targetAudience, difficulty } = req.body;
    const foundPackage = learningPackages.find((pkg) => pkg.id === id);
    if (!foundPackage) {
        res.status(404).send(`Entity not found for id: ${id}`);
        return;
    }
    if (!title || !description) {
        res.status(400).send('Mandatory fields (title and description) are required.');
        return;
    }
    foundPackage.title = title;
    foundPackage.description = description;
    foundPackage.category = category;
    foundPackage.targetAudience = targetAudience;
    foundPackage.difficulty = difficulty;
    res.status(200).json(foundPackage);
});
console.log('starting...');
app.listen(3000, () => {
    console.log('Ok, started!');
});
//# sourceMappingURL=app.js.map
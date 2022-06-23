const app = require("./app.js");
const port = 3000;

const server = app.listen(port, () => {
    console.log(`[server] Express listening on port: ${port}`);
    console.log(`[baseURL] http://localhost:${port}`);
    console.log(`[docs] http://localhost:${port}/docs`);
});
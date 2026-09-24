/** ------------------------- server.ts
 * 
 * 
 * 
 */

import app, { prompt } from './app';

const PORT = 3000

console.log(`${prompt} Server File executing...`);

async function start_server() {
    app.listen(PORT, () => {
        console.log(`${prompt} Server runing on http://localhost:${PORT}`);
    })
}

start_server();
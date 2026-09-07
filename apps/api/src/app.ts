/** ------------------------- app.ts
 * 
 * 
 * 
 */

import express, { Application } from 'express';

const app: Application = express();
const prompt: String = "theweekends@api: ";

// Middleware configuration
app.use(express.json());

app.use((req, res, next) => {
    const startedAt = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - startedAt;
        console.log(`${prompt}${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
    });

    next();
});

// Test GET
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: `${prompt}Congratulations! You have reached THEWEEKENDS API server...`
    });
});

// Export
export {prompt};
export default app;
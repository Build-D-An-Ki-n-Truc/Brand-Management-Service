const {app} = require('./src/app');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});

process.on('SIGNINT', () => {
    server.close(() => console.log('Exit Server Express'))
})
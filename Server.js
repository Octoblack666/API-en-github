const app = require('./app/app');

app.listen(app.get('port'), () => {
    console.log(`
╔══════════════════════════════╗
║      Servidor en línea       ║
║      Puerto: ${app.get('port')}            ║
╚══════════════════════════════╝


        `);
});
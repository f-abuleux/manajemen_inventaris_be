import App from './app';
import 'module-alias/register';
import './module-alias';


process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const main = () => {

    const app = new App();
    app.start();

};

main();

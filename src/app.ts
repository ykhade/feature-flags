import { Server } from 'hyper-express';
import { connectToDatabase, AppDataSource } from './configs/db.config';

const server = new Server();

AppDataSource.initialize().then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Failed to connect to database:', error);
});

server.get('/', (request, response) => {
    return response.send('Hello, World!');
});

server.listen(3000).then(() => {
    console.log('Server listening on port 3000');
}).catch((error) => {
    console.log('Failed to bind server:', error);
});
import { Server } from 'hyper-express';

const server = new Server();

server.get('/', (request, response) => {
    return response.send('Hello, World!');
});

server.listen(3000).then(() => {
    console.log('Server listening on port 3000');
}).catch((error) => {
    console.log('Failed to bind server:', error);
});
const config = {
    database: {
        host: 'localhost',
        port: 5432,
        user: 'your_db_user',
        password: 'your_db_password',
        database: 'your_db_name',
    },
    server: {
        port: 3000,
        host: 'localhost'
    },
    jwt: {
        secret: 'your_jwt_secret',
        expiresIn: '1d'
    },
    cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false
    }
};

module.exports = config;
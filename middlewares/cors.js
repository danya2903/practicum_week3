const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
];

function cors(req, res, next) {
    const { origin } = req.headers;

    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    }
    next();
}

module.exports = {
    cors
}

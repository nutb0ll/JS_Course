const messages = [
    'Hello',
    'How are you',
    'Nice to meet you.'
]


function dataHandler(req, res) {
    if (req.path.startsWith('/data/')) {
        const target = req.path.substr(6);

        if(target == 'messages') {
            res.writeHead(200, {
                'content-type': 'application/json'
            })

            res.write(JSON.stringify(messages));
            res.end();
        }
    } else {
        return true;
    }
}

module.exports = dataHandler;
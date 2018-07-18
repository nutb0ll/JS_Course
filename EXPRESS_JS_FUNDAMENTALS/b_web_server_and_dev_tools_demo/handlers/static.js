const fs = require('fs');
const mimeTypes = {
    'css': 'text/css',
    'js': 'application/javascript',
    'png': 'image/png',
    'jpg': 'image/jpg'
}

function staticHandler(req, res) {
    if (req.path.startsWith('/static/')) {
        const extension = req.path.split('.').pop();
        res.writeHead(200, {
            'content-type': mimeTypes[extension]
        })

        const read = fs.createReadStream('.' + req.path);
        read.pipe(res);

        //or

        // fs.readFile('.' + req.path, 'utf8', (err, data) => {
        //     res.write(data);
        //     res.end();
        // })
    }

    else {
        return true;
    }
}

module.exports = staticHandler;
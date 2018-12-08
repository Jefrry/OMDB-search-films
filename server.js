const http = require('http');
const render = require('./lib/render');
const { public, home, search, notFound } = require('./routes');

const port = 3000;
const host = '127.0.0.1';

http.ServerResponse.prototype.render = render;

http.createServer((req, res) => {    
    if (req.url.match(/.(html|css|js|png)$/)) {
        public(req, res);
    }else if(req.url === '/'){
        home(req, res);
    }else if(req.url.startsWith('/search')){
        search(req, res);
    }else{
        notFound(req, res);
    }
}).listen(port, host, () => console.log(`IT WORKS ON http://${host}:${port}`));
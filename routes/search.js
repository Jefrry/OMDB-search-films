const url = require('url');
const omdb = require('../lib/omdb');

function search(req, res) {
    const parsedUrl = url.parse(req.url, true); // obj
    const title = parsedUrl.query.title;

    omdb.get(title, (error, movie) => {
        if (error) {
            return res.render('error.html', {error: error.message});
        }

        res.render('movie.html', movie);
    });
}

module.exports = search;
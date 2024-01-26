module.exports = function (app) {

    app.post('/contact', function (req, res) {
        res.send({status: "success"})
    });

    // All other GET requests not handled before will return our React app
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
}
const express = require('express')
const request = require('superagent');
const app = express()
const port = 3000

function txtadvice() {

    request
        .get('http://api.adviceslip.com/advice')
        .end((err, res) => {
            if (!err && res.status === 200) {
                try {
                    JSON.parse(res.text)
                } catch (e) {
                    return console.log("An API error occurred")
                }
                const advice = JSON.parse(res.text)
                console.log(advice.slip.advice)
                app.set('view engine', 'ejs'); //Main endpoint, so http://localhost:3000
                app.get('/', function (req, res) {
                    res.render('index', {
                        users: [{
                            name: `${advice.slip.advice}`
                        }, ]
                    });
                });
            } else {
                console.error(`API call failed: ${err}, status code: ${res.status}`)
            }
        });
}

txtadvice()


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});
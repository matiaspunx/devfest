var Twit = require('twit')

var T = new Twit({
    consumer_key:         'n9nX6dsW7GvOlITJOotMrdz7u',
    consumer_secret:      'WrZa0SpxQG6Dryt5KNlVG1EVWtCyCy312KJWQitr8LxHeXrxIi',
    access_token:         '27370833-OJfySo4CnyQTRbJHyZyw2Qv8ImqqaM1QkJt60wdoX',
    access_token_secret:  '6ihPXZitqnbtSmSRop5gI87STvMhDSQcFBw4iYMmQvnqu',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});


T.get('search/tweets', { q: '#gdgfun since:2016-01-01', count: 10 }, function(err, data, response) {
    var fs = require('fs');
    fs.writeFile("data/tweets.json", JSON.stringify(data.statuses), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});

var Twitter = require('twitter');

var client = new Twitter({
consumer_key: 'aNbQc4L8tQIgN2QwaWfhrqobL',
consumer_secret: 'ZCF8LoUjbqThncUkAbz2GceLgwRXZEYCnaxWWeyCt9gk9vUjWW',
access_token_key: '563743086-TNKUiZWqyd38DneMFs6XbRq5CjBkX8f9AyUTBS5x',
access_token_secret: 'dBcrRcKvtmGgd6CxO7oYnNPrHzeoagn0Qlt17nuFuPkx2'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

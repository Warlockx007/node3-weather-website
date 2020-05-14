const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/9c8ea7f270cc591a98a1388b3bbbff78/' + latitude + ',' + longitude + '?units=si'
    request({url,json : true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }
        else if(body.error){
            callback('Unable to find location!',undefined)
        }
        else{
            const data = body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out, with ' + body.currently.precipProbability + '% chance of rain'
            callback(undefined,data)
        }
    })
}

module.exports = forecast
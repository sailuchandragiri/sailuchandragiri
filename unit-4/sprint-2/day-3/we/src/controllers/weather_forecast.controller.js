const express = require("express");

const router = express.Router();

const WeatherForecast = require("../models/weather_forecast.model");

const redis = require("../configs/redis");

router.get("", (req, res) => {
    redis.get("weather_forecasts", async function(err, forecasts){
        console.log("forecasts", forecasts);
        
        if(err) console.log(err);

        if(forecasts) return res.status(200).send({forecasts: JSON.parse(forecasts)});

        const weather_forecasts = await WeatherForecast.find().lean().exec();

        redis.set("weather_forecasts", JSON.stringify(weather_forecasts));

        return res.status(200).send({forecast: weather_forecasts});
    })
   
})

router.post("", async function(req, res){
    const weather_forecast = await WeatherForecast.create(req.body);

    const weather_forecasts = await WeatherForecast.find().lean().exec();

    redis.set("weather_forecasts", JSON.stringify(weather_forecasts));

    return res.status(201).send(weather_forecast);
})

//weather_forecasts.616a77c9afb0ed646a522150

router.get("/:id", (req, res) => {
    redis.get(`weather_forecasts.${req.params.id}`, async(err, forecast) => {

        if(err) console.log(err);

        if(forecast) return res.status(200).send({cached_forecast: JSON.parse(forecast)});

        const weather_forecast = await WeatherForecast.findById(req.params.id).lean().exec();

        redis.set(`weather_forecasts.${req.params.id}`, JSON.stringify(weather_forecast));

        return res.status(200).send({db_forecast: weather_forecast})
    })
})

router.patch("/:id", async(req, res) => {
    const weather_forecast = await WeatherForecast.findByIdAndUpdate(req.params.id, req.body, {new:true});

    redis.set(`weather_forecasts.${req.params.id}`, JSON.stringify(weather_forecast));

    const weather_forecasts = await WeatherForecast.find().lean().exec();

    redis.set("weather_forecasts", JSON.stringify(weather_forecasts));

    return res.status(201).send(weather_forecast);
})

router.delete("/:id", async(req, res) =>{
    const weather_forecast = await WeatherForecast.findByIdAndDelete(req.params.id);

    redis.del(`weather_forecasts.${req.params.id}`);

    const weather_forecasts = await WeatherForecast.find().lean().exec();

    redis.set("weather_forecasts", JSON.stringify(weather_forecasts));

    return res.status(200).send(weather_forecast);
} )

module.exports = router;
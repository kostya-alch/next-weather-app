import moment from 'moment-timezone'
import Image from 'next/image'
import React from 'react'

const TodayWeather = ({ city, weather, timezone }) => {
    return (
        <div className="today">
            <div className="today__inner">
                <div className="today__left-content">
                    <h1>
                        {city.name} ({city.country})
                    </h1>
                    <h2>
                        <span>
                            {weather.temp.max.toFixed(0)}&deg;C
                        </span>
                        <span>
                            {weather.temp.min.toFixed(0)}&deg;C
                        </span>
                    </h2>
                    <div className="today__sun-times">
                        <div>
                            <span>Восход</span>
                            <span>{moment.unix(weather.sunrise).tz(timezone).format("HH:mm")}</span>
                        </div>
                        <div>
                            <span>Закат</span>
                            <span>{moment.unix(weather.sunset).tz(timezone).format("HH:mm")}</span>
                        </div>
                    </div>
                </div>
                <div className="today__right-content">
                    <div className="today__icon-wrapper">
                        <div>
                            <Image
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                                layout='fill' />
                        </div>
                    </div>

                    <h3>
                        {weather.weather[0].description}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default TodayWeather
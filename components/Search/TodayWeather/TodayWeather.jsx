import moment from 'moment'
import Image from 'next/image'
import React from 'react'

const TodayWeather = ({ city, weather }) => {
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
                            <span>Sunrize</span>
                            <span>{moment.unix(weather.sunrise).format("LT")}</span>
                        </div>
                        <div>
                            <span>Sunset</span>
                            <span>{moment.unix(weather.sunset).format("LT")}</span>
                        </div>
                    </div>
                </div>
                <div className="today__right-content">
                    <div className="today__icon-wrapper">
                        <div>
                            <Image
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt='Weather icon'
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
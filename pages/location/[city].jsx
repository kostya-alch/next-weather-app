import moment from 'moment-timezone';
import Head from 'next/head';
import React from 'react'
import Link from 'next/link'
import HourlyWeather from '../../components/HourlyWeather/HourlyWeather';
import TodayWeather from '../../components/TodayWeather/TodayWeather';
import WeaklyWeather from '../../components/WeaklyWeather/WeaklyWeather';
import cities from '../../lib/city.list.json'
import Search from '../../components/Search/Search'


export async function getServerSideProps(context) {

    const city = getCity(context.params.city);

    if (!city) {
        return {
            notFound: true,
        };
    }
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&exclude=minutely&units=metric`
    );

    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);

    const weaklyWeather = data.daily;

    return {
        props: {
            city,
            timezone: data.timezone,
            currentWeather: data.current,
            hourlyWeather,
            weaklyWeather,
        }
    }
}


const getCity = param => {
    const cityParam = param.trim();
    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length - 1];

    if (!id) {
        return null;
    }

    const city = cities.find(city => city.id.toString() === id)

    if (city) {
        return city
    } else {
        return null;
    }
}

const getHourlyWeather = (hourlyData, timezone) => {
    const endOfDay = moment().tz(timezone).endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter(data => data.dt < eodTimeStamp);
    return todaysData;

}

const City = ({ hourlyWeather, weaklyWeather, dailyWeather, city, timezone }) => {
    return (
        <>
            <Head>
                <title>{city.name} - World Weather</title>
            </Head>

            <div className="page-wrapper">
                <div className="container">
                    <Link href='/'>
                        <a className="back-link">&larr; Домой</a>
                    </Link>
                    <Search placeholder='Введите другой город для поиска..' />
                    <TodayWeather
                        city={city}
                        weather={weaklyWeather[0]}
                        timezone={timezone} />
                    <HourlyWeather
                        hourlyWeather={hourlyWeather}
                        timezone={timezone} />
                    <WeaklyWeather
                        weaklyWeather={weaklyWeather}
                        timezone={timezone} />
                </div>
            </div>
        </>
    )
}

export default City 
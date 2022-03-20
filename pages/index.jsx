import Head from "next/head"
import FamousPlaces from "../components/FamousPlaces/FamousPlaces"
import Search from "../components/Search/Search"


const index = () => {
    return (
        <>
            <Head>
                <title>World Weather</title>
            </Head>

            <div className="home">
                <div className="container">
                    <Search placeholder='Введите город для прогноза погоды..' />
                    <FamousPlaces />
                </div>
            </div>
        </>
    )
}

export default index
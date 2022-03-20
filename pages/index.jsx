import Head from "next/head"
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
                </div>
            </div>
        </>
    )
}

export default index
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
                    <Search />
                </div>
            </div>
        </>
    )
}

export default index
import Head from "next/head"
import Layout from "../components/Layout/Layout"
import Custom404 from "../components/Custom404/Custom404"

const Custom404Page = () => {

    return (
        <>
            <Head>
                <title>404</title>
            </Head>

            <Layout locale={"fi"}>
                <Custom404 />
            </Layout>
        </>

    )
}

export default Custom404Page
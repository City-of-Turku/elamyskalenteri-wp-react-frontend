import Layout from "../components/Layout/Layout"
import IndexPage from "../pageComponents/Index"

const SamplePage = ({ elements }) => {
    return (
        <Layout>
            <IndexPage elements={elements} />
        </Layout>

    )
}

export const getStaticProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=sample-page&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements || null
    return {
        props: {
            elements: elements
        },
        revalidate: 60,
    }
}


export default SamplePage
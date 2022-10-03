import Layout from "../components/Layout/Layout";
import IndexPage from "../pageComponents/Index";
import Link from 'next/link'

const Hobbies = ({ locale, elements }) => {
    return (
        <Layout>
            <IndexPage locale={"fi"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=hobbies&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements
        }

    }

}

export default Hobbies
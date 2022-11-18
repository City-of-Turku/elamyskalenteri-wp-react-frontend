import Layout from "../components/Layout/Layout"
import Hobbies from "../pageComponents/Hobbies"

const HobbiesPage = ({ elements }) => {
    return (
        <Layout>
            <Hobbies locale={"fi"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=hobbies&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements
    console.log(elements);
    return {
        props: {
            elements: elements
        },
        revalidate: 60,
    }
}


export default HobbiesPage
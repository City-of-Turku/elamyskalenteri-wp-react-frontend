import Layout from "../../components/Layout/Layout";
import Hobbies from "../../pageComponents/Hobbies";

const HobbiesPage = ({ elements }) => {
    return (
        <Layout locale={"en"}>
            <Hobbies locale={"en"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=hobbies-en&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements
        },
        revalidate: 60,
    }

}

export default HobbiesPage
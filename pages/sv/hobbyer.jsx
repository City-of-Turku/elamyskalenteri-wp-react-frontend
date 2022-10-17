import Layout from "../../components/Layout/Layout";
import Hobbies from "../../pageComponents/Hobbies";

const HobbiesPage = ({ elements }) => {
    return (
        <Layout locale={"sv"}>
            <Hobbies locale={"sv"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=hobbies-sv&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements,
        }

    }

}

export default HobbiesPage
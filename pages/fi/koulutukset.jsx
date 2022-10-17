import Layout from "../../components/Layout/Layout";
import Educations from "../../pageComponents/Educations";

const EducationPage = ({ elements }) => {
    return (
        <Layout locale={"fi"}>
            <Educations locale={"fi"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=educations&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements
        }

    }

}

export default EducationPage
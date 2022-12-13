import Layout from "../../components/Layout/Layout";
import Educations from "../../pageComponents/Educations";
import SearchBar from "../../components/Searchbar/SearchBar";

const EducationsPage = ({ elements }) => {
    return (
        <Layout locale={"sv"}>
            <SearchBar />
            <Educations locale={"sv"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=educations-sv&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements,
        },
        revalidate: 60,
    }

}

export default EducationsPage
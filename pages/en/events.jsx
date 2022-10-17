import Layout from "../../components/Layout/Layout";
import Events from "../../pageComponents/Events";

const EventsPage = ({ elements }) => {
    return (
        <Layout locale={"en"}>
            <Events locale={"en"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=events-en&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements
        }

    }

}

export default EventsPage
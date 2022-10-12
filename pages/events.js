import Layout from "../components/Layout/Layout"
import Events from "../pageComponents/Events"

const EventsPage = ({ elements }) => {
    return (
        <Layout>
            <Events locale={"fi"} elements={elements} />
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=events&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements
    console.log(elements);
    return {
        props: {
            elements: elements
        }
    }
}


export default EventsPage
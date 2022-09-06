import IndexPage from "../../pageComponents/Index";
import Layout from "../../components/Layout/Layout";

const Home = ({ elements }) => {
  return (
    <Layout locale={"fi"} >
      <IndexPage locale={"fi"} elements={elements} />
    </Layout>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=frontpage&acf_format=standard").then(r => r.json())
  const elements = res[0]?.acf?.elements
  return {
    props: {
      elements: elements
    }
  }
}


export default Home
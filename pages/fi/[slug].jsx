import Layout from "../../components/Layout/Layout"
import Content from "../../pageComponents/Content"

const ContentPost = ({ elements }) => {
  return (
    <Layout locale={"fi"}>
      <Content locale={"fi"} elements={elements} />
    </Layout>

  )
}

export const getStaticPaths = async () => {

  // Fetch all pages
  const pagesAvailable = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?_fields=slug`)
    .then(res => res.json())

  // Create an array of pages paths
  const paths = pagesAvailable.map(page => {
    return { params: { slug: page.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + `/wp-json/wp/v2/posts?slug=${params.slug}&acf_format=standard`).then(r => r.json())
  const elements = res[0]?.acf?.elements
  return {
    props: {
      elements: elements
    }
  }
}

export default ContentPost
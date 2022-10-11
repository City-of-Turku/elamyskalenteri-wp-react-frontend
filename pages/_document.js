import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        // Set html attribute "lang" when the page is first loaded
        // based on /language/ on the URL
        let locale
        languages.map(l => {
            if (ctx.pathname.includes(l)) {
                locale = l
            }
        })
        return { ...initialProps, locale }
    }

    render() {
        return (
            <Html lang={this.props.locale}>
                <Head />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

const languages = ["fi", "en", "sv"]

export default MyDocument
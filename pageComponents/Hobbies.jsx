import DynamicComponent from "../components/DynamicComponent/dynamicComponent";
import Head from "next/head";

const Hobbies = ({ locale, elements }) => {
    return (
        <>
            <Head>
                <title>{titles[locale]}</title>
                {/* <link rel="stylesheet" href="https://use.typekit.net/qjp6osq.css" /> */}
            </Head>
            <div>
                {elements?.map((element, index) => (
                    <DynamicComponent
                        key={index}
                        component={element?.acf_fc_layout}
                        props={element}
                        locale={locale}
                    />
                ))}
            </div>
        </>
    )
}

const titles = { fi: "Harrastukset", sv: "Hobbyer", en: "Hobbies" }

export default Hobbies
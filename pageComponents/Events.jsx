import DynamicComponent from "../components/DynamicComponent/dynamicComponent";
import Head from "next/head";

const Events = ({ locale, elements }) => {
    return (
        <>
            <Head>
                <title>{titles[locale]}</title>
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

const titles = { fi: "Tapahtumat", sv: "Evenemang", en: "Events" }

export default Events
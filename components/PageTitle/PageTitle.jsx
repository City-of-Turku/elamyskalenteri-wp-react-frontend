const PageTitle = ({ props, locale }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "80px 0" }}>
            <div style={{ textAlign: "center" }}>
                <h1>{props.title_properties.title?.[locale]}</h1>
                <p style={{ padding: 12, textAlign: "left" }}>{props.title_properties.short_desc?.[locale]}</p>
            </div>
        </div>

    )

}

export default PageTitle
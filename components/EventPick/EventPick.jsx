import Link from "next/link";

const EventPick = ({ props, locale }) => {

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "80px 0" }}>
            <Link href={props.event_item.url?.[locale]}>
                <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "100%", minHeight: "320px" }}>
                    <img src={props.event_item?.image} style={{ width: "100%", display: "block", borderRadius: 2 }} alt="kuvateksti" />
                    <div style={{ position: "absolute", textAlign: "left", bottom: 1, padding: 12, color: props.event_item.text_color, letterSpacing: 0.2, background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5))", }}>
                        <h2 style={{ fontSize: "2rem", fontFamily: 'Halogen', fontWeight: 900, paddingBottom: 10 }}>{props.event_item.title?.[locale]}</h2>
                        <p style={{ fontFamily: "Forma DJR Micro", fontSize: "1.2rem", fontWeight: 300 }}>{props.event_item.short_desc?.[locale]}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventPick
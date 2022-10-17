import Link from "next/link";

const EventPick = ({ props, locale }) => {

    console.log('eventpick', props)

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "80px 0" }}>
            <Link href={props.event_item.url[locale]}>
                <div style={{ position: "relative", width: "100%", maxWidth: "900px", height: "100%", minHeight: "320px" }}>
                    <img src={props.event_item.image} width={700} height={500} style={{ width: "100%", display: "block" }} />
                    <div style={{ position: "absolute", textAlign: "center", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2 style={{ fontSize: 30 }}>{props.event_item.title[locale]}</h2>
                        <p style={{ fontFamily: "Forma DJR Micro", fontSize: 20, fontWeight: 300 }}>{props.event_item.short_desc[locale]}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventPick
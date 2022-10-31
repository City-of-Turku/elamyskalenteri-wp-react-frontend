import Link from "next/link";
import styles from "./EventPick.module.css"

const EventPick = ({ props, locale }) => {

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "80px 0" }}>
            <Link href={props.event_item.url?.[locale]}>
                <div style={{ position: "relative", width: "80%" }}>
                    <img className={styles.img} src={props.event_item?.image} alt="kuvateksti" />
                    <div className={styles.textBackground} style={{ color: props.event_item.text_color }}>
                        <h2 style={{ fontSize: "2rem", fontFamily: 'Halogen', fontWeight: 900, paddingBottom: 10 }}>{props.event_item.title?.[locale]}</h2>
                        <p style={{ fontFamily: "Forma DJR Micro", fontSize: "1.2rem", fontWeight: 300 }}>{props.event_item.short_desc?.[locale]}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventPick
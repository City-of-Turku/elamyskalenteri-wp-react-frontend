import Link from "next/link";
import styles from "./EventPick.module.css"
import Typography from '@mui/material/Typography';

const EventPick = ({ props, locale }) => {

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "80px 0" }}>
            <Link href={props.event_item.url?.[locale]}>
                <div style={{ position: "relative", width: "80%" }}>
                    <img className={styles.img} src={props.event_item?.image} alt="kuvateksti" />
                    <div className={styles.textBackground} style={{ color: props.event_item.text_color }}>
                        <Typography variant="h5" style={{ fontSize: "2rem", paddingBottom: 10 }}>{props.event_item.title?.[locale]}</Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.2rem", fontWeight: 300 }}>{props.event_item.short_desc?.[locale]}</Typography>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventPick
import Link from "next/link";
import styles from "./TopPicks.module.css";
import Typography from '@mui/material/Typography';

const TopPicks = ({ props, locale }) => {

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "80px 0" }}>
      <div className={styles.topPicksGrid} >
        {props.grid_items.map((item, index) => (
          <Link key={index} href={item.url[locale]}>
            <div style={{
              color: "#ffffff",
              backgroundPosition: "center",
              borderRadius: 2,
              paddingBottom: 24,
              backgroundColor: "#F2DA5E",
              gridRow: item.size === "2x1" ? "span 2" : "span 1",
              cursor: "pointer",
              backgroundImage: item.background_image ? `url(${item.background_image})` : "",
              display: "flex",
              flexDirection: "column",
              justifyContent: item.label_position
            }}>
              <div className={styles.textBackground} style={{ color: item.text_color }}>
                {/* <h2 style={{ fontFamily: "Forma DJR Micro", fontSize: 30, fontWeight: 500, letterSpacing: 2 }}>{item?.title?.[locale]}</h2>
                <p style={{ fontFamily: "Forma DJR Micro", fontSize: 22, letterSpacing: 2 }}>{item?.desc?.[locale]}</p> */}
                <Typography variant="h5" style={{ fontSize: "1.5rem", paddingBottom: 10 }}>{item?.title?.[locale]}</Typography>
                <Typography variant="subtitle2" style={{ fontSize: "1.2rem", fontWeight: 300 }}>{item?.desc?.[locale] ? item?.desc?.[locale] : ""}</Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div >
  )
}
export default TopPicks
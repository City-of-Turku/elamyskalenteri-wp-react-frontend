import Link from "next/link";
import styles from '../../styles/Home.module.css'

const TopPicks = ({ props, locale }) => {

  console.log(props)
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
              <h2 style={{ fontFamily: "Forma DJR Micro", fontSize: 30, fontWeight: 500, letterSpacing: 2, backgroundColor: item.text_background_color, textAlign: item.label_position, color: item.text_color, padding: 10 }}>{item?.title?.[locale]}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default TopPicks
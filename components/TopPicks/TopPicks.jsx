import Link from "next/link";

const TopPicks = ({ props, locale }) => {

  console.log(props)
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "24px 0"}}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 456px)", gridTemplateRows: "repeat(2, 308px)", gap: 24 }}>
        {props.grid_items.map((item, index) => (
          <Link key={index} href={item.url[locale]}>
            <div style={{
              color: "#ffffff",
              backgroundPosition: "center",
              borderRadius: 4,
              padding: 24,
              backgroundColor: "#F2DA5E",
              gridRow: item.size === "2x1" ? "span 2" : "span 1",
              cursor: "pointer",
              backgroundImage: item.background_image ? `url(${item.background_image})` : "",
              display: "flex",
              flexDirection: "column",
              justifyContent: item.label_position
            }}>
              <h2 style={{ fontWeight: 400, backgroundColor: item.text_background_color, textAlign: "center", color: item.text_color, padding: 8, borderRadius: 4}}>{item?.title?.[locale]}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default TopPicks
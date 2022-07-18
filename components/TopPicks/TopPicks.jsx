import Link from "next/link";

const TopPicks = ({ props, locale }) => {

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "24px 0"}}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 456px)", gridTemplateRows: "repeat(2, 308px)", gap: 24 }}>
        {props.grid_items.map((item, index) => (
          <Link key={index} href={item.url[locale]}>
            <div style={{ borderRadius: 4, padding: 24, backgroundColor: "#F2DA5E", gridRow: item.size === "2x1" ? "span 2" : "span 1", cursor: "pointer"}}>
              <h2 style={{ fontWeight: 300}}>{item?.title?.[locale]}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default TopPicks
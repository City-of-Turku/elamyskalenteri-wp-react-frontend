const TopPicks = ({ props, locale }) => {
  console.log("top picks props: ", props)
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "24px 0"}}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 456px)", gridTemplateRows: "repeat(2, 308px)", gap: 24 }}>
        {props.grid_items.map((item, index) => (
          <div key={index} style={{ borderRadius: 4, backgroundColor: "#F2DA5E", gridRow: item.size === "2x1" ? "span 2" : "span 1" }}>
            <p style={{ margin: 24}}>Postaus suoraan WordPressistä</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TopPicks
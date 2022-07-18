import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{ height: 250, backgroundColor: "#F26835", padding: 24, display: "flex", justifyContent: "space-between"}}>
      <h1 style={{ color: "#ffffff"}}>VINK</h1>
      <div style={{ display: "flex", gap: 8}}>
        <Link href={"/fi"}>
          <button style={{ height: 40, width: 40, fontSize: 24, backgroundColor: "transparent", outline: "none", border: "1px solid #193773", color: "#193773", cursor: "pointer"}}>
            fi
          </button>
        </Link>
        <Link href={"/sv"}>
          <button style={{ height: 40, width: 40, fontSize: 24, backgroundColor: "transparent", outline: "none", border: "1px solid #193773", color: "#193773", cursor: "pointer"}}>
            sv
          </button>
        </Link>
        <Link href={"/en"}>
          <button style={{ height: 40, width: 40, fontSize: 24, backgroundColor: "transparent", outline: "none", border: "1px solid #193773", color: "#193773", cursor: "pointer"}}>
            en
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
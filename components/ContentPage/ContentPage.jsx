import styles from "./ContentPage.module.css"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import { textAlign } from "@mui/system";

const ContentPage = ({ props, locale }) => {
    return (
        <div style={{ margin: "80px 0" }}>
            <img className={styles.img} src={props.content_items.content_image} alt="kuvateksti" />
            <Box sx={{
                margin: "0 auto",
                width: "90%",
                maxWidth: "120ch",
                pt: 4
            }}>
                <Typography variant="h4" sx={{ pb: 3, fontSize: 35, lineHeight: "46px" }}>{props.content_items.title?.[locale]}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 400, fontSize: 18, lineHeight: "28.8px", letterSpacing: "1%", pb: 4 }}>{props.content_items.intro?.[locale]}</Typography>
                <Divider sx={{ width: "143px", height: "1px" }} />
                <Typography variant="body2" sx={{ fontWeight: 400, lineHeight: "26px", fontSize: 16, pt: 4, letterSpacing: "1.5%" }}>{props.content_items.body_text?.[locale]}</Typography>
            </Box>
        </div >
    )
}

export default ContentPage
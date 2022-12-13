import styles from "./ContentPage.module.css"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';

const ContentPage = ({ props, locale }) => {
    return (
        <div style={{ justifyContent: "center", margin: "80px 0", display: "flex" }}>
            <div>
                <img className={styles.img} src={props.content_items.content_image ? props.content_items.content_image : "https://images.unsplash.com/photo-1609923024340-9af3839df46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt="kuvateksti" />
                <Box sx={{
                    margin: 2,
                    width: "90%",
                    maxWidth: "160ch",
                    pt: 3
                }}>
                    <Typography variant="h4" sx={{ pb: 3, fontSize: 35, lineHeight: "46px" }}>{props.content_items.title?.[locale]}</Typography>
                    <Box sx={{ pl: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: 18, lineHeight: "28.8px", letterSpacing: "1%", pb: 4 }}>{props.content_items.intro?.[locale]}</Typography>
                        <Divider sx={{ width: "143px", height: "1px" }} />
                        <Typography variant="body2" sx={{ fontWeight: 400, lineHeight: "26px", fontSize: 16, pt: 4, letterSpacing: "1.5%" }}>{props.content_items.body_text?.[locale]}</Typography>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default ContentPage
import styles from "./ContentPage.module.css"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';

const ContentPage = ({ props, locale }) => {
    return (
        <div style={{ margin: "80px 0", width: "100%" }}>
            <img className={styles.img} src={props.content_items.content_image} alt="kuvateksti" />
            <Box sx={{ padding: "2rem" }}>
                <Typography variant="h4" sx={{ pb: 3, fontSize: 40 }}>{props.content_items.title?.[locale]}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 400, fontSize: 18, pb: 4, letterSpacing: 1 }}>{props.content_items.intro?.[locale]}</Typography>
                <Divider />
                <Typography variant="body2" sx={{ fontWeight: "light", fontSize: 17, pt: 4, letterSpacing: 1 }}>{props.content_items.body_text?.[locale]}</Typography>
            </Box>
        </div>
    )
}

export default ContentPage


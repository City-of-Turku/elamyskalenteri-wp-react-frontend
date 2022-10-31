import Typography from '@mui/material/Typography';

const PageTitle = ({ props, locale }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "80px 0" }}>
            <div style={{ position: "relative", width: "80%" }}>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="h3" gutterBottom style={{ color: props.title_properties.title_color }}>{props.title_properties.title?.[locale]}</Typography>
                    <Typography variant="body2" style={{ fontSize: 16, letterSpacing: 1 }}>{props.title_properties.short_desc?.[locale]}</Typography>
                </div>
            </div>
        </div>
    )
}

export default PageTitle
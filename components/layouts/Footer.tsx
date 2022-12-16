import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import Copyright from "../utils/Copyright"

export default function Footer(){
    return <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Cocktail selector
    </Typography>
    <Copyright />
  </Box>
}
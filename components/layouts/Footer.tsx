import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Copyright from "../utils/Copyright";
import { BottomNavigation } from "@mui/material";

export default function Footer() {
  return (
    <BottomNavigation sx={{marginTop:'15px'}}>
      <Box
        sx={{
          bgcolor: "background.paper"
        }}
        component="footer"
      >
        <Copyright />
      </Box>
    </BottomNavigation>
  );
}

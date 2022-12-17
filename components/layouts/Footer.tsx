//mui
import { Box } from "@mui/material";
import { BottomNavigation } from "@mui/material";

//components
import Copyright from "../utils/Copyright";


export default function Footer() {
  return (
    <BottomNavigation sx={{ marginTop: "15px" }}>
      <Box
        sx={{
          bgcolor: "background.paper",
        }}
        component="footer"
      >
        <Copyright />
      </Box>
    </BottomNavigation>
  );
}

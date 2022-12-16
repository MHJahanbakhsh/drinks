import { Typography } from "@mui/material"
import Link from '@mui/material/Link';


export default function Copyright(){
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <span color="inherit">
          MohammadHossein jahanbakhsh
        </span>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



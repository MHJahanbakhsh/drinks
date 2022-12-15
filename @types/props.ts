import { IconButtonProps } from '@mui/material/IconButton';

export type ImageProp = {
    src:string
}

export interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

export type CollopseContentProp = {
    content:string
}
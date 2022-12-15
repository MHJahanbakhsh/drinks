import { useState } from 'react';

//mui
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material/styles/createTypography';
import Collapse from '@mui/material/Collapse';

//@types
import { ExpandMoreProps } from '../../@types/props';
import { CollopseContentProp } from '../../@types/props';
  

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const CollapseContent = ({content}:CollopseContentProp)=>{

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return <>
  <div style={{position:'relative',right:'0px'}}
  ><ExpandMore
  expand={expanded}
  onClick={handleExpandClick}
  aria-expanded={expanded}
  aria-label="show more"
>
  <ExpandMoreIcon />

</ExpandMore>
</div>
<Collapse in={expanded} timeout="auto" unmountOnExit>

  {content}
</Collapse>
</>
}

export default CollapseContent
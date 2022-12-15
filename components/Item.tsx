import * as React from 'react';
//components
import RenderImage from './utils/RenderImage';
import AddButton from './utils/AddButton';

//mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

//@types
import { IDrink } from '../@types/drink';
import { ExpandMoreProps } from '../@types/props';



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

const Item = (props : IDrink)=>{

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return <div>

      <Card sx={{ minHeight: '400px'}} >
      <CardContent style={{textAlign:'center'}}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.strCategory}
      </Typography>
      <Typography variant="h6" component="div" display="inline" >
      {props.strDrink}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.strAlcoholic}
      </Typography>
      <RenderImage src={props.strDrinkThumb}/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <AddButton/>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </div>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <br />
      <Typography variant="body2">
        {props.strInstructions}
      </Typography>
      </Collapse>
    </CardContent>
    <CardActions>
    </CardActions>
      </Card>
     <br />

    </div>
}

export default Item

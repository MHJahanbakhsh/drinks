import * as React from 'react';

//mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

//@types
import { IDrink } from '../@types/drink';


const Item = (props : IDrink)=>{

    return <div>

      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.strCategory}
      </Typography>
      <Typography variant="h5" component="div">
        {props.strAlcoholic}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
    </CardActions>
      </Card>
     <br />

    </div>
}

export default Item

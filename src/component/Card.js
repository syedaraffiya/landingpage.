import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
        <paper> 
        <Card >
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         COSMETICS
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card>
        </paper>

        <paper> 
        <Card >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         DRESSES
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card></paper>


        <paper> 
        <Card > 
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          SHOES
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card>
</paper>
        


        <paper>
        <Card >
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         DECORATION ITEM
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography
        image="https://5.imimg.com/data5/OM/RT/MY-37750834/kids-toys-500x500.png"
         sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card></paper>

        <paper>
        <Card >
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         MEN COLLECTION
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card></paper>


        <paper>
        <Card >
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         WOMEN COLLECTION
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card></paper>


        <paper> 
        <Card >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        KIDS COLLECTION
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card></paper>

        <paper>
        <Card >
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          TOYS
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Card>
        </paper>
      <Paper elevation={0} />  
      
    
      <Paper />
      <Paper elevation={3} />

      <Paper elevation={3} />

      <Paper elevation={3} />

      <Paper elevation={3} />

      <Paper elevation={3} />

      <Paper elevation={3} />
    </Box>
  );
}
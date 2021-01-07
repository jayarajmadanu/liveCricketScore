import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import vsImg from "../images/vs.png";
import React, { Fragment, useState } from 'react';
import { getMatchDetails } from '../api/Api';

const MyCard =({match})=>{

    const [details,setDetails]=useState({});
    const [open, setOpen]=useState(false);

    const handleClick=(id)=>{
        getMatchDetails(id).then(data=>setDetails(data)).catch(error=>console.log(error));
        handleOpen();
        
    }

    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }

    const getMatchcart=()=>{
        return (
            <Card style={{marginTop:15}}>
                <CardContent>
                    <Grid container justify='center' alignItems='center' spacing={4}>
                        <Grid item>
                            <Typography variant='h5'>{match['team-1']}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{width:65}} src={vsImg}  alt='VS'/>
                      
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>{match['team-2']}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify='center'>
                    <Button onClick={()=>{
                        handleClick(match.unique_id);
                    }} variant="contained" color="primary">
                        Show Details
                    </Button>
                    <Button style={{marginLeft:10}} variant="contained" color="primary">
                        Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                    </Grid>
                    
                </CardActions>
            </Card>
        );
    };

    const getDailog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id='alert-dailog-title'>{"Match Details.."}</DialogTitle>
            <DialogContentText>
                <Typography>{details.stat}</Typography>
                <Typography>
                   <span style={{fontStyle:'italic',fontWeight:'bold'}}>
                        {details.matchStarted? " ":" Match Still Not Started"}
                    </span>
                </Typography>
                <Typography>
                    Score <span style={{fontStyle:'italic',fontWeight:'bold'}}>
                        {details.score}
                    </span>
                </Typography>
            </DialogContentText>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
    return(
        <Fragment>
            {getMatchcart()}
            {getDailog()}
        </Fragment>
        
    )
    };

export default MyCard;
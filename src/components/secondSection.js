import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: 50,
    marginTop: 20,
    border: "1px solid #025e89",
    backgroundColor: "#0094d8",
    color: "white",
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#025e89",
    },
  },
  img: {
    maxHeight: "90%",
  },
  h2: {
    marginBottom: 50,
    fontWeight: "800",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  body1: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  body2: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  discordButton: {
    textAlign: "center",
  },
}));

function TopSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Grid container style={{ justifyContent: 'center', alignItems: "center", backgroundImage: "url('background.png')", backgroundSize: "cover", minHeight: 600}} >
          <Grid item md={8}>
            <Typography component="div" style={{ maxWidth: 550, padding: 50 }}>
              <Typography variant="h2" className={classes.h2}>
                Meet new meta friends
              </Typography>
              <Button color="inherit" variant="outlined" className={classes.menuButton} >Join Discord</Button>
            </Typography>
          </Grid>
        </Grid> */}
      <Grid
        container
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          width: "99vw",
        }}
      >
        {" "}
        {/* backgroundImage: "url('background2.png')"*/}
        <Grid item>
          <Typography
            component="div"
            style={{ maxWidth: 700, padding: 50, textAlign: "left" }}
          >
            <Typography
              variant="h2"
              className={classes.h2}
              style={{ marginBottom: 30, color: "#025e89" }}
            >
              Why Cool Boys?
            </Typography>
            <Typography variant="body1" className={classes.body1}>
              Cool Boys is a community for exclusivity and great art. <br />
              Being a member provides you with one of our 10,000 AI generated
              and Metaverse compatible Cool Boys NFT, which allows you to have
              access to many exclusive events around the world including all the
              Cool Boys Private events held throughout the year.
              <br />
              This community is the future of the NFT world with the following
              benefits
            </Typography>
            <Typography variant="caption" className={classes.body2}>
              • Increase your NFT Value from 5x-25x within the first week and
              even more if you mint a rare one.
              <br />
              • Get access to quarterly passive income from community
              investments.
              <br />
              • 1 Week All-Expense Paid vacation to your favorite city in the
              world for the Rare NFTs. <br />
              • Invitation to our Private Yacht & Mansion parties.
              <br />
              • Exclusive access to concerts, sporting events and our physical
              and digital merch collection.
              <br />
              • Participate in charity through the community making the world a
              better place. <br />
            </Typography>
            <Typography component="div" className={classes.discordButton}>
              {/* <a style={{textDecoration: "none"}} href="https://discord.gg/nf89WZxKha" target="_blank"> */}
              <Button
                variant="outlined"
                target="_blank"
                href="https://discord.gg/nf89WZxKha"
                className={classes.menuButton}
              >
                Join Discord
              </Button>
              {/* </a> */}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid container style={{ justifyContent: 'center', alignItems: "center"}} >
          <Grid container item md={8} >
            <Grid item md={6} >
              <Typography component="div" style={{ maxWidth: "100%", padding: 50 }}>
                <Typography variant="body1" style={{fontWeight: "bolder"}}>
                  OUR SPECIAL 
                </Typography>
                <Typography variant="h2" className={classes.h2}>
                  Legendary Collection
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography component="div" style={{ maxWidth: "100%", padding: 50 }}>
                <img src="changing.gif" width="100%" />
              </Typography>
            </Grid>
           </Grid> 
        </Grid>
        <Grid container style={{ justifyContent: 'center', alignItems: "center"}} >
          
            <img src="banner.jpg" width="100%" />
           
        </Grid> */}
    </React.Fragment>
  );
}

export default TopSection;

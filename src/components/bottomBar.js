import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Instagram, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  customGrid: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: 20,
    padding: 40,
    maxHeight: 300,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url("/footer.png")`,

  },
  navBar: {
    marginTop: 10,
    backgroundColor: "#7a2048",
    color: "black",
    padding: "20px 10px",
    [theme.breakpoints.down("xs")]: {
      padding: "5px 5px",
    },
  },
  button: {
    borderRadius: 20,
    margin: 5,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      margin: 5,
    },
  },
  bottomText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  logo: {
    marginTop: -20,
    width: "100%",
    maxWidth: "220px"
  },
  icons: {
    padding: 2,
    backgroundColor: "white",
    borderRadius: 5,
    fontSize: 30,
    color: "#7a2048",
    margin: 5
  }
}));

function BottomBar() {
  const classes = useStyles();
  return (
    // <AppBar position="static" className={classes.navBar}>
      <Grid container style={{justifyContent: "center", marginBottom: 0}}>
        <Grid item xs={11} className={classes.customGrid}>
            <div style={{overflow: "hidden", minHeight: 180}}>
            <img src="/new_logo.png" className={classes.logo} />
            </div>
            <Typography component="div">
              <a
                rel="noreferrer"
                style={{ textDecoration: "none",  }}
                href="https://twitter.com/CatMobstaz"
                target="_blank"
              >
                {" "}
                <Twitter
                  color="primary"
                  className={classes.icons}
                />
              </a>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/catmobstaz/"
                target="_blank"
              >
                <Instagram
                  color="primary"
                  className={classes.icons}
                />
              </a>
            </Typography>
         </Grid>
      </Grid>
    // </AppBar>
  );
}

export default BottomBar;

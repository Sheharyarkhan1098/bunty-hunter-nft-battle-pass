import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  designation: {
    textAlign: "center",
    color: "#aaaaaa",
  },
  name: {
    textAlign: "center",
    fontWeight: "bolder",
    color: "#025e89",
  },
  title: {
    fontWeight: "Bolder",
    textAlign: "center",
    color: "#025e89",
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
    },
  },
  media: {
    height: 350,
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
}));

const faqData = [
  { name: "Cool Boy Greg", designation: "Founder", img: "/team-1.png" },
  { name: "Cool Boy David", designation: "Marketing Head", img: "/team-2.png" },
  { name: "Cool Boy Eric", designation: " Art Director", img: "/team-3.png" },
  {
    name: "Cool Boy Jacob",
    designation: "Blockchain Expert",
    img: "/team-4.png",
  },
];

function TeamCard() {
  const classes = useStyles();

  return (
    <Grid container style={{ display: "flex", justifyContent: "center" }}>
      {faqData.map((obj, key) => (
        <Grid key={key} item xs={12} md={6} lg={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={obj.img}
                title={obj.name}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.name}
                >
                  {obj.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.designation}
                >
                  {obj.designation}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function Team() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <Grid
        container
        style={{
          justifyContent: "center",
          backgroundColor: "#FFFF",
          padding: 10,
        }}
      >
        <Grid item sm={12} lg={10}>
          <Typography component="div" style={{ padding: 30, marginBottom: 30 }}>
            {" "}
            {/* borderBottom: "2px solid #025e89"*/}
            <Typography variant="h3" className={classes.title}>
              Our Hard Working Team
            </Typography>
          </Typography>
          <Typography
            component="div"
            style={{ display: "flex", justifyContent: "center", padding: 20 }}
          >
            <TeamCard />
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Team;

import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "./card";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h2: {
    fontWeight: "bolder",
    textAlign: "center",
    color: "#025e89",
    [theme.breakpoints.down("xs")]: {
      fontSize: "45px !important",
      fontWeight: "bolder !important",
    },
  },
}));
const list = [
  {
    heading: "Phase 1",
    details:
      "Our first and foremost priority is to build Cool Boys Exclusive Club into a long-lasting community for decades to come. To make that happen, our main goal is to protect your investment and increase its value as much as we can by delivering on a quality roadmap. We will constantly challenge ourselves to provide the best value and quality possible. We have already raised funds and will be starting with a marketing budget of $250,000 to make this project into a reality. ",
  },
  {
    heading: "📈INCREASE THE VALUE OF YOUR NFT INVESTMENT📈",
    details:
      "By minting Cool Boys NFTs you can increase your investment from 5x to 25x within the first few days. We believe the Floor Price will hit 1 ETH in the 1st week and 10 ETH in the 1st month. If you mint one of our rare NFTs then sky is the limit because even we can’t estimate how much those will sell for. ",
  },
  {
    heading: "💰EARN PASSIVE INCOME💰",
    details:
      "Each Cool Boys NFT holder will earn quarterly dividends from investments that we will make into the best projects and project idea of our members. We are planning to allocate a budget of $300,000+ USD for these projects. The community will vote & choose which projects to move forward with through our DAO (Decentralized Autonomous Organization).",
  },
  {
    heading: "✈️🌍TRAVEL FOR FREE🌎✈️",
    details:
      "This is the FIRST & ONLY NFT that lets you travel for FREE! Yes, you heard that right. The holders of our top Rare NFTs get a weeklong all-expense paid trip to their favorite country in the world, every year. You pick where you want to go, and we make the rest happen! ",
  },
  {
    heading: "🛬Private Events🚢 ",
    details:
      "We will hold several private events starting with our first private event in March. Could be LA, NYC, Dubai or….more details to come! Community will decide together. We will also host several Yacht and Mansion parties that we have already started organizing for the community. Additionally, you will also get exclusive access to concerts, sporting events, and private gatherings in different countries across the world.",
  },
  {
    heading: "💸Charity💸",
    details:
      "While we are lucky to have everything we do, we want to use this project to give back to the community worldwide. Our goal is to use this project to really change the world and make a meaningful and lasting impact. Therefore, we will be setting aside a budget of $200,000 USD + a part of the royalties to set up schools and hospitals in different parts of Africa and Asia. The community will choose!",
  },
  {
    heading: "🪐Metaverse Kings🪐",
    details:
      "Cool Boys NFT holders will have access to our private events in the Metaverse. We are buying up land in both Decentraland and Sandbox to create the perfect Cool Boys City for our members. We are also in talks with several large partners to create our own Metaverse. Our members will have exclusive access and early rights to land in the new Metaverse! ",
  },
  {
    heading: " Breeding ",
    details:
      "For every 2 Cool Boys NFT you own, you will get an opportunity to get a free NFT of our 2nd Generation Collection.",
  },
  {
    heading: "🎁Merchandise 🎁",
    details:
      "Cool Boys NFT holders will get an Exclusive Credit Card 💳 with your Cool Boy NFT Avatar on it. You will also have access to merchandise for shirts, hoodies, hats (many more). You will also have access to our Digital Wear & Accessories Collection that is compatible with your Avatar in the metaverse. ",
  },
  {
    heading: "🎉Celebrity Meet & Greet 🎉",
    details:
      "Members get access to private meet & greets and personal access to several celebrities that we have on board. ",
  },
  {
    heading: "PHASE 2",
    details:
      "Coming soon! More details will be provided as the project moves along. Stay tuned!",
  },
];

function MediaCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Grid
        container
        style={{ justifyContent: "center", padding: "50px 10px" }}
      >
        <Grid item>
          <Typography variant="h2" className={classes.h2}>
            Roadmap
          </Typography>
          {list.map((obj, i) => {
            let selectStyle;
            if (i % 2 === 0) {
              selectStyle = true;
            } else {
              selectStyle = false;
            }
            return <Card key={i} selectStyle={selectStyle} data={obj} />;
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MediaCard;

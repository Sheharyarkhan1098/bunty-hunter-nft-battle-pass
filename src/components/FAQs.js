import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
    padding: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  details: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  title: {
    fontWeight: "Bolder",
    textAlign: "center",
    color: "#025e89",
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
    },
  },
}));

const faqData = [
  {
    question: "2. What is the Total Supply?",
    answer: "The total supply is 10,000 AI Generated Cool Boys NFTs.",
  },
  {
    question: "3. When will Cool Boys Launch?",
    answer:
      "The pre-sale will launch on February 25th at 9pm EST / 6pm PST and our public sale on March 2nd 2pm EST/ 12pm PST.",
  },
  {
    question: "4. Which are the most Rare NFTs & their benefits?",
    answer:
      "We have a 1,000 Rare and 10 extremely rare. The 10 extremely rare get a 1 week free trip to their favorite city in the world once a year!!!",
  },
  {
    question: "5. Where can I get the most updated news on the Cool Boys Club?",
    answer: "Join our discord channel",
  },
  {
    question: "6. Where can I view my NFT after minting?",
    answer: "After mining, you can view your NFTs in your OpenSea account. ",
  },
];

function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Accordion  style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${10}-panel1a-content`}
          
          >
            <Typography className={classes.heading}>1. How to Mint a Cool Boy NFT?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" className={classes.details}>
            1. Download the metamask.io extension on your browser (we recommend using chrome). <br />
            2. Purchase Ethereum from various exchanges, such as Coinbase or Binance. <br />
            3. Send Ethereum from this exchange to your MetaMask wallet. <br />
            4. On launch day, open the Cool Boys Official website and select the number of NFTs you wish to mint. <br />
            5. Click “MINT NOW” button, Metamask will popup asking for connection. <br />
            6. Confirm the transaction and any associated fees (gas fees). <br />
            7. Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea.   <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
      {faqData.map((obj, key) => (
        <Accordion key={key} style={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${key}-panel1a-content`}
            id={key}
          >
            <Typography className={classes.heading}>{obj.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" className={classes.details}>
              {obj.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

function FAQs() {
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
        <Grid item>
          <Typography
            component="div"
            style={{
              maxWidth: 1000,
              padding: 30,
              marginBottom: 30,
              borderBottom: "2px solid #025e89",
            }}
          >
            <Typography variant="h3" className={classes.title}>
              Frequently asked questions
            </Typography>
          </Typography>
          <Typography component="div" style={{ maxWidth: 1000, padding: 30 }}>
            <SimpleAccordion />
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default FAQs;

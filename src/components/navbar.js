import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import { Instagram, Twitter } from "@material-ui/icons";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Web3 from "web3";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";

import logoRambo from "../logo_rambo.png";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: 50,
    // color: "#1e2761",
    color: "snow",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  title: {
    flexGrow: 1,
    // fontWeight: "bolder",
    // color: "#1e2761",
    color: "snow",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  navBar: {
    // backgroundColor: "#7a2048",
    backgroundColor: "black",
    // backgroundImage: "linear-gradient(180deg, #090c32, #000000d9)",
    // backgroundImage: `url("/footer.png")`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    color: "black",
    padding: "10px 30px",
    [theme.breakpoints.down("xs")]: {
      padding: "3px 0",
    },
  },
  button: {
    margin: 5,
    border: "1px solid snow",
    padding: "15px 10px",
    color: "snow",
    borderRadius: 25,
    background: "none",
    "&:hover": {
      background: "linear-gradient(yellow, red)",
      color: "#090c32",
    },
  },
  icons: {
    fontSize: 30,
    margin: 10,
    marginBottom: 0,
    // color: "#1e2761",
    color: "snow",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
  },
  menuItem: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [walletConnected, setWalletConnected] = React.useState(false);
  const classes = useStyles();

  const { active, activate } = useWeb3React();

  useEffect(() => {
    setWalletConnected(active);
  }, [active]);
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }

  let chainId = process.env.REACT_APP_CHAIN_ID;

  async function connect() {
    try {
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
Try Different browser or Install Metamask.`);
        return;
      }
      let id = await web3.eth.net.getId();
      if (id !== parseInt(chainId)) {
        alert("Please change your network to BSC Mainnet");
        return false;
      }
      await activate(injected);
      setWalletConnected(true);
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" className={classes.navBar}>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <Toolbar style={{ display: "flex", justifyContent: "center"}}>
          <Typography component="div" style={{ margin: "0 10px"}}>
            <a href="https://cryptorambo.io/">
              <img src={logoRambo} width="150px" />
            </a>
          </Typography>
          {/* <Typography variant="h4" className={classes.title}>
            Platinum Elite NFT
          </Typography> */}
          {/* <Hidden only={["xs", "sm"]}> */}
            {/* <Typography component="div">
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://twitter.com/CatMobstaz"
                target="_blank"
              >
                {" "}
                <Twitter
                  style={{ color: "#1e2761" }}
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
                  style={{ color: "#1e2761" }}
                  color="primary"
                  className={classes.icons}
                />
              </a>
            </Typography> */}
            {/* <Button
              href="https://cryptorambo.io/"
              color="inherit"
              target="_blank"
              variant="contained"
              className={classes.button}
            >
              Home
            </Button>
            <Button
              href="https://t.me/CryptoRamboGroup"
              color="inherit"
              target="_blank"
              variant="contained"
              className={classes.button}
            >
              Telegram
            </Button> */}
            {/* <Button
              color="inherit"
              variant="contained"
              className={classes.button}
              onClick={connect}
            >
              {" "}
              {walletConnected ? "Connected" : "Connect Wallet"}
            </Button> */}
          {/* </Hidden> */}
          {/* <Hidden only={["md", "lg", "xl"]}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon className={classes.menuButton} />
            </IconButton>
          </Hidden> */}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
          >
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              {/* <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://discord.gg/nf89WZxKha"
                target="_blank"
              > */}
              <Button
                href="https://cryptorambo.io/"
                color="inherit"
                target="_blank"
                variant="contained"
                className={classes.button}
              >
                Home
              </Button>
              {/* </a> */}
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Button
                color="inherit"
                variant="outlined"
                href="https://t.me/CryptoRamboGroup"
                target="_blank"
                className={classes.button}
              >
                Telegram
              </Button>
            </MenuItem>
            {/* {window.ethereum ? (
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <Button
                  color="inherit"
                  variant="contained"
                  className={classes.button}
                  style={{ color: "#408ec6" }}
                  onClick={connect}
                >
                  {walletConnected ? "Connected" : "Connect Wallet"}
                </Button>
              </MenuItem>
            ) : (
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <Button
                  color="inherit"
                  variant="contained"
                  className={classes.button}
                  style={{ color: "#408ec6" }}
                  href={
                    "https://metamask.app.link/dapp/catmobstaz.com/"
                  }
                >
                  Connect Wallet
                </Button>
              </MenuItem>
            )} */}
            {/* <MenuItem onClick={handleClose} className={classes.menuItem}>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://twitter.com/CatMobstaz"
                target="_blank"
              >
                <Twitter color="primary" className={classes.icons} />
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/catmobstaz/"
                target="_blank"
              >
                <Instagram color="primary" className={classes.icons} />
              </a>
            </MenuItem> */}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Web3 from "web3";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import contractAbi from "../abi/testnetGenesisAbi.json";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { isMobile } from "react-device-detect";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    margin: "5px",
    color: "#408ec6",
    backgroundColor: "#1e2761", //"#F2DFD8"
    "&:disabled": {
      color: "#408ea6",
      backgroundColor: "#040b38",
    },
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#408ec6",
    },
  },

  tokenIds: {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    margin: "5px",
    color: "#408ec6",
    backgroundColor: "#1e2761", //"#F2DFD8"
    "&:disabled": {
      color: "white",
      backgroundColor: "grey",
    },
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#408ec6",
    },
  },

  buttonContainer: {
    marginBottom: 50,
  },
  title: {
    flexGrow: 1,
  },
  img: {
    // maxHeight: 700,
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  h3: {
    marginBottom: 10,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  h4: {
    marginBottom: 5,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  mint: {
    marginBottom: 5,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  body2: {
    marginBottom: 10,
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  subtitle1: {
    fontWeight: "bold",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 11,
    },
  },
  inputCount: {
    width: 100,
    backgroundColor: "white",
    borderRadius: 8,
    [theme.breakpoints.down("xs")]: {
      width: 50,
    },
  },
  decrementBtn: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#0094d8",
    color: "white",
    border: "1px solid #408ec6",
    padding: 6,
    "&:disabled": {
      color: "white",
      backgroundColor: "grey",
    },
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#408ec6",
    },
  },
  incrementBtn: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#0094d8",
    color: "white",
    border: "1px solid #408ec6",
    padding: 6,
    "&:disabled": {
      color: "white",
      backgroundColor: "grey",
    },
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#408ec6",
    },
  },
}));

function TopSection() {
  const classes = useStyles();
  const [unstakedTokenIds, setUnstakedTokenIds] = useState([]);
  const [idsForStaking, setIdsForStaking] = useState([]);
  const [stakedTokenIds, setStakedTokenIds] = useState([]);
  const [idsForUnstaking, setIdsForUnstaking] = useState([]);
  const [stakeIdsLoading, setStakeIdsLoading] = useState(false);
  const [unstakeIdsLoading, setUnstakeIdsLoading] = useState(false);
  const [getStakedPressed, setGetStakedPressed] = useState(false);
  const [getUnstakedPressed, setGetUnstakedPressed] = useState(false);
  const [count, setCount] = useState(1);
  const price = 0.1; // 0.07 -- for public sale 0.10

  const { active, account, activate } = useWeb3React();

  const comingSoon = () => {
    alert("Staking Coming Soon!!");
  };

  const setTokenIdForStaking = (id) => {
    let ids = [...idsForStaking];
    let isPresent = checkIdsForStaking(id);
    if (isPresent) {
      ids = ids.filter((obj) => obj != id);
    } else {
      ids.push(id);
    }
    setIdsForStaking(ids);
    console.log(ids);
  };

  const setTokenIdForUnstaking = (id) => {
    let ids = [...idsForUnstaking];
    let isPresent = checkIdsForUnstaking(id);
    if (isPresent) {
      ids = ids.filter((obj) => obj != id);
    } else {
      ids.push(id);
    }
    setIdsForUnstaking(ids);
    console.log(ids);
  };

  const checkIdsForStaking = (id) => {
    let isPresent = false;
    idsForStaking.map((obj) => {
      if (obj === id) {
        isPresent = true;
        return;
      }
    });
    return isPresent;
  };

  const checkIdsForUnstaking = (id) => {
    let isPresent = false;
    idsForUnstaking.map((obj) => {
      if (obj === id) {
        isPresent = true;
        return;
      }
    });
    return isPresent;
  };

  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const chainId = process.env.REACT_APP_CHAIN_ID;
  const ContractAddress = process.env.REACT_APP_GENESIS_CONTRACT_ADDRESS;
  const Contract = new web3.eth.Contract(contractAbi, ContractAddress);
  console.log(Contract);
  async function getStakedIdsFromContract() {
    try {
      setStakeIdsLoading(true);
      setGetUnstakedPressed(true);
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
Try Different browser or Install Metamask.`);
        return;
      }
      await activate(injected);

      let id = await web3.eth.net.getId();

      if (id !== parseInt(chainId)) {
        alert("Please change your network to BSC Mainnet");
        return false;
      }

      const accounts = await web3.eth.getAccounts();
      let result = await Contract.methods
        .getStakedTokenOfUser(accounts[0])
        .call();
      // await Contract.methods.getStakedTokenOfUser(count).send({
      //   from: accounts[0],
      //   value: web3.utils.toWei(`${count * price}`, "ether"),
      // });
      setStakedTokenIds(result);
      setStakeIdsLoading(false);
      setIdsForUnstaking([]);
      setIdsForStaking([]);
      // console.log(result)
      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }

  async function getUnstakedIdsFromContract() {
    try {
      setUnstakeIdsLoading(true);
      setGetStakedPressed(true);
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
Try Different browser or Install Metamask.`);
        return;
      }
      await activate(injected);

      let id = await web3.eth.net.getId();

      if (id !== parseInt(chainId)) {
        alert("Please change your network to BSC Mainnet");
        return false;
      }

      const accounts = await web3.eth.getAccounts();
      let result = await Contract.methods
        .getUnStakedTokenOfUser(accounts[0])
        .call();
      // await Contract.methods.getStakedTokenOfUser(count).send({
      //   from: accounts[0],
      //   value: web3.utils.toWei(`${count * price}`, "ether"),
      // });
      setUnstakedTokenIds(result);
      setUnstakeIdsLoading(false);
      setIdsForUnstaking([]);
      setIdsForStaking([]);
      // console.log(result)
      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }

  async function stakeTokens() {
    try {
      setUnstakeIdsLoading(true);
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
Try Different browser or Install Metamask.`);
        return;
      }
      await activate(injected);

      let id = await web3.eth.net.getId();

      if (id !== parseInt(chainId)) {
        alert("Please change your network to BSC Mainnet");
        return false;
      }

      const accounts = await web3.eth.getAccounts();
      console.log(idsForStaking, "testing");
      await Contract.methods.stakeMultipleNft(idsForStaking).send({
        from: accounts[0],
        // value: web3.utils.toWei(),
      });
      setUnstakeIdsLoading(false);
      setStakedTokenIds([]);
      setUnstakedTokenIds([]);
      setIdsForUnstaking([]);
      setIdsForStaking([]);
      setGetUnstakedPressed(false);
      setGetStakedPressed(false);
      // console.log(result)
      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }

  async function unstakeTokens() {
    try {
      setStakeIdsLoading(true);
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
Try Different browser or Install Metamask.`);
        return;
      }
      await activate(injected);

      let id = await web3.eth.net.getId();

      if (id !== parseInt(chainId)) {
        alert("Please change your network to BSC Mainnet");
        return false;
      }

      const accounts = await web3.eth.getAccounts();
      await Contract.methods
        .ClaimYourStakedMultipleToken(idsForUnstaking)
        .send({
          from: accounts[0],
          // value: web3.utils.toWei(),
        });
      setStakeIdsLoading(false);
      setStakedTokenIds([]);
      setUnstakedTokenIds([]);
      setIdsForUnstaking([]);
      setIdsForStaking([]);
      setGetUnstakedPressed(false);
      setGetStakedPressed(false);
      // console.log(result)
      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }

  async function connect() {
    try {
      let id = await web3.eth.net.getId();

      if (id !== parseInt(chainId)) {
        alert("Please change your network to BSC Mainnet");
        return false;
      }
      setTimeout(async () => {
        await activate(injected);
      }, 1000);
    } catch (ex) {
      console.log(ex);
    }
  }

  const showMessageUN = () => {
    let abc = false;
    if (stakedTokenIds.length > 1) {
      // stakedTokenIds.map( obj => {
      //   if(obj === "999999999")
      //    abc = true;

      abc = stakedTokenIds.every((element) => element === "999999999");
    }
    // })}

    if (abc) return <h4 style={{ margin: "0 10px" }}>No token found</h4>;
  };

  const showMessage = () => {
    let abc = false;
    if (unstakedTokenIds.length > 1) {
      // unstakedTokenIds.map( obj => {
      //   if(obj === "999999999")
      //    abc = true;
      abc = unstakedTokenIds.every((element) => element === "999999999");
    }
    // })}

    if (abc) return <h4 style={{ margin: "0 10px" }}>No token found</h4>;
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Grid
        container
        style={{
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#7a2048",
          padding: "150px 0 50px",
        }}
      >
        <Grid
          item
          lg={5}
          style={{
            justifyContent: "center",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <img className={classes.img} src="/collage.png" alt={"main"} />
        </Grid>
        <Grid
          item
          lg={5}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography component="div" style={{ maxWidth: 700, padding: 20 }}>
            <Typography variant="h4" className={classes.h4}>
              Stake your Cats Here!!
            </Typography>

            <Typography component="div" className={classes.buttonContainer}>
              <Button
                color="inherit"
                variant="contained"
                className={classes.menuButton}
                // onClick={() => setUnstakedTokenIds(["1", "2", "3"])}
                onClick={getUnstakedIdsFromContract}
              >
                Get Unstaked TokenIds
              </Button>

              <Button
                color="inherit"
                variant="contained"
                className={classes.menuButton}
                onClick={stakeTokens}
                disabled={idsForStaking.length === 0}
              >
                Stake Now
              </Button>
              <Typography>
                {unstakeIdsLoading ? (
                  <CircularProgress />
                ) : (
                  <>
                    {unstakedTokenIds.map((id, i) => {
                      if (id !== "999999999") {
                        return (
                          <Button
                            color="inherit"
                            style={{
                              backgroundColor: checkIdsForStaking(id)
                                ? "#040b38"
                                : "#1e2790",
                            }}
                            variant="contained" //
                            className={classes.tokenIds}
                            key={i}
                            onClick={() => setTokenIdForStaking(id)}
                          >
                            {id}
                          </Button>
                        );
                      }
                    })}
                    {getStakedPressed && unstakedTokenIds.length < 1 && (
                      <h4 style={{ margin: "0 10px" }}>No token found</h4>
                    )}
                    {showMessage()}
                  </>
                )}
              </Typography>
            </Typography>
            <Typography variant="h4" className={classes.h4}>
              Unstake your Cats Here!!
            </Typography>
            <Typography component="div" className={classes.buttonContainer}>
              <Button
                color="inherit"
                variant="contained"
                className={classes.menuButton}
                // onClick={() => setStakedTokenIds(["1", "2", "3"])}
                onClick={getStakedIdsFromContract}
              >
                Get Staked TokenIds
              </Button>

              <Button
                color="inherit"
                variant="contained"
                className={classes.menuButton}
                onClick={unstakeTokens}
                disabled={idsForUnstaking.length === 0}
              >
                Unstake Now
              </Button>
              <Typography>
                {stakeIdsLoading ? (
                  <CircularProgress />
                ) : (
                  <>
                    {stakedTokenIds.map((id, i) => {
                      if (id !== "999999999") {
                        return (
                          <Button
                            color="inherit"
                            style={{
                              backgroundColor: checkIdsForUnstaking(id)
                                ? "#040b38"
                                : "#1e2790",
                            }}
                            variant="contained" //
                            className={classes.tokenIds}
                            key={i}
                            onClick={() => setTokenIdForUnstaking(id)}
                          >
                            {id}
                          </Button>
                        );
                      }
                    })}
                    {getUnstakedPressed && stakedTokenIds.length < 1 && (
                      <h4 style={{ margin: "0 10px" }}>No token found</h4>
                    )}
                    {showMessageUN()}
                  </>
                )}
              </Typography>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TopSection;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";

const styles = {
  boxBorder1: {
    display: "flex",
    justifyContent: "center",
    border: 4,
    padding: 3,
    paddingRight: 1,
    borderColor: "#025e89",
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 10,
    borderRight: "20px solid rgba(250,250,250,1)",
    borderTop: "none",
    maxWidth: 620,
  },
  boxBorder2: {
    display: "flex",
    justifyContent: "center",
    border: 4,
    padding: 3,
    paddingLeft: 1,
    borderColor: "#025e89",
    borderRadius: 5,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 0,
    borderLeft: "20px solid rgba(250,250,250,1)",
    borderTop: "none",
    maxWidth: 620,
  },
};

export default function ActionAreaCard({ selectStyle, data }) {
  return (
    <Box sx={selectStyle ? styles.boxBorder1 : styles.boxBorder2}>
      <Card style={{ width: "100%", background: "#86e3f8" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              {data.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

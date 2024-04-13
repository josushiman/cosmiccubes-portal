import { Typography, Select, MenuItem, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import { CustomCard } from "../../commons/CustomCard";
import { useNotify } from "react-admin";

const ServerKnowledgeTrigger = () => {
  const [endpoint, setEndpoint] = useState("");
  const notify = useNotify();

  const handleChange = (event) => {
    setEndpoint(event.target.value);
  };

  const handleClick = () => {
    notify("Submitted", { type: "info" });
    setEndpoint("");
  };

  return (
    <CustomCard
      sx={{
        padding: "1.5rem 2rem",
      }}
    >
      <Grid
        container
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingBottom={"1rem"}
      >
        <Typography variant="h5" fontWeight={300}>
          Trigger updates
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%", marginBottom: "1rem" }} />
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"1fr auto"}
        gridTemplateRows={"1fr"}
        columnGap={"1rem"}
        alignItems={"center"}
      >
        <Select value={endpoint} onChange={handleChange} variant="filled">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"accounts"}>Accounts</MenuItem>
          <MenuItem value={"categories"}>Categories</MenuItem>
          <MenuItem value={"months"}>Month Details</MenuItem>
          <MenuItem value={"payees"}>Payees</MenuItem>
          <MenuItem value={"transactions"}>Transactions</MenuItem>
        </Select>
        <Button
          onClick={handleClick}
          sx={{
            color: "white",
            backgroundColor: "#313131",
            opacity: endpoint != "" ? "100%" : "25%",
            pointerEvents: endpoint != "" ? "unset" : "none",
          }}
        >
          <Grid
            container
            alignItems={"center"}
            height={"2.75rem"}
            paddingLeft={"0.5rem"}
          >
            Run
            <PlayArrowIcon />
          </Grid>
        </Button>
      </Grid>
    </CustomCard>
  );
};

export default ServerKnowledgeTrigger;

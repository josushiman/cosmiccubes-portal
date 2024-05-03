import { Typography, Select, MenuItem, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import { CustomCard } from "../../commons/CustomCard";
import { useNotify } from "react-admin";
import useAsync from "../../hooks/useAsync";

const ServerKnowledgeTrigger = () => {
  const [updateType, setUpdateType] = useState("");
  const { fetchData } = useAsync();
  const notify = useNotify();

  const handleChange = (event) => {
    setUpdateType(event.target.value);
  };

  const handleClick = async () => {
    if (updateType !== undefined) {
      fetchData(updateType);
      notify("Submitted", { type: "info" });
      setUpdateType("");
    }
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
        <Select value={updateType} onChange={handleChange} variant="filled">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"/ynab/update-accounts"}>Accounts</MenuItem>
          <MenuItem value={"/ynab/update-categories"}>Categories</MenuItem>
          <MenuItem value={"/ynab/update-month-details"}>
            Month Details
          </MenuItem>
          <MenuItem value={"/ynab/update-month-summaries"}>
            Month Summary
          </MenuItem>
          <MenuItem value={"/ynab/update-payees"}>Payees</MenuItem>
          <MenuItem value={"/ynab/update-transactions"}>Transactions</MenuItem>
        </Select>
        <Button
          onClick={handleClick}
          sx={{
            color: "white",
            backgroundColor: "#313131",
            opacity: updateType != "" ? "100%" : "25%",
            pointerEvents: updateType != "" ? "unset" : "none",
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

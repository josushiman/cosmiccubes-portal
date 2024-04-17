import {
  List,
  Datagrid,
  TextField,
  NumberField,
  CreateButton,
} from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import LoanPortfolio from "./LoanPortfolio";
import DirectDebits from "./DirectDebits";

const EntityList = () => (
  <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
    <LoanPortfolio />
    <DirectDebits />
    <List sort={{ field: "period", order: "ASC" }} actions={null}>
      <CreateButton />
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="name" />
        <TextField source="period" />
        <NumberField
          source="remaining_balance"
          label="Balance"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
      </Datagrid>
    </List>
  </Grid>
);

export default EntityList;

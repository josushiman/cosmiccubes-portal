import {
  List,
  Datagrid,
  TextField,
  NumberField,
  CreateButton,
} from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import LoanPortfolio from "./LoanPortfolio";

const EntityList = () => (
  <Grid container flexDirection={"column"} rowGap={"1rem"}>
    <LoanPortfolio />
    <List sort={{ field: "end_date", order: "ASC" }} actions={null}>
      <CreateButton />
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="name" />
        <NumberField
          source="remaining_balance"
          label="Balance"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
        <TextField source="status" />
      </Datagrid>
    </List>
  </Grid>
);

export default EntityList;

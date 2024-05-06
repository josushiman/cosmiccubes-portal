import {
  List,
  Datagrid,
  DateField,
  NumberField,
  TextField,
  CreateButton,
} from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import SavingsOverTime from "./SavingsOverTime";

// Savings chart with savings over time.

const EntityList = () => (
  <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
    <SavingsOverTime />
    <List sort={{ field: "date", order: "DESC" }} actions={null}>
      <CreateButton />
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <DateField source="date" />
        <TextField source="name" />
        <NumberField
          source="amount"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
        <NumberField
          source="target"
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

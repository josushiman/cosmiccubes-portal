import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  TextInput,
} from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import Refunds from "./Refunds";

// Better refunds section
// More transaction stats and filters

const EntityList = () => {
  return (
    <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
      <Refunds />
      <List
        sort={{ field: "date", order: "DESC" }}
        filters={[
          <TextInput key={1} label="Search" source="payee_name" alwaysOn />,
        ]}
        actions={null}
      >
        <Datagrid bulkActionButtons={false} rowClick="show">
          <TextField source="payee_name" />
          <DateField source="date" />
          <NumberField
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            transform={(v) => v / 1000}
          />
        </Datagrid>
      </List>
    </Grid>
  );
};

export default EntityList;

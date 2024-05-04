import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  NumberField,
} from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import TimePeriod from "../../dashboards/commons/TimePeriod";

const EntityShow = () => {
  return (
    <Grid>
      <TimePeriod />
      <Show>
        <SimpleShowLayout
          sx={{
            backgroundColor: "#121212",
          }}
        >
          <TextField source="id" />
          <DateField source="date" />
          <TextField source="account_name" label="Account" />
          <TextField
            source="category_fk.category_group_name"
            label="Category"
          />
          <TextField source="category_name" label="Subcategory" />
          <NumberField
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            transform={(value) => value / 1000}
          />
          <TextField source="payee_name" label="Payee" />
          <TextField
            source="import_payee_name_original"
            label="Original Payee Name"
          />
          <TextField source="cleared" />
          <TextField source="approved" />
          <TextField source="memo" />
        </SimpleShowLayout>
      </Show>
    </Grid>
  );
};

export default EntityShow;

import {
  List,
  Datagrid,
  TextField,
  CreateButton,
  ReferenceField,
} from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import LoanPortfolio from "./LoanPortfolio";
import DirectDebits from "./DirectDebits";
import Insurance from "./Insurance";

const EntityList = () => (
  <Grid container flexDirection={"column"} rowGap={"0.5rem"}>
    <DirectDebits />
    <Insurance />
    <LoanPortfolio />
    <List actions={null}>
      <CreateButton />
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="name" />
        <ReferenceField
          source="period.id"
          reference="portal/admin/loans-and-renewals-periods"
          label="Period"
          sortable={false}
        >
          <TextField source="name" />
        </ReferenceField>
      </Datagrid>
    </List>
  </Grid>
);

export default EntityList;

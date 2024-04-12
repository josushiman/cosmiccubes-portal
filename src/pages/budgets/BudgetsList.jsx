import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
} from "react-admin";
import Grid from "@mui/material/Unstable_Grid2";
import CustomIdField from "../../commons/CustomIdField";
import BudgetsNeeded from "./BudgetsNeeded";

const EntityList = () => {
  return (
    <Grid container flexDirection={"column"} rowGap={"1rem"}>
      <BudgetsNeeded />
      <List>
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <CustomIdField source="id" label="UUID" sortable={false} />
          <ReferenceField
            source="category.id"
            reference="portal/admin/ynab-categories"
            label="Category"
            sortable={false}
          >
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField
            source="category.id"
            reference="portal/admin/ynab-categories"
            label="Category Group"
            sortable={false}
          >
            <TextField source="category_group_name" />
          </ReferenceField>
          <NumberField
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
          />
        </Datagrid>
      </List>
    </Grid>
  );
};

export default EntityList;

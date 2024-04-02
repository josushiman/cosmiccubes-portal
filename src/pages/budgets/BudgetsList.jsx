import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
} from "react-admin";
import CustomIdField from "../../commons/CustomIdField";

const EntityList = () => (
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
);

export default EntityList;

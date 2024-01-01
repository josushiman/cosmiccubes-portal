import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  DateField,
} from "react-admin";
import CustomIdField from "../../commons/CustomIdField";

const EntityList = () => (
  <List sort={{ field: "name", order: "ASC" }}>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <CustomIdField source="id" label="UUID" sortable={false} />
      <TextField source="name" />
      <ReferenceField
        source="account.id"
        reference="portal/accounts"
        label="Account"
        sortable={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="transactions" />
      <NumberField
        source="current_amount"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField
        source="target_amount"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField
        source="available_amount"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <DateField source="start_date" />
      <DateField source="end_date" />
    </Datagrid>
  </List>
);

export default EntityList;

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  CreateButton,
} from "react-admin";

const EntityList = () => (
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
);

export default EntityList;

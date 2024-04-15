import {
  List,
  Datagrid,
  DateField,
  NumberField,
  TextField,
  CreateButton,
} from "react-admin";

const EntityList = () => (
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
);

export default EntityList;

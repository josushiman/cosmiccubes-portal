import { List, Datagrid, DateField, NumberField, TextField } from "react-admin";

const EntityList = () => (
  <List sort={{ field: "date", order: "DESC" }}>
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

import { List, Datagrid, TextField, DateField, NumberField } from "react-admin";

const EntityList = () => (
  <List sort={{ field: "date", order: "DESC" }} actions={null}>
    <Datagrid bulkActionButtons={false}>
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
);

export default EntityList;

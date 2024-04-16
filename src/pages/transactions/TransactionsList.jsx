import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  TextInput,
} from "react-admin";

const EntityList = () => (
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
);

export default EntityList;

import { List, Datagrid, TextField, DateField, NumberField } from "react-admin";
import CustomIdField from "../../commons/CustomIdField";

const EntityList = () => (
  <List sort={{ field: "name", order: "ASC" }}>
    <Datagrid bulkActionButtons={false}>
      <CustomIdField source="id" label="UUID" sortable={false} />
      <TextField source="name" />
      <TextField source="merchant" />
      <DateField source="date_time" showTime={true} />
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

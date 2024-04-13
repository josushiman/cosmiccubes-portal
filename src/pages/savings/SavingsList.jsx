import {
  List,
  Datagrid,
  DateField,
  NumberField,
  CreateButton,
} from "react-admin";
import CustomIdField from "../../commons/CustomIdField";

const EntityList = () => (
  <List sort={{ field: "date", order: "ASC" }} actions={<CreateButton />}>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <CustomIdField source="id" label="UUID" sortable={false} />
      <DateField source="date" />
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

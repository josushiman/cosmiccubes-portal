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
        reference="accounts"
        label="Account"
        sortable={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <NumberField
        source="interest_rate"
        options={{
          style: "percent",
        }}
      />
      <NumberField source="paid_instalments" />
      <NumberField source="total_instalments" />
      <NumberField
        source="amount"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField
        source="total"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <TextField source="period" />
      <NumberField source="paid_date" />
      <DateField source="start_date" />
      <DateField source="end_date" />
    </Datagrid>
  </List>
);

export default EntityList;

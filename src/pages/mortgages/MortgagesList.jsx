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
      <ReferenceField
        source="company.id"
        reference="portal/companies"
        label="Company"
        sortable={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="interest_rate" />
      <NumberField
        source="amount"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField
        source="annual_cost"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField source="paid_date" />
      <DateField source="end_date" />
      <TextField source="period" />
    </Datagrid>
  </List>
);

export default EntityList;

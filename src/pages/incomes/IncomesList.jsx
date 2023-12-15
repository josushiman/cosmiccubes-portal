import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
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
      <ReferenceField
        source="company.id"
        reference="companies"
        label="Company"
        sortable={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <NumberField
        source="amount"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField
        source="pre_tax"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField
        source="post_tax"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField source="paid_date" />
      <TextField source="period" />
      <TextField source="notes" />
    </Datagrid>
  </List>
);

export default EntityList;

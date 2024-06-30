import {
  List,
  Datagrid,
  TextField,
  CreateButton,
  ReferenceField,
} from "react-admin";

const EntityList = () => (
  <List actions={null}>
    <CreateButton />
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField source="name" />
      <ReferenceField
        source="period.id"
        reference="portal/admin/loans-and-renewals-periods"
        label="Period"
        sortable={false}
      >
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default EntityList;

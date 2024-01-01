import { List, Datagrid, TextField, ReferenceField } from "react-admin";
import CustomIdField from "../../commons/CustomIdField";

const EntityList = () => (
  <List sort={{ field: "name", order: "ASC" }}>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <CustomIdField source="id" label="UUID" sortable={false} />
      <TextField source="name" />
      <ReferenceField
        source="type.id"
        reference="portal/account-types"
        label="Type"
        sortable={false}
      >
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default EntityList;

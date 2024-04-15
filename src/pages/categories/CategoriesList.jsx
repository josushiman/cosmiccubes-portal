import { List, Datagrid, TextField } from "react-admin";

const EntityList = () => (
  <List sort={{ field: "category_group_name", order: "ASC" }} actions={null}>
    <Datagrid bulkActionButtons={false} rowClick="edit">
      <TextField source="category_group_name" label="Category Group" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default EntityList;

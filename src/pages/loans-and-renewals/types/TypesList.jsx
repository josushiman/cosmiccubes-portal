import { List, Datagrid, TextField, CreateButton } from "react-admin";

const EntityList = () => {
  return (
    <List actions={<CreateButton />}>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};

export default EntityList;

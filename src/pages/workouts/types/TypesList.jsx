import { List, Datagrid, TextField } from "react-admin";
import CustomCreateButton from "../../commons/CustomCreateButton";
import DefaultPageGrid from "../../../commons/DefaultPageGrid";

const EntityList = () => {
  return (
    <DefaultPageGrid>
      <CustomCreateButton resource={"portal/admin/budgets"} />
      <List actions={null} hasCreate={false}>
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <TextField source="name" />
        </Datagrid>
      </List>
    </DefaultPageGrid>
  );
};

export default EntityList;

import { List, Datagrid, NumberField, DateField } from "react-admin";
import CustomCreateButton from "../commons/CustomCreateButton";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

const EntityList = () => {
  return (
    <DefaultPageGrid>
      <CustomCreateButton resource={"portal/admin/heart-rates"} />
      <List
        actions={null}
        hasCreate={false}
        sort={{ field: "start_date", order: "DESC" }}
      >
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <NumberField source="value" />
          <DateField showTime source="start_date" />
        </Datagrid>
      </List>
    </DefaultPageGrid>
  );
};

export default EntityList;

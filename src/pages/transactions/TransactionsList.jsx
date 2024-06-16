import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  TextInput,
} from "react-admin";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

// More transaction stats and filters

const EntityList = () => {
  return (
    <DefaultPageGrid>
      <List
        sort={{ field: "date", order: "DESC" }}
        filters={[
          <TextInput key={1} label="Search" source="payee_name" alwaysOn />,
        ]}
        actions={null}
      >
        <Datagrid bulkActionButtons={false} rowClick="show">
          <TextField source="payee_name" />
          <DateField source="date" />
          <NumberField
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            transform={(v) => v / 1000}
          />
        </Datagrid>
      </List>
    </DefaultPageGrid>
  );
};

export default EntityList;

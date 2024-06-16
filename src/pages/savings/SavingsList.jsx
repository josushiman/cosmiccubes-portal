import {
  List,
  Datagrid,
  DateField,
  NumberField,
  TextField,
  CreateButton,
} from "react-admin";
import SavingsOverTime from "./SavingsOverTime";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

// Savings chart with savings over time.

const EntityList = () => (
  <DefaultPageGrid>
    <SavingsOverTime />
    <List sort={{ field: "date", order: "DESC" }} actions={null}>
      <CreateButton />
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <DateField source="date" />
        <TextField source="name" />
        <NumberField
          source="amount"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
        <NumberField
          source="target"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
      </Datagrid>
    </List>
  </DefaultPageGrid>
);

export default EntityList;

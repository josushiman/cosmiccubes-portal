import {
  List,
  Datagrid,
  TextField,
  CreateButton,
  ReferenceField,
} from "react-admin";
import LoanPortfolio from "./LoanPortfolio";
import DirectDebits from "./DirectDebits";
import Insurance from "./Insurance";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

const EntityList = () => (
  <DefaultPageGrid>
    <DirectDebits />
    <Insurance />
    <LoanPortfolio />
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
  </DefaultPageGrid>
);

export default EntityList;

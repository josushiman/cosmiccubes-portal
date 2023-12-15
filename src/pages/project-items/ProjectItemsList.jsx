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
        source="project_name.id"
        reference="projects"
        label="Project"
        sortable={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        source="category.id"
        reference="project-item-categories"
        label="Item Category"
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
      <NumberField source="quantity" />
      <NumberField
        source="amount"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <NumberField
        source="total"
        options={{
          style: "currency",
          currency: "GBP",
        }}
      />
      <TextField source="link" />
    </Datagrid>
  </List>
);

export default EntityList;

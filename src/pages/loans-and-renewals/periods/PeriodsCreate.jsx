import { Create, SimpleForm, TextInput } from "react-admin";

const EntityCreate = () => {
  return (
    <Create title="Create Entity" redirect="list">
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

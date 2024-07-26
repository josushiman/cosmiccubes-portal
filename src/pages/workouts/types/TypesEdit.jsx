import { Edit, SimpleForm, TextInput, required } from "react-admin";

const EntityEdit = () => {
  return (
    <Edit title="Edit Entity" redirect="list">
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

import { Edit, SimpleForm, required, TextInput } from "react-admin";

const EntityEdit = () => {
  return (
    <Edit title="Edit Entity">
      <SimpleForm>
        <TextInput source="id" fullWidth resettable disabled />
        <TextInput source="name" fullWidth resettable validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

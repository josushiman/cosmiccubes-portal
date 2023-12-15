import { Create, TextInput, SimpleForm, required } from "react-admin";

const EntityCreate = () => {
  return (
    <Create title="Create Entity">
      <SimpleForm>
        <TextInput source="name" fullWidth resettable validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

import {
  Create,
  SimpleForm,
  DateInput,
  required,
  NumberInput,
  TextInput,
} from "react-admin";

const EntityCreate = () => {
  return (
    <Create title="Create Entity" redirect="list">
      <SimpleForm>
        <DateInput source="date" validate={[required()]} />
        <TextInput source="name" validate={[required()]} />
        <NumberInput
          source="target"
          options={{
            style: "currency",
            currency: "GBP",
          }}
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

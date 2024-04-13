import {
  Create,
  SimpleForm,
  DateInput,
  required,
  NumberInput,
} from "react-admin";

const EntityCreate = () => {
  return (
    <Create title="Create Entity">
      <SimpleForm>
        <DateInput source="date" validate={[required()]} />
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

import {
  Create,
  SimpleForm,
  DateInput,
  required,
  NumberInput,
} from "react-admin";

const editEntity = (data) => {
  const dateTime = new Date(data.date);
  dateTime.setDate(1);

  return {
    date: dateTime,
    amount: 0.0,
    target: data.target,
  };
};

const EntityCreate = () => {
  const transform = (data) => editEntity(data);

  return (
    <Create title="Create Entity" transform={transform}>
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

import {
  Edit,
  SimpleForm,
  required,
  NumberInput,
  DateInput,
  TextInput,
} from "react-admin";

export const editEntity = (data) => {
  const dateTime = new Date(data.date);

  return {
    id: data.id,
    date: dateTime,
    amount: data.amount,
    target: data.target,
  };
};

const EntityEdit = () => {
  const transform = (data) => editEntity(data);

  return (
    <Edit title="Edit Entity" transform={transform}>
      <SimpleForm>
        <TextInput
          source="id"
          disabled
          sx={{
            minWidth: "350px",
          }}
        />
        <DateInput source="date" validate={[required()]} />
        <NumberInput
          source="amount"
          options={{
            style: "currency",
            currency: "GBP",
          }}
          validate={[required()]}
        />
        <NumberInput
          source="target"
          options={{
            style: "currency",
            currency: "GBP",
          }}
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

import {
  Edit,
  SimpleForm,
  required,
  NumberInput,
  DateInput,
  TextInput,
} from "react-admin";
import * as dayjs from "dayjs";

export const EntityEdit = () => {
  const editEntity = (data) => {
    const dateTime = dayjs(data.date).format("YYYY-MM-DD");

    // 2024-04-02T00:00:00.000Z
    return {
      id: data.id,
      date: dateTime,
      name: data.name,
      amount: data.amount,
      target: data.target,
    };
  };

  return (
    <Edit title="Edit Entity" transform={editEntity}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <DateInput source="date" validate={[required()]} />
        <TextInput source="name" />
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

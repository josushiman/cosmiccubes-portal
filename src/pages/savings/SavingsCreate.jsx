import {
  Create,
  SimpleForm,
  DateInput,
  required,
  NumberInput,
  TextInput,
} from "react-admin";
import * as dayjs from "dayjs";

export const createEntity = (data) => {
  const dateTime = dayjs(data.date).format("YYYY-MM-DD");

  return {
    date: dateTime,
    name: data.name,
    amount: 0.0,
    target: data.target,
  };
};

const EntityCreate = () => {
  const transform = (data) => createEntity(data);

  return (
    <Create title="Create Entity" transform={transform} redirect="list">
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

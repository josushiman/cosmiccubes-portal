import {
  Create,
  SimpleForm,
  DateInput,
  required,
  NumberInput,
  TextInput,
} from "react-admin";
import * as dayjs from "dayjs";

const EntityCreate = () => {
  const createEntity = (data) => {
    const dateTime = dayjs(data.date).format("YYYY-MM-DD");

    return {
      date: dateTime,
      name: data.name,
      amount: 0.0,
      target: data.target,
    };
  };

  return (
    <Create title="Create Entity" transform={createEntity} redirect="list">
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

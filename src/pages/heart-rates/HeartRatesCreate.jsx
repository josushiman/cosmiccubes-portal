import {
  Create,
  SimpleForm,
  required,
  NumberInput,
  DateTimeInput,
} from "react-admin";
import CreateAnotherButton from "../commons/CreateAnotherButton";

const EntityCreate = () => {
  return (
    <Create title="Create Entity" redirect="list">
      <SimpleForm toolbar={<CreateAnotherButton />}>
        <NumberInput source="value" validate={[required()]} fullWidth={true} />
        <DateTimeInput source="start_date" />
        <DateTimeInput source="end_date" />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

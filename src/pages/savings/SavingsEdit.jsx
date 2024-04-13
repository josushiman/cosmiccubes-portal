import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";

export const editEntity = (data) => {
  return {
    name: data.name,
    project_name_id: data.project_name.id,
    category_id: data.category.id,
    company_id: data.company.id,
    quantity: data.quantity,
    amount: data.amount,
    link: data.link,
  };
};

const EntityEdit = () => {
  const transform = (data) => editEntity(data);

  return (
    <Edit title="Edit Entity" transform={transform}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
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

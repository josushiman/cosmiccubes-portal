import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  useRecordContext,
  NumberInput,
} from "react-admin";

const ReadOnlyFields = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <>
      <TextInput
        source="category.id"
        validate={[required()]}
        defaultValue={record.category?.id}
        label="Category UUID"
        disabled
      />
      <TextInput
        source="category.name"
        validate={[required()]}
        defaultValue={record.category?.name}
        label="Category Name"
        disabled
      />
      <TextInput
        source="category.category_group_name"
        validate={[required()]}
        defaultValue={record.category?.category_group_name}
        label="Category Group Name"
        disabled
      />
    </>
  );
};

export const editEntity = (data) => {
  return {
    amount: data.amount,
    category: data.category.id,
  };
};

const EntityEdit = () => {
  const transform = (data) => editEntity(data);

  return (
    <Edit title="Edit Entity" transform={transform}>
      <SimpleForm>
        <TextInput
          source="id"
          sx={{
            minWidth: "350px",
          }}
          disabled
          fullWidth={true}
        />
        <NumberInput
          source="amount"
          options={{
            style: "currency",
            currency: "GBP",
          }}
          fullWidth={true}
        />
        <ReadOnlyFields />
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

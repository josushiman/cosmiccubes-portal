import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  useRecordContext,
} from "react-admin";
import { Stack } from "@mui/material";

const ReadOnlyFields = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextInput
        source="category.id"
        validate={[required()]}
        defaultValue={record.category?.id}
        label="Company Category UUID"
        disabled
        sx={{
          minWidth: "350px",
        }}
      />
      <TextInput
        source="category.name"
        validate={[required()]}
        defaultValue={record.category?.name}
        label="Company Category Name"
        disabled
        sx={{
          minWidth: "350px",
        }}
      />
    </Stack>
  );
};

export const editEntity = (data) => {
  return {
    name: data.name,
    category_id: data.category.id,
  };
};

const EntityEdit = () => {
  const transform = (data) => editEntity(data);

  return (
    <Edit title="Edit Entity" transform={transform}>
      <SimpleForm>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextInput
            source="id"
            disabled
            sx={{
              minWidth: "350px",
            }}
          />
          <TextInput source="name" validate={[required()]} />
        </Stack>
        <ReadOnlyFields />
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

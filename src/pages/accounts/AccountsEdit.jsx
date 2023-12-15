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
        source="type.id"
        validate={[required()]}
        defaultValue={record.type?.id}
        label="Account Type UUID"
        disabled
        sx={{
          minWidth: "350px",
        }}
      />
      <TextInput
        source="type.name"
        validate={[required()]}
        defaultValue={record.type?.name}
        label="Account Type Name"
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
    type_id: data.type.id,
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

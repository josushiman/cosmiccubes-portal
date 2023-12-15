import { Edit, SimpleForm, required, TextInput } from "react-admin";
import { Stack } from "@mui/material";

const EntityEdit = () => {
  return (
    <Edit title="Edit Entity">
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
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

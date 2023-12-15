import {
  Create,
  TextInput,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  required,
} from "react-admin";
import { Stack } from "@mui/material";

const EntityCreate = () => {
  return (
    <Create title="Create Entity">
      <SimpleForm>
        <TextInput source="name" fullWidth validate={[required()]} />
        <Stack direction="row" spacing={2} alignItems="center">
          <ReferenceInput
            source="type_id"
            reference="account-types"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              optionText={(entity) => `${entity.name}`}
              label="Account Type"
              filterToQuery={(searchText) => ({ name: searchText })}
              validate={[required()]}
              sx={{
                minWidth: "250px",
              }}
            />
          </ReferenceInput>
        </Stack>
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

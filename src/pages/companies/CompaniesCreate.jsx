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
            source="category_id"
            reference="portal/company-categories"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              optionText={(entity) => `${entity.name}`}
              label="Company Category"
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

import {
  Create,
  TextInput,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  required,
  NumberInput,
} from "react-admin";
import { Stack } from "@mui/material";

const EntityCreate = () => {
  return (
    <Create title="Create Entity">
      <SimpleForm>
        <TextInput source="name" fullWidth validate={[required()]} />
        <Stack direction="row" spacing={2} alignItems="center">
          <ReferenceInput
            source="project_name_id"
            reference="projects"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              optionText={(entity) => `${entity.name}`}
              label="Project Name"
              filterToQuery={(searchText) => ({ name: searchText })}
              validate={[required()]}
              sx={{
                minWidth: "250px",
              }}
            />
          </ReferenceInput>
          <ReferenceInput
            source="category_id"
            reference="project-item-categories"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              optionText={(entity) => `${entity.name}`}
              label="Item Category"
              filterToQuery={(searchText) => ({ name: searchText })}
              validate={[required()]}
              sx={{
                minWidth: "250px",
              }}
            />
          </ReferenceInput>
          <ReferenceInput
            source="company_id"
            reference="companies"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              optionText={(entity) => `${entity.name}`}
              label="Company Name"
              filterToQuery={(searchText) => ({ name: searchText })}
              validate={[required()]}
              sx={{
                minWidth: "250px",
              }}
            />
          </ReferenceInput>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <NumberInput source="quantity" min={1} />
          <NumberInput
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            validate={[required()]}
          />
        </Stack>
        <TextInput source="link" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

import {
  Create,
  TextInput,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  required,
  NumberInput,
  SelectInput,
} from "react-admin";
import { Stack } from "@mui/material";

const EntityCreate = () => {
  return (
    <Create title="Create Entity">
      <SimpleForm>
        <TextInput source="name" fullWidth validate={[required()]} />
        <Stack direction="row" spacing={2} alignItems="center">
          <ReferenceInput
            source="account_id"
            reference="accounts"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              optionText={(entity) => `${entity.name} ${entity.type.name}`}
              label="Account Name"
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
              optionText={(entity) =>
                `${entity.name} - ${entity.category.name}`
              }
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
          <NumberInput
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            validate={[required()]}
          />
          <NumberInput
            source="paid_date"
            validate={[required()]}
            min={1}
            max={31}
            defaultValue={1}
          />
          <SelectInput
            source="period"
            choices={[
              { id: "weekly", name: "Weekly" },
              { id: "monthly", name: "Monthly" },
              { id: "yearly", name: "Yearly" },
            ]}
          />
        </Stack>
        <TextInput source="notes" fullWidth validate={[required()]} multiline />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

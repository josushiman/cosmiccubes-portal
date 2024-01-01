import {
  Create,
  TextInput,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  required,
  NumberInput,
  DateInput,
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
            reference="portal/accounts"
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
            reference="portal/companies"
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
          <NumberInput
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            validate={[required()]}
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
        <Stack direction="row" spacing={2} alignItems="center">
          <NumberInput
            source="paid_date"
            validate={[required()]}
            min={1}
            max={31}
            defaultValue={1}
          />
          <DateInput source="start_date" />
          <DateInput source="end_date" />
        </Stack>
        <TextInput source="notes" fullWidth multiline />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

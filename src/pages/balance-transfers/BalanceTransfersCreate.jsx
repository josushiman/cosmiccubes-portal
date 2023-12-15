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
          <NumberInput
            source="interest_rate"
            options={{
              style: "percent",
            }}
          />
          <NumberInput source="total_instalments" validate={[required()]} />
          <NumberInput source="paid_instalments" />
        </Stack>
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
          <SelectInput
            source="period"
            choices={[
              { id: "weekly", name: "Weekly" },
              { id: "monthly", name: "Monthly" },
              { id: "yearly", name: "Yearly" },
            ]}
          />
          <NumberInput
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            validate={[required()]}
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
          <DateInput source="start_date" validate={[required()]} />
          <DateInput source="end_date" />
        </Stack>
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

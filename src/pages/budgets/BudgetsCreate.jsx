import {
  Create,
  TextInput,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  required,
  NumberInput,
  DateInput,
} from "react-admin";
import { Stack } from "@mui/material";

const EntityCreate = () => {
  return (
    <Create title="Create Entity">
      <SimpleForm>
        <TextInput source="name" fullWidth validate={[required()]} />
        <Stack direction="row" spacing={2} alignItems="center">
          <NumberInput source="transactions" min={0} defaultValue={0} />
          <NumberInput
            source="current_amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            min={0}
            defaultValue={0}
          />
          <NumberInput
            source="target_amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            validate={[required()]}
          />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <DateInput source="start_date" />
          <DateInput source="end_date" />
        </Stack>
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
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

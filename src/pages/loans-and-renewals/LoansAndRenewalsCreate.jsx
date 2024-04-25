import {
  Create,
  TextInput,
  SimpleForm,
  required,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  DateInput,
} from "react-admin";

const EntityCreate = () => {
  return (
    <Create title="Create Entity" redirect="list">
      <SimpleForm>
        <TextInput source="name" fullWidth validate={[required()]} />
        <TextInput source="provider" fullWidth />
        <DateInput source="start_date" validate={[required()]} />
        <DateInput source="end_date" />
        <NumberInput source="payment_date" />
        <NumberInput
          source="payment_amount"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
        <NumberInput
          source="starting_balance"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
        <ReferenceInput
          source="period_id"
          reference="portal/admin/loans-and-renewals-periods"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteInput
            optionText={(entity) => entity.name}
            label="Period"
            filterToQuery={(searchText) => ({ name: searchText })}
          />
        </ReferenceInput>
        <ReferenceInput
          source="type_id"
          reference="portal/admin/loans-and-renewals-types"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteInput
            optionText={(entity) => entity.name}
            label="Type"
            filterToQuery={(searchText) => ({ name: searchText })}
          />
        </ReferenceInput>
        <ReferenceInput
          source="account_id"
          reference="portal/admin/ynab-accounts"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteInput
            optionText={(entity) => entity.name}
            label="Account"
            filterToQuery={(searchText) => ({ name: searchText })}
          />
        </ReferenceInput>
        <ReferenceInput
          source="category_id"
          reference="portal/admin/ynab-categories"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteInput
            optionText={(entity) =>
              `${entity.name} - ${entity.category_group_name}`
            }
            label="Category"
            filterToQuery={(searchText) => ({ name: searchText })}
          />
        </ReferenceInput>
        <TextInput source="notes" fullWidth resettable />
      </SimpleForm>
    </Create>
  );
};

export default EntityCreate;

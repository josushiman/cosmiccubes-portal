import {
  Create,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  required,
  NumberInput,
} from "react-admin";

const EntityCreate = () => {
  return (
    <Create title="Create Entity" redirect="list">
      <SimpleForm>
        <NumberInput
          source="amount"
          options={{
            style: "currency",
            currency: "GBP",
          }}
          validate={[required()]}
          fullWidth={true}
        />
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
            validate={[required()]}
            fullWidth={true}
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

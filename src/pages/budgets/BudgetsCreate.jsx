import {
  Create,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  required,
  NumberInput,
} from "react-admin";
import CreateAnotherButton from "../commons/CreateAnotherButton";

const EntityCreate = () => {
  return (
    <Create title="Create Entity" redirect="list">
      <SimpleForm toolbar={<CreateAnotherButton />}>
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
          filter={{ filter_expense_cats: true }}
        >
          <AutocompleteInput
            optionText={(entity) =>
              `${entity.name} - ${entity.category_group_name}`
            }
            label="Category"
            filterToQuery={(searchText) => ({
              name: searchText,
            })}
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

// category_group_name__not_in
// "Monthly Bills",
// "Yearly Bills",
// "Loans",
// "Credit Card Payments",
// "Internal Master Category",
// "Non-Monthly Expenses",
// "Saving Goals",
// "Holidays",

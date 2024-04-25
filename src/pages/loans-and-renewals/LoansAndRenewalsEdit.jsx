import {
  Edit,
  TextInput,
  SimpleForm,
  required,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  DateInput,
} from "react-admin";
import dayjs from "dayjs";

const EntityEdit = () => {
  const editEntity = (data) => {
    const startDateTime = dayjs(data.start_date).format("YYYY-MM-DD");

    let endDateTime;
    if (data.end_date) {
      endDateTime = dayjs(data.end_date).format("YYYY-MM-DD");
    } else {
      endDateTime = null;
    }

    // 2024-04-02T00:00:00.000Z
    return {
      name: data.name,
      provider: data.provider,
      payment_date: data.payment_date,
      payment_amount: data.payment_amount,
      starting_balance: data.starting_balance,
      account_id: data.account.id,
      category_id: data.category.id,
      start_date: startDateTime,
      end_date: endDateTime,
      notes: data.notes,
    };
  };

  return (
    <Edit title="Edit Entity" transform={editEntity}>
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
          source="period.id"
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
          source="type.id"
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
          source="account.id"
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
          source="category.id"
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
    </Edit>
  );
};

export default EntityEdit;

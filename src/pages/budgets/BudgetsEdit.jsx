import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  useRecordContext,
  NumberInput,
  DateInput,
} from "react-admin";
import { Stack } from "@mui/material";

const ReadOnlyFields = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextInput
        source="account.id"
        validate={[required()]}
        defaultValue={record.account?.id}
        label="Account Name UUID"
        disabled
        sx={{
          minWidth: "350px",
        }}
      />
      <TextInput
        source="account.name"
        validate={[required()]}
        defaultValue={record.account?.name}
        label="Account Name"
        disabled
        sx={{
          minWidth: "350px",
        }}
      />
    </Stack>
  );
};

export const editEntity = (data) => {
  return {
    name: data.name,
    transactions: data.transactions,
    current_amount: data.current_amount,
    target_amount: data.target_amount,
    start_date: data.start_date,
    end_date: data.end_date,
    account_id: data.account.id,
  };
};

const EntityEdit = () => {
  const transform = (data) => editEntity(data);

  return (
    <Edit title="Edit Entity" transform={transform}>
      <SimpleForm>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextInput
            source="id"
            sx={{
              minWidth: "350px",
            }}
            disabled
          />
          <TextInput source="name" validate={[required()]} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <NumberInput source="transactions" />
          <NumberInput
            source="current_amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
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
        <ReadOnlyFields />
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

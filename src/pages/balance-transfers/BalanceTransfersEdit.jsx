import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  useRecordContext,
  NumberInput,
  DateInput,
  SelectInput,
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
    interest_rate: data.interest_rate,
    total_instalments: data.total_instalments,
    paid_instalments: data.paid_instalments,
    account_id: data.account.id,
    period: data.period,
    amount: data.amount,
    paid_date: data.paid_date,
    start_date: data.start_date,
    end_date: data.end_date,
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
            disabled
            sx={{
              minWidth: "350px",
            }}
          />
          <TextInput source="name" validate={[required()]} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <NumberInput
            source="interest_rate"
            options={{
              style: "percent",
            }}
            validate={[required()]}
          />
          <NumberInput source="total_instalments" validate={[required()]} />
          <NumberInput source="paid_instalments" />
        </Stack>
        <ReadOnlyFields />
        <Stack direction="row" spacing={2} alignItems="center">
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
    </Edit>
  );
};

export default EntityEdit;

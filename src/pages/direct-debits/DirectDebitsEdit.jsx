import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  useRecordContext,
  NumberInput,
  DateInput,
  SelectInput,
  CreateButton,
} from "react-admin";
import { Stack } from "@mui/material";

const ReadOnlyFields = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <>
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
      <Stack direction="row" spacing={2} alignItems="center">
        <TextInput
          source="company.id"
          validate={[required()]}
          defaultValue={record.company?.id}
          label="Company Name UUID"
          disabled
          sx={{
            minWidth: "350px",
          }}
        />
        <TextInput
          source="company.name"
          validate={[required()]}
          defaultValue={record.company?.name}
          label="Company Name"
          disabled
          sx={{
            minWidth: "350px",
          }}
        />
      </Stack>
    </>
  );
};

export const editEntity = (data) => {
  return {
    name: data.name,
    account_id: data.account.id,
    company_id: data.company.id,
    amount: data.amount,
    period: data.period,
    paid_date: data.paid_date,
    start_date: data.start_date,
    end_date: data.end_date,
    notes: data.notes,
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
        <ReadOnlyFields />
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
      <CreateButton label="Create a new entity" />
    </Edit>
  );
};

export default EntityEdit;

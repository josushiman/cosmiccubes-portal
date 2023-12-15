import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  useRecordContext,
  NumberInput,
} from "react-admin";
import { Stack } from "@mui/material";

const ReadOnlyFields = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextInput
          source="project_name.id"
          validate={[required()]}
          defaultValue={record.project_name?.id}
          label="Project Name UUID"
          disabled
          sx={{
            minWidth: "350px",
          }}
        />
        <TextInput
          source="project_name.name"
          validate={[required()]}
          defaultValue={record.project_name?.name}
          label="Project Name"
          disabled
          sx={{
            minWidth: "350px",
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextInput
          source="category.id"
          validate={[required()]}
          defaultValue={record.category?.id}
          label="Category Name UUID"
          disabled
          sx={{
            minWidth: "350px",
          }}
        />
        <TextInput
          source="category.name"
          validate={[required()]}
          defaultValue={record.category?.name}
          label="Category Name"
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
    project_name_id: data.project_name.id,
    category_id: data.category.id,
    company_id: data.company.id,
    quantity: data.quantity,
    amount: data.amount,
    link: data.link,
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
        <ReadOnlyFields />
        <Stack direction="row" spacing={2} alignItems="center">
          <NumberInput source="quantity" min={1} />
          <NumberInput
            source="amount"
            options={{
              style: "currency",
              currency: "GBP",
            }}
            validate={[required()]}
          />
        </Stack>
        <TextInput source="link" fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default EntityEdit;

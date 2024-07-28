import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  DateField,
} from "react-admin";
import DefaultPageGrid from "../../commons/DefaultPageGrid";
import InfoCardGrid from "../../commons/InfoCardGrid";
import LinkedInfoCard from "../../commons/LinkedInfoCard";
import InfoCard from "../../commons/InfoCard";

const EntityList = () => {
  return (
    <DefaultPageGrid>
      <InfoCardGrid rows={1}>
        <InfoCard name="avg. duration" value={47} />
        <InfoCard name="avg. cal" value={376} />
        <LinkedInfoCard
          icon={true}
          name="workout types"
          navLink="/portal/admin/workout-types"
        />
      </InfoCardGrid>
      <List actions={null} hasCreate={false}>
        <Datagrid bulkActionButtons={false}>
          <ReferenceField
            source="type.id"
            reference="portal/admin/workout-types"
            label="Type"
            sortable={false}
          >
            <TextField source="name" />
          </ReferenceField>
          <NumberField source="cals_burned" label="Cals" />
          <NumberField source="duration" />
          <DateField source="start_time" label="Start" showTime />
        </Datagrid>
      </List>
    </DefaultPageGrid>
  );
};

export default EntityList;

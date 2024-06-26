import { List, Datagrid, DateField, useRecordContext } from "react-admin";
import { TableHead, TableRow, TableCell } from "@mui/material";
import ServerKnowledgeTrigger from "./ServerKnowledgeTrigger";
import DefaultPageGrid from "../../commons/DefaultPageGrid";

// Show warnings if no updates for the past 1 day

const CustomRouteField = () => {
  // "record" is a prop received from the Datagrid
  const record = useRecordContext();
  const routeParts = record.route.split("/");

  // And returning the actual field.
  // UUIDs are always greater than 10 chars, so slice it at 10 chars.
  // Also copy the UUID to the clipboard if you click on it.
  return record ? <span>{routeParts[routeParts.length - 1]}</span> : null;
};

const CustomDatagridHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell key={1}>Route</TableCell>
      <TableCell key={2} sx={{ textAlign: "right" }}>
        Last updated
      </TableCell>
    </TableRow>
  </TableHead>
);

const EntityList = () => (
  <DefaultPageGrid>
    <ServerKnowledgeTrigger />
    <List sort={{ field: "last_updated", order: "DESC" }} actions={null}>
      <Datagrid bulkActionButtons={false} header={<CustomDatagridHeader />}>
        <CustomRouteField />
        <DateField source="last_updated" showTime={true} textAlign="right" />
      </Datagrid>
    </List>
  </DefaultPageGrid>
);

export default EntityList;

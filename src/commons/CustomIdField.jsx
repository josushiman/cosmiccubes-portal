import { useRecordContext, useNotify } from "react-admin";

export const customIdFieldStyle = {
  // Styling the UUID column.
  "& .column-id": {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
};

const CustomIdField = () => {
  // "record" is a prop received from the Datagrid
  const record = useRecordContext();
  let uuid = record.id;

  // notify for when a record is clicked to copy the UUID.
  const notify = useNotify();
  const handleClick = () => {
    navigator.clipboard.writeText(uuid);
    notify("UUID copied to clipboard.", { type: "info" });
  };

  // And returning the actual field.
  // UUIDs are always greater than 10 chars, so slice it at 10 chars.
  // Also copy the UUID to the clipboard if you click on it.
  return record ? (
    <span onClick={handleClick}>{uuid.slice(0, 5) + "..."}</span>
  ) : null;
};

export default CustomIdField;

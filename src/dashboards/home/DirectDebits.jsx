import { useGetOne } from "react-admin";
import { Card, CardHeader, List } from "@mui/material";

const DirectDebits = () => {
  const { isLoading, data } = useGetOne("dashboard/direct-debits", {
    id: "total",
  });

  return (
    <Card sx={{ flex: 1 }}>
      <CardHeader title="Direct Debit Totals" />
      <List sx={{ display: isLoading ? "none" : "block" }} dense={true}>
        {console.log(data)}
        {/* {statuses
          ? statuses.map((record) => (
              <ListItem key={record.id}>
                <ListItemText>{record.name}</ListItemText>
                <ListItemText>{record.company}</ListItemText>
                <ListItemText>{record.amount}</ListItemText>
              </ListItem>
            ))
          : null} */}
      </List>
    </Card>
  );
};

export default DirectDebits;

import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
} from "react-admin";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomIdField from "../../commons/CustomIdField";
import { CustomCard } from "../../commons/CustomCard";

const EntityList = () => (
  <Grid container flexDirection={"column"} rowGap={"1rem"}>
    <CustomCard
      sx={{
        padding: "1.5rem 2rem",
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={"1rem"}
      >
        <Typography variant="h5" fontWeight={300}>
          Total spend:
        </Typography>
        <Typography variant="h5" fontWeight={500}>
          £ 1000
        </Typography>
      </Grid>
      <hr style={{ width: "100%", opacity: "25%" }} />
    </CustomCard>
    <List>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <CustomIdField source="id" label="UUID" sortable={false} />
        <ReferenceField
          source="category.id"
          reference="portal/admin/ynab-categories"
          label="Category"
          sortable={false}
        >
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField
          source="category.id"
          reference="portal/admin/ynab-categories"
          label="Category Group"
          sortable={false}
        >
          <TextField source="category_group_name" />
        </ReferenceField>
        <NumberField
          source="amount"
          options={{
            style: "currency",
            currency: "GBP",
          }}
        />
      </Datagrid>
    </List>
  </Grid>
);

export default EntityList;

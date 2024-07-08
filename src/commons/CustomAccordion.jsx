import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomDataTable from "./CustomDataTable";

const CustomAccordion = ({ name, value, dataTable, details = null }) => {
  return (
    <Accordion
      sx={{
        backgroundImage: "unset",
        borderTopLeftRadius: "0.25rem",
        borderTopRightRadius: "0.25rem",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          fontWeight={300}
          textTransform={"capitalize"}
          sx={{ alignSelf: "center", width: "40%", flexShrink: 0 }}
        >
          {name}
        </Typography>
        <Typography variant="h5" textAlign={"right"} width={"100%"}>
          £ {value}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {dataTable ? <CustomDataTable data={dataTable} /> : details}
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;

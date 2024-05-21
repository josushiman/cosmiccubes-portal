import Grid from "@mui/material/Unstable_Grid2";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import formatCurrency from "../../hooks/formatCurrency";
import CustomDataTable from "../../commons/CustomDataTable";

const BudgetSummary = ({ data }) => {
  return (
    <Grid>
      {data.categories.map((value, index) => {
        return (
          <Accordion
            key={index}
            sx={{
              backgroundImage: "unset",
              borderTopLeftRadius: "0.25rem",
              borderTopRightRadius: "0.25rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ alignSelf: "center", width: "50%", flexShrink: 0 }}
              >
                {value.name}
              </Typography>
              {value.overspent > 0 && (
                <PriorityHighIcon
                  fontSize="1em"
                  sx={{
                    alignSelf: "center",
                    color: "#C06969",
                  }}
                />
              )}
              <Typography variant="h5" textAlign={"right"} width={"100%"}>
                £ {formatCurrency(value.budgeted, false, true)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomDataTable
                data={value.subcategories}
                excludeKeys={["budgeted"]}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Grid>
  );
};

export default BudgetSummary;

import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { accordionData, heading } from "../dummyData";
export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h2>{heading}</h2>
      {accordionData.map((data, index) => (
        <Accordion
          key={data.id}
          expanded={expanded === data.id}
          onChange={handleExpansion(data.id)}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={[
            expanded === data.id
              ? {
                  [`& .${accordionClasses.region}`]: {
                    height: "auto",
                  },
                  [`& .${accordionDetailsClasses.root}`]: {
                    display: "flex",
                  },
                }
              : {
                  [`& .${accordionClasses.region}`]: {
                    width: "1200px",
                  },
                  [`& .${accordionDetailsClasses.root}`]: {
                    display: "none",
                  },
                },
          ]}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography component='span'>{data.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

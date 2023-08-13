import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieGraph from "../../components/PieGraph";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieGraph />
      </Box>
    </Box>
  );
};

export default Pie;

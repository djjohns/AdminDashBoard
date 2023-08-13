import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineGraph from "../../components/LineGraph";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineGraph />
      </Box>
    </Box>
  );
};

export default Line;

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { increment, decrement } from "./redux/actions/action";
function App() {
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => state.counterReducer);
  const incrementCount = () => {
    dispatch(increment());
  };

  return (
    <div className="App">
      <Typography variant="h4" gutterBottom component="div">
        Counter
      </Typography>
      <Button variant="contained" onClick={incrementCount}>
        Increment
      </Button>
      <Typography variant="h6" gutterBottom component="div">
        {counterReducer}
      </Typography>
      <Button variant="contained" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </div>
  );
}

export default App;

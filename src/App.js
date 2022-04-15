import logo from "./logo.svg";
import "./App.css";
import Paper from "@mui/material/Paper";
import { TextField,Box, Button,Typography, Checkbox } from "@mui/material";

function App() {
  return (
    <div
      style={{
        backgroundColor: "rgb(100,0,100)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
      className="App"
    >
      <Paper
        elevation={2}
        style={{ height: "70vh", width: "25vw", padding: "5vh" }}
      >
        <Typography variant="h4" style={{ marginBottom: "5vh" }}>
          Sign Up
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ width: "20vw", marginBottom: "5vh" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          style={{ width: "20vw", marginBottom: "5vh" }}
        />
        <TextField
          id="outlined-basic"
          label="Roll Number"
          type="number"
          variant="outlined"
          style={{ width: "20vw", marginBottom: "5vh" }}
        />
        <Box style={{display:"flex", alignItems:"center" ,padding:"5vh", justifyContent:"space-between"}}>
          <Box style={{display:"flex" , alignItems:"center"}}>
        <Checkbox
          inputProps={{ "aria-label": "Student" }}
          /><Typography>Student</Typography>
          </Box>
          <Box style={{display:"flex", alignItems:"center"}}>
        <Checkbox
          inputProps={{ "aria-label": "Student" }}
          /><Typography>Faculty</Typography>
          </Box>
          </Box>
          <Button variant="outlined" color="secondary" style={{width:"12vw", height:"6vh"}}>Sign Up</Button>
      </Paper>

      <Paper
        elevation={2}
        style={{ height: "70vh", width: "25vw", padding: "5vh" }}
      >
        <Typography variant="h4" style={{ marginBottom: "5vh" }}>
          Sign In
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ width: "20vw", marginBottom: "5vh" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          style={{ width: "20vw", marginBottom: "5vh" }}
        />
        <Box style={{height:"28vh"}}>

        </Box>
          <Button variant="outlined" color="secondary" style={{width:"12vw", height:"6vh"}}>Sign In</Button>

      </Paper>
    </div>
  );
}

export default App;

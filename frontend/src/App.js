import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

function App() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/leads")
      .then(res => setLeads(res.data))
      .catch(err => console.log(err));
  }, []);

  return (

    <div>

      {/* Top Navbar */}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Enterprise CRM Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container style={{marginTop:"30px"}}>

        {/* KPI Cards */}

        <Grid container spacing={3}>

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Leads</Typography>
                <Typography variant="h4">{leads.length}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Conversions</Typography>
                <Typography variant="h4">3</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h4">$1200</Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>


        {/* Leads Table */}

        <Typography variant="h5" style={{marginTop:"40px"}}>
          Recent Leads
        </Typography>

        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {leads.map(lead => (

              <TableRow key={lead._id}>
                <TableCell>{lead.name}</TableCell>
              </TableRow>

            ))}

          </TableBody>

        </Table>

      </Container>

    </div>

  );
}

export default App;
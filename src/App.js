import React from 'react';
import {Container, Grid} from '@material-ui/core';
import './App.css';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <Container>
      <Grid container>
        <Grid item lg={3} md={4} sm={12} xs={12}  style={{backgroundColor:"red"}}>
          <Profile />
        </Grid>
        <Grid item xs style={{backgroundColor:"green"}}> 
          <Header />
          <Router>
            <Routes>
              <Route path = "/portfolio" element = { <Portfolio/> } />
              <Route path = "/resume" element = { <Resume/> } />
            </Routes> 
          </Router>
         
          <Footer />
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;

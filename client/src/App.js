import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; // Import Material-UI components
import { useDispatch } from 'react-redux'; // Import useDispatch from React Redux

import Posts from './components/Posts/Posts'; // Import Posts component
import Form from './components/Form/Form'; // Import Form component
import { getPosts } from './actions/posts'; // Import the getPosts action
import useStyles from './styles'; // Import styles
import memories from './images/memories.png'; // Import the memories image

const App = () => {
  const [currentId, setCurrentId] = useState(0); // Initialize state variable currentId with default value 0
  const dispatch = useDispatch(); // Create a dispatch function
  const classes = useStyles(); // Get styles from the useStyles hook

  useEffect(() => {
    dispatch(getPosts()); // Dispatch the getPosts action when the component mounts or when currentId or dispatch changes
  }, [currentId, dispatch]); // Specify dependencies for the useEffect hook

  return (
    <Container maxWidth="lg"> {/* Create a Container with a maximum width of lg (large) */}
      <AppBar className={classes.appBar} position="static" color="inherit"> {/* Create an AppBar */}
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography> {/* Add a Typography component */}
        <img className={classes.image} src={memories} alt="icon" height="60" /> {/* Add an image */}
      </AppBar>
     {/* Apply a Grow transition */}
        <Container> {/* Create another Container */}
          <Grid container justify="space-between" alignItems="stretch" spacing={3}> {/* Create a Grid container */}
            <Grid item xs={12} sm={7}> {/* Grid item with specified width for small screens */}
              <Posts setCurrentId={setCurrentId} /> {/* Render the Posts component */}
            </Grid>
            <Grid item xs={12} sm={4}> {/* Grid item with specified width for small screens */}
              <Form currentId={currentId} setCurrentId={setCurrentId} /> {/* Render the Form component */}
            </Grid>
          </Grid>
        </Container>
      
    </Container>
  );
};

export default App; // Export the App component as the default export

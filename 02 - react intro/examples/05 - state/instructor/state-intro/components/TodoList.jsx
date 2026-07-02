// state lets us store persistent data across component re-renders,
// and automate re-rendering whenever that data changes.

import { useState } from 'react';

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TodoList() {

  // first term:  the variable that will hold the value
  // second term: the setter function; the only thing allowed to change that value
  // initial param for useState: initial value
  const [todoItem, setTodoItem] = useState("")

  const onTodoTextChange = (event) => {
    // call state variable's setter w/ new value to write.
    setTodoItem(event.target.value)
  }

  const onAddTodoClick = () => {
    console.log("clicked!")
  }

  return (
      <Grid container spacing={2} sx={{ my: 4 }}>

        <Grid size={10}>
          {/* Most front-end frameworks use a 12-columnd grid (convenient lowest-common mulitple),
              so something being "12 columns wide" means it takes up the whole row.
          */}
          <TextField
            id="standard-basic"
            label="New todo item"
            variant="standard"
            sx={{ width: '100%' }}
            value={todoItem}
            onChange={onTodoTextChange}
          />
        </Grid>

        <Grid size={2}>
          <Button
            variant="contained"
            onClick={onAddTodoClick}
          >
            Add Todo Item
          </Button>
        </Grid>

      </Grid>
  )

}
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Radio from '@material-ui/core/Radio'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useHistory } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    textAlign: 'left',
    width: '100%',
  },
  grid: {
    width: '50%',
  },
  select: {
    width: '40%',
    marginBottom: 20,
    marginTop: 20,
  },
  btn: {
    width: '20%',
    marginBottom: 40,
    marginTop: 20,
  },
  intro: {
    paddingTop: 50,
    textAlign: 'left',
    fontSize: 17,
    color: '#616161',
    marginBottom: 30,
  },
})

export default function Form() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [sex, setSex] = useState('female')
  const [age, setAge] = useState('female')
  const [embark, setEmbark] = useState('None')
  const [ticketClass, setTicketClass] = useState('1')
  const history = useHistory()

  const [titleError, setTitleError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [detailsError, setDetailsErrors] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsErrors(false)

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsErrors(true)
    }
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, sex }),
      }).then(() => history.push('/'))
    }
  }
  return (
    <Container>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Typography className={classes.intro} variant='h6' gutterBottom>
          Fill this Short Form below to find your Survival Score. This form
          contains the basic information about the passanger. It uses a this
          Machine Learning Model to predict if the passanger would survive the
          Titanic tragedy. No information is saved for any purpose. Learn more
          about this project and view source code here
        </Typography>

        {/* inpput field two */}
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label='Name'
          variant='outlined'
          color='secondary'
          fullWidth
        />
        {/* input Sex */}
        <FormControl className={classes.field}>
          <FormLabel>Sex</FormLabel>
          <RadioGroup value={sex} onChange={(e) => setSex(e.target.value)}>
            <FormControlLabel value='male' control={<Radio />} label='male' />
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='female'
            />
          </RadioGroup>
        </FormControl>
        {/* //inout ticket classes */}
        <FormControl className={classes.field}>
          <FormLabel>Ticket Class</FormLabel>
          <RadioGroup
            value={ticketClass}
            onChange={(e) => setTicketClass(e.target.value)}
          >
            <FormControlLabel
              value='1'
              control={<Radio />}
              label='first class (upper deck)'
            />
            <FormControlLabel
              value='2'
              control={<Radio />}
              label='second class (middle deck)'
            />
            <FormControlLabel
              value='3'
              control={<Radio />}
              label='third class (lower deck)'
            />
          </RadioGroup>
        </FormControl>

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent='flex-start'>
              {/* Age */}
              <Grid item className={classes.grid}>
                {/* Age */}
                <FormControl className={classes.field}>
                  <FormLabel>Age</FormLabel>
                  <TextField
                    onChange={(e) => setAge(e.target.value)}
                    className={classes.field}
                    label='Age'
                    variant='outlined'
                    color='secondary'
                    required
                    error={ageError}
                  />
                </FormControl>
              </Grid>
              {/* Number of sibling/spouse */}
              <Grid item className={classes.grid}>
                {/* number of sibling/ spouse */}
                <FormControl className={classes.field}>
                  <FormLabel># of siblings / spouses</FormLabel>
                  <TextField
                    onChange={(e) => setAge(e.target.value)}
                    className={classes.field}
                    label='number'
                    variant='outlined'
                    color='secondary'
                    required
                    error={ageError}
                  />
                </FormControl>
              </Grid>
              {/* number of parent/ children */}
              <Grid item className={classes.grid}>
                <FormControl className={classes.field}>
                  <FormLabel># of parents / children</FormLabel>
                  <TextField
                    onChange={(e) => setAge(e.target.value)}
                    className={classes.field}
                    label='number'
                    variant='outlined'
                    color='secondary'
                    required
                    error={ageError}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* last item */}

        <FormControl className={classes.field} variant='filled'>
          <FormLabel>Embark</FormLabel>

          <br />
          <Select
            className={classes.select}
            labelId='demo-simple-select-filled-label'
            id='demo-simple-select-filled'
            value={embark}
            onChange={(e) => setEmbark(e.target.value)}
          >
            <MenuItem value='None'>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'C'}>Cherbourg</MenuItem>
            <MenuItem value={'Q'}>Queenstown</MenuItem>
            <MenuItem value={'S'}>Southampton</MenuItem>
          </Select>
        </FormControl>

        <Button
          type='submit'
          color='primary'
          variant='contained'
          size='large'
          className={classes.btn}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

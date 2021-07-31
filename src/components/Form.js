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
    color: 'inherit',
    marginBottom: 30,
  },
})

export default function Form() {
  const classes = useStyles()

  const [params, setParams] = useState({
    userName: '',
    userSex: '',
    userAge: '',
    userTicketClass: '',
    userEmbark: '',
    userSibSpouse: '',
    userParChildren: '',
  })

  const history = useHistory()
  //Errors
  const [sexError, setSexError] = useState(false)
  const [ticketClassErrorError, setTicketClassError] = useState(false)
  const [embarkError, setEmbarkError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [sibSpouseError, setSibSpouseError] = useState(false)
  const [parChildrenError, setParChildrenError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSexError(false)
    setTicketClassError(false)
    setEmbarkError(false)
    setAgeError(false)
    setSibSpouseError(false)
    setParChildrenError(false)

    if (params.userSex === '') {
      setSexError(true)
    }
    if (params.userAge === '') {
      setAgeError(true)
    }
    if (params.userTicketClass === '') {
      setTicketClassError(true)
    }
    if (params.userEmbark === '') {
      setEmbarkError(true)
    }
    if (params.userSibSpouse === '') {
      setSibSpouseError(true)
    }
    if (params.userParChildren === '') {
      setParChildrenError(true)
    }
    // If all the inputs received from the user, call service
    if (params) {
      console.log(params)
    }

    // if (title && details) {
    //   fetch('http://localhost:8000/notes', {
    //     method: 'POST',
    //     headers: { 'Content-type': 'application/json' },
    //     body: JSON.stringify({ title, details, sex }),
    //   }).then(() => history.push('/'))
    // }
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
          onChange={(e) => setParams({ ...params, userName: e.target.value })}
          className={classes.field}
          label='Name'
          value={params.userName}
          variant='outlined'
          color='secondary'
          fullWidth
        />
        {/* input Sex */}
        <FormControl className={classes.field}>
          <FormLabel>Sex</FormLabel>
          <RadioGroup
            value={params.userSex}
            onChange={(e) => {
              setParams({ ...params, userSex: e.target.value })
              console.log(e.target.value)
            }}
          >
            <FormControlLabel value='male' control={<Radio />} label='male' />
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='female'
            />
          </RadioGroup>
        </FormControl>

        <Grid container>
          <Grid item className={classes.grid} xs={12} sm={12} md={6}>
            {/* //input ticket classes */}
            <FormControl className={classes.field}>
              <FormLabel>Ticket Class</FormLabel>
              <RadioGroup
                value={params.userTicketClass}
                onChange={(e) => {
                  setParams({ ...params, userTicketClass: e.target.value })
                  console.log(e.target.value)
                }}
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
          </Grid>

          <Grid item className={classes.grid} xs={12} sm={12} md={6}>
            {/* //input ticket classes */}
            <FormControl className={classes.field}>
              <FormLabel>Embark port</FormLabel>
              <RadioGroup
                value={params.userEmbark}
                onChange={(e) => {
                  setParams({ ...params, userEmbark: e.target.value })
                  console.log(e.target.value)
                }}
              >
                <FormControlLabel
                  value='C'
                  control={<Radio />}
                  label='Cherbourg'
                />
                <FormControlLabel
                  value='Q'
                  control={<Radio />}
                  label='Queenstown'
                />
                <FormControlLabel
                  value='S'
                  control={<Radio />}
                  label='Southampton'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item className={classes.grid} xs={12} sm={12} md={4}>
            {/* Age */}
            <FormControl className={classes.field}>
              <FormLabel>Age</FormLabel>
              <TextField
                onChange={(e) =>
                  setParams({ ...params, userAge: e.target.value })
                }
                className={classes.field}
                label='Age'
                variant='outlined'
                color='secondary'
                required
                error={ageError}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={4}>
            {/* number of sibling/ spouse */}
            <FormControl className={classes.field}>
              <FormLabel># of siblings / spouses</FormLabel>
              <TextField
                onChange={(e) =>
                  setParams({ ...params, userSibSpouse: e.target.value })
                }
                className={classes.field}
                label='number'
                variant='outlined'
                color='secondary'
                required
                error={ageError}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} xs={12} sm={12} md={4}>
            <FormControl className={classes.field}>
              <FormLabel># of parents / children</FormLabel>
              <TextField
                onChange={(e) =>
                  setParams({ ...params, userParChildren: e.target.value })
                }
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

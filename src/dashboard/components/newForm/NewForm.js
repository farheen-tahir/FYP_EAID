import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import "./NewForm.css"

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: theme.spacing(1),
    width: '100%',
    maxWidth: '500px',

  },
  textarea: {
    margin: theme.spacing(1),
    width: '100%',
    maxWidth: '500px',
    minHeight: '100px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function NewForm() {
  const classes = useStyles();

    const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, message);
    setName("");
    setMessage("");
    // You can add your own logic to handle the form submission
  };

  return (
    <>
    <h1>Form</h1>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.input}
        required
      />
      <TextareaAutosize
        aria-label="Message"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={classes.textarea}
        required
      />
      <button className={classes.button} type="submit">
        Send
      </button>
    </form>
    </>
  );
}

export default NewForm;
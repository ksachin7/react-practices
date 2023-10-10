import { useState } from 'react';
import './App.css';

function App() {
  // const [email, setEmail] = useState('');
  // const [isValidEmail, setIsValidEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [error, setError] = useState('');

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
  /*
    Regular Expression Explanation:
    /: Delimiters indicating the start and end of the regular expression.
    ^: Asserts the start of the string.
    [a-zA-Z0-9._-]+: This part matches the local part of the email address, which includes one or more characters that can be letters (both uppercase and lowercase), digits, periods (.), underscores (_), or hyphens (-). This represents the username part of the email address.
    @: Matches the at symbol, which separates the local part from the domain part of the email address.
    [a-zA-Z0-9.-]+: This part matches the domain part of the email address, which includes one or more characters that can be letters (both uppercase and lowercase), digits, periods (.), or hyphens (-).
    \.: Matches a literal period (dot), separating the domain from the top-level domain (TLD).
    [a-zA-Z]{2,4}: This part matches the TLD, which consists of two to four letters. For example, it matches common TLDs like .com, .net, .org, or .info.
    $: Asserts the end of the string.
  
    If the email matches the pattern completely (i.e., it adheres to the format of a valid email address), test returns true.
    If the email does not match the pattern (e.g., it contains invalid characters or lacks essential parts of an email address), test returns false.
  */

  const handleChange = (e) => {
    const { name, value } = e.target;

    // email validation
    if (name === 'email') {
      const isValid = validateEmail(value);
      setError(isValid ? '' : 'Invalid Email Address!')
    }

    if (name === 'age') {
      const ageValue = parseInt(value, 10);
      if (isNaN(ageValue) || ageValue < 25 || ageValue > 50) {
        setError('Please ensure email is valid and age must be in range 25-50!')
      }
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, email, message } = formData;
    const ageValue = parseInt(age, 10);

    if (ageValue > 25 && ageValue < 50 && !error) {
      const newSubmittedData = { name, age, email, message };
      setSubmittedData(newSubmittedData);
      setIsSubmitted(true);

      // Clear the form fields by resetting the state to initial values
      setFormData({ name: '', age: 0, email: '', message: '' });
      setError('');
    } else {
      setIsSubmitted(false);
    }
  }

  return (
    <div className="App">
      <div id="contact">
        <h1 className="App-header">Contact</h1>
        <form onSubmit={handleSubmit}>
          <lable htmlFor='name'><strong>Name: </strong></lable>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

          <lable htmlFor='age'><strong>Age: </strong></lable>
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" required />

          <lable htmlFor='email'><strong>Email: </strong></lable>
          <input type="email" value={formData.email} onChange={handleChange} name="email" placeholder="Enter your email" required />
          {error && <p className='error'>{error}</p>}<br></br>

          <lable htmlFor='message'><strong>Message: </strong></lable>
          <textarea rows="5" cols="30" value={formData.message} name="message" onChange={handleChange} placeholder="Enter your message here" > </textarea>
          <input type="submit" value="Submit"
            style={
              {
                background: !isSubmitted ? (error !== '' ? '#fac' : '#cfc') : 'lightgrey',
                cursor: isSubmitted ? 'not-allowed' : 'pointer'
              }
            }></input>
        </form>

        {/* displaying the data */}
        {submittedData && (
          <div>
            <h2>You Entered:</h2>
            <p><strong>Name: </strong>{submittedData.name}</p>
            <p><strong>Age: </strong>{submittedData.age}</p>
            <p><strong>Email: </strong>{submittedData.email}</p>
            <p><strong>Message: </strong>{submittedData.message}</p>
          </div>
        )}
      </div>
    </div >
  );
}

export default App;

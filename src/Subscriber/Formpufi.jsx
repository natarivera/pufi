import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkzlyrd");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="inputCtn">
      <label htmlFor="email">
      </label>
      <input className='emailinput'
        placeholder='Ingresa tu email'
        id="email"
        type="email"
        name="email"
      />      
      <button className='arrow' type="submit" disabled={state.submitting}>
        &gt;
      </button>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
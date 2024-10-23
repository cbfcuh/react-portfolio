import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks for getting in touch!`);
  };

  return (
    <div className="container text-center">
      <h2 className="p-3">Contact Me!</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
        className="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          className="form-control mt-4"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text-area"
          placeholder="Message"
        />
        <button type="submit" className="btn btn-secondary m-3">
          Submit
        </button>
      </form>
    </div>
  );
  }
  
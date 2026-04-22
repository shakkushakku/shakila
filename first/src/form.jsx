import React from 'react'
import { useState } from 'react'

function Form() {
    const [form, setForm] = useState({
        name:"",
        email:"",
        password:"",
        message:"",
        agree:false,
        gender:"",
        role:","
    });

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

    const handleSubmit = (e) => { e.preventDefault(); 

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Form Submitted:", form);
    alert("Form submitted successfully!");
  };


  return (
    <div style={{ padding: "20px"}}>
        <h1>forms examples</h1>
        <form onSubmit={handleSubmit}>

            <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

<div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            I agree to terms
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
            
            <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>


        <div>
            <select
            name='role'
            value={form.role}
            onChange={handleChange}>

                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
        </div>

        <br />

        <button type='sumbit'>Sunmit</button>
        </form>

        <hr />

        <h2>Live Preview</h2>
        <pre>{JSON.stringify(form,null,2)}</pre>

    </div>
  );
}

export default form
import { useState, useCallback, useMemo } from "react";

export default function FormComponent() {


  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' })

  const handleChange =  useCallback((e) => {
    const { name, value } = e.target
    
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  },[]
 )

  function calculetTotalLength(){
   return  form.firstName.length + form.lastName.length + form.email.length
  }

  const totalChars = useMemo(calculetTotalLength, [form]) 

  return (
    <form>
      <h3>Form</h3>
      <label>
        First name:
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          type="text"
        />
      </label>

      <label>
        Last name:
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          type="text"
        />
      </label>

      <label>
        E-mail:
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="text"
        />
      </label>

      <p>Total: {totalChars}</p>
    </form>
  );
}

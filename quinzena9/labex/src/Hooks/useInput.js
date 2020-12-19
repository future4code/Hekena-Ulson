import { useState } from "react";

export const useInput = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  const onChangeInput = (event) => {
    const newValue = event.target.value;
    const fieldName = event.target.name;
    
    setForm({...form, [fieldName]: newValue })
  }

  return { form, onChange, onChangeInput };
    };
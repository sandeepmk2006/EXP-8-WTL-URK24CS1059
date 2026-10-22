import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  password: "",
  age: "",
  mobile: "",
  gender: "",
  state: "",
  category: "",
  projectTitle: ""
};

// One validation rule per field. Each returns an error message, or "" if valid.
const validators = {
  name: (v) =>
    !v.trim()
      ? "Full name is required."
      : !/^[A-Za-z ]+$/.test(v.trim())
      ? "Name must contain letters and spaces only."
      : "",
  email: (v) =>
    !v
      ? "Email address is required."
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? "Enter a valid email address."
      : "",
  password: (v) =>
    !v
      ? "Password is required."
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(v)
      ? "Use an uppercase letter, a lowercase letter, a number and at least 8 characters."
      : "",
  age: (v) =>
    !v
      ? "Age is required."
      : !/^\d+$/.test(v) || Number(v) < 18 || Number(v) > 30
      ? "Age must be between 18 and 30."
      : "",
  mobile: (v) =>
    !v
      ? "Mobile number is required."
      : !/^\d{10}$/.test(v)
      ? "Mobile number must be exactly 10 digits."
      : "",
  gender: (v) => (v ? "" : "Please select a gender."),
  state: (v) => (v ? "" : "Please select a state."),
  category: (v) => (v ? "" : "Please select a project category."),
  projectTitle: (v) => (v.trim() ? "" : "Project title is required.")
};

// Reusable field: renders an <input> or a <select> (when `options` is given).
function Field({ label, name, value, error, onChange, onBlur, options, type = "text", placeholder }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!error}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={!!error}
        />
      )}
      {error && <small role="alert">{error}</small>}
    </div>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(null);

  // Recalculated on every render, so errors always match the current input.
  const errors = Object.fromEntries(
    Object.keys(validators).map((key) => [key, validators[key](form[key])])
  );
  const valid = Object.values(errors).every((e) => e === "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess(null);
  };

  // A field's error is shown only after the user has visited it.
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSuccess({ name: form.name.trim(), title: form.projectTitle.trim() });
    setForm(initialForm);
    setTouched({});
  };

  const fieldProps = (name) => ({
    name,
    value: form[name],
    error: touched[name] ? errors[name] : "",
    onChange: handleChange,
    onBlur: handleBlur
  });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field label="Full Name" placeholder="Enter your name" {...fieldProps("name")} />
      <Field label="Email Address" type="email" placeholder="Enter your email" {...fieldProps("email")} />
      <Field label="Password" type="password" placeholder="Minimum 8 characters" {...fieldProps("password")} />
      <Field label="Age" type="number" placeholder="Enter age (18–30)" {...fieldProps("age")} />
      <Field label="Mobile Number" type="tel" placeholder="10-digit mobile number" {...fieldProps("mobile")} />
      <Field label="Gender" options={["Male", "Female", "Other"]} {...fieldProps("gender")} />
      <Field
        label="State"
        options={["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"]}
        {...fieldProps("state")}
      />
      <Field
        label="Project Category"
        options={["Physics", "Chemistry", "Biology", "Environment", "Technology"]}
        {...fieldProps("category")}
      />
      <Field label="Project Title" placeholder="e.g. Solar-powered water purifier" {...fieldProps("projectTitle")} />

      <button type="submit" disabled={!valid}>Submit Registration</button>

      {success && (
        <p className="success" role="status">
          🎉 Thank you, {success.name}! Your project "{success.title}" is registered.
        </p>
      )}
    </form>
  );
}

export default RegistrationForm;

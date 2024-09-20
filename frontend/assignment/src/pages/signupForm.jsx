import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      alert("Form submitted successfully");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Signup Form</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          margin: "30px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          maxWidth: "200px",

          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <label>
          Name:
          <input
            style={{ marginBottom: "10px" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            style={{ marginBottom: "10px" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            style={{ marginBottom: "10px" }}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignupForm;

import React, { useState } from "react";

let userIdCounter = 1; // Start with 1 for sequential IDs

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    address: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.fullName.length < 3) {
      alert("Full Name must be at least 3 characters.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Invalid email format.");
      return;
    }
    if (isNaN(formData.age) || formData.age < 18) {
      alert("Age must be a number and at least 18.");
      return;
    }
    if (!formData.gender) {
      alert("Please select a gender.");
      return;
    }
    if (formData.address.length < 10) {
      alert("Address must be at least 10 characters.");
      return;
    }

    // Add user with simpler unique ID
    const newUser = { ...formData, id: `USR${userIdCounter++}` };
    setUsers([...users, newUser]);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      age: "",
      gender: "",
      address: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">User Registration</h1>
      <form
        className="max-w-md mx-auto bg-white p-5 rounded shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="3"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-md group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-600 rounded-md group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
           Submit
          </span>
        </button>
      </form>

      <div className="mt-10 space-y-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow-md border"
          >
            <h2 className="text-lg font-bold">User ID: {user.id}</h2>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const Button = ({ styles = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('YOUR_GOOGLE_SCRIPT_URL', {
      method: 'POST',
      mode: 'no-cors', // use 'cors' if handling response
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      }),
    });

    alert("Submitted!"); // Or custom UI message
    setFormData({ name: "", email: "", number: "", message: "" });
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={`py-4 px-6 bg-[#158ec7] font-poppins font-medium text-[18px] text-black outline-none ${styles} rounded-[10px] hover:opacity-80 transition-all`}
      >
        Get Started
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border p-2 rounded"
              />
              <button type="submit" className="bg-[#158ec7] text-white p-2 rounded hover:bg-opacity-80">
                Submit
              </button>
              <button type="button" onClick={() => setShowModal(false)} className="text-sm text-gray-600 mt-2">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;

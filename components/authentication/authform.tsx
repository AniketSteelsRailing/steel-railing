"use client";
import { useState, FormEvent, useEffect } from "react";

interface AuthFormProps {
  mode: "Signup" | "Login" | "Query";
  onSubmit: (data: { fname: string; lname: string; email: string; phone: string; password: string; message: string }) => void;
  resetForm?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit, resetForm }) => {
  const [fname, setFirstname] = useState("");
  const [fullname, setFullname] = useState("");
  const [lname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (resetForm) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setPassword("");
      setMessage("");
    }
  }, [resetForm]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ fname, lname, email, phone, password, message });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {(mode == "Signup" || mode == "Login") && (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 ">{mode}</h2>
        </>)}
      {(mode == "Signup") && (
        <>
          <div>
            <input
              type="firstname"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
        </>
      )}
      {(mode == "Signup") && (
        <>
          <div>
            <input
              type="lastname"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
        </>
      )}
      {(mode == "Query") && (
        <>
          <div>
            <input
              type="fullname"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
        </>
      )}
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
      </div>
      {(mode == "Signup" || mode == "Query") && (
        <>
          <div>
            <input
              type="phone"
              placeholder="Mobile No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
        </>
      )}
      {(mode == "Login" || mode == "Signup") && (
        <>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
        </>
      )}
      {mode == "Query" && (
        <>
          <div>
                {/* <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Interested In
                </label> */}
                <select
                  id="service"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                >
                  <option>Service Interested In</option>
                  <option>Custom Railing Design</option>
                  <option>Window Installation</option>
                  <option>Repair Services</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>
        </>
      )}
      {mode == "Query" && (
        <>
          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
        </>
      )}
      {(mode == "Signup" || mode == "Login") ? (
        <>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            {mode}
          </button>
        </>
      ) : <button
        type="submit"
        className="w-full py-3 bg-blue-400 text-white rounded-md hover:bg-accent focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
      }
    </form>
  );
};

export default AuthForm;

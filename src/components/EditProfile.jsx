import { useState } from "react";

function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Mehrabbozorgi.business@gmail.com");
  const [hrId, setHrId] = useState("RWI155");
  const [department, setDepartment] = useState("Designing");
  const [dateOfBirth, setDateOfBirth] = useState("1999-10-05");
  const [contactNumber, setContactNumber] = useState("99999-99999");
  const [password, setPassword] = useState("sbdfbnd65sfdvb s");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      hrId,
      department,
      dateOfBirth,
      contactNumber,
      password,
    });
  };
      
  return (
    <div>
      <div className="dummy-navbar w-[1440px] h-[64px] bg-gray-300"></div>
      <div className="flex">
        <div className="dummy-sidebar w-[320px] h-[680px] bg-gray-300"></div>
        <div className="container mx-auto p-4 flex w-[1057px] h-[784px]">
          <div className=" w-[300px] bg-black">
            {/* Your left sidebar content */}

          </div>
          <div className=" w-[757px]">
            <form onSubmit={handleSubmit}>
              {/* Your form content */}
              <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="department" className="block text-gray-700 font-bold mb-2">
              Department
            </label>
            <input
              type="text"
              id="department"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="hrId" className="block text-gray-700 font-bold mb-2">
              HR ID
            </label>
            <input
              type="text"
              id="hrId"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={hrId}
              onChange={(e) => setHrId(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          >
            Save
          </button>
        </div>
      </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
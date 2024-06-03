import React, { useState } from 'react'

const Profile = () => {
    const dummyData = {
        email: "Mehrabbozorgi.business@gmail.com",
        contactNumber: "99999-99999",
        password: "sbdfbnd65sfdvb s",
      };
    
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState(dummyData.email);
      const [hrId, setHrId] = useState("RWI155");
      const [department, setDepartment] = useState("Designing");
      const [dateOfBirth, setDateOfBirth] = useState("1999-10-05");
      const [contactNumber, setContactNumber] = useState(dummyData.contactNumber);
      const [password, setPassword] = useState(dummyData.password);
    
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
    
      const isMatched = (value, dummyValue) => value === dummyValue;
    
      return (
        <div>
          
          <div className="flex">
            
            <div className="container mx-auto p-4 flex w-[1057px] h-[784px]">
              <div className="w-[250px] bg-white items-center flex-row  ">
                {/* Your left sidebar content */}
                <img
                  className="w-[160.38px] h-[160.38px] rounded-full mt-20 mb-[10px]"
                  src="https://i.pinimg.com/736x/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg"
                ></img>
                <button className="bg-blue-500 ml-[45px] text-white p-1">Change</button>
              </div>
    
              <div className="w-[807px] m-5">
                <h1 className="text-[36.5px] text-center font-normal mb-3">Edit Profile</h1>
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
                  <div className="grid grid-cols-1 mt-4">
                    <div className="relative">
                      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {isMatched(email, dummyData.email) && (
                        <span className="absolute right-3 top-10 text-black bg-green-600">✔</span>
                      )}
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
                    <div>
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
                    <div className="relative">
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
                      {isMatched(contactNumber, dummyData.contactNumber) && (
                        <span className="absolute right-3 top-10 text-green-500">✔</span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mt-4 relative">
                    <div>
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
                      {isMatched(password, dummyData.password) && (
                        <span className="absolute right-3 top-10 text-green-500">✔</span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
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
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Profile

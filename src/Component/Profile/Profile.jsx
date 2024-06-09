import React, { useState } from 'react'

const Profile = () => {






      // const dummyData = {
      //   email: 'Mehrabbozorgi.business@gmail.com',
      //   contactNumber: '99999-99999',
      //   password: 'sbdfbnd65sfdvb s',
      // };
    
      // const [firstName, setFirstName] = useState('');
      // const [lastName, setLastName] = useState('');
      // const [email, setEmail] = useState(dummyData.email);
      // const [hrId, setHrId] = useState('RWI155');
      // const [department, setDepartment] = useState('Designing');
      // const [dateOfBirth, setDateOfBirth] = useState('1999-10-05');
      // const [contactNumber, setContactNumber] = useState(dummyData.contactNumber);
      // const [password, setPassword] = useState(dummyData.password);
    
      // const handleSubmit = (event) => {
      //   event.preventDefault();
      //   // Submit the form data to the server
      //   console.log('Form submitted:', {
      //     firstName,
      //     lastName,
      //     email,
      //     hrId,
      //     department,
      //     dateOfBirth,
      //     contactNumber,
      //     password,
      //   });
      // };
    
      // const isMatched = (value, dummyValue) => value === dummyValue;
    
      // return (
      //   <div className="bg-white m-4 rounded-xl">
      //     <div className="flex">
      //       <div className="container mx-auto p-4 flex w-[1057px] h-[784px]">
      //         <div className="w-[250px] items-center flex-row">
      //           <img
      //             className="w-[160.38px] h-[160.38px] rounded-full mt-[150px] mb-[10px] ml-[35px]"
      //             src="https://i.pinimg.com/736x/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg"
      //             alt="Profile"
      //           />
      //           <button className="bg-blue-500 ml-[80px] text-white p-1">Change</button>
      //         </div>
    
      //         <div className="w-[807px] m-5">
      //           <h1 className="text-[36.5px] text-center font-normal mb-3">Edit Profile</h1>
      //           <form onSubmit={handleSubmit}>
      //             <div className="grid grid-cols-2 gap-4">
      //               <div>
      //                 <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
      //                   First Name
      //                 </label>
      //                 <input
      //                   type='text'
      //                   id="firstName"
      //                   className="shadow appearance-none border-[1px] border-grey-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      //                   value={firstName}
      //                   onChange={(e) => setFirstName(e.target.value)}
      //                 />
      //               </div>
      //               <div>
      //                 <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
      //                   Last Name
      //                 </label>
      //                 <input className='shadow appearance-none border-[1px] border-grey-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      //                 type='text'
      //                 placeholder='Last Name'
      //                 value={lastName}
      //                 onChange={(e) => setLastName(e.target.value)}
      //                 />
      //               </div>
      //             </div>
      //             <div className="grid grid-cols-1 mt-4">
      //               <div className="relative">
      //                 <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
      //                   Email
      //                 </label>
      //                 <input
      //                   type="email"
      //                   id="email"
      //                   className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      //                   value={email}
      //                   onChange={(e) => setEmail(e.target.value)}
      //                 />
      //                 {isMatched(email, dummyData.email) && (
      //                   <span className="absolute right-3 top-10 text-black bg-green-600">✔</span>
      //                 )}
      //               </div>
      //             </div>
      //             <div className="grid grid-cols-2 gap-4 mt-4">
      //               <div>
      //                 <label htmlFor="hrId" className="block text-gray-700 font-bold mb-2">
      //                   HR ID
      //                 </label>
      //                 <input
      //                   type="text"
      //                   id="hrId"
      //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      //                   value={hrId}
      //                   onChange={(e) => setHrId(e.target.value)}
      //                 />
      //               </div>
      //               <div>
      //                 <label htmlFor="department" className="block text-gray-700 font-bold mb-2">
      //                   Department
      //                 </label>
      //                 <input
      //                   type="text"
      //                   id="department"
      //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      //                   value={department}
      //                   onChange={(e) => setDepartment(e.target.value)}
      //                 />
      //               </div>
      //             </div>
      //             <div className="grid grid-cols-2 gap-4 mt-4">
      //               <div>
      //                 <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
      //                   Date of Birth
      //                 </label>
      //                 <input
      //                   type="date"
      //                   id="dateOfBirth"
      //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      //                   value={dateOfBirth}
      //                   onChange={(e) => setDateOfBirth(e.target.value)}
      //                 />
      //               </div>
      //               <div className="relative">
      //                 <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">
      //                   Contact Number
      //                 </label>
      //                 <input
      //                   type="tel"
      //                   id="contactNumber"
      //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      //                   value={contactNumber}
      //                   onChange={(e) => setContactNumber(e.target.value)}
      //                 />
      //                 {isMatched(contactNumber, dummyData.contactNumber) && (
      //                   <span className="absolute right-3 top-10 text-green-500">✔</span>
      //                 )}
      //               </div>
      //             </div>
      //             <div className="grid grid-cols-1 mt-4 relative">
      //               <div>
      //                 <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
      //                   Password
      //                 </label>
      //                 <input
      //                   type="password"
      //                   id="password"
      //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      //                   value={password}
      //                   onChange={(e) => setPassword(e.target.value)}
      //                 />
      //                 {isMatched(password, dummyData.password) && (
      //                   <span className="absolute right-3 top-10 text-green-500">✔</span>
      //                 )}
      //               </div>
      //             </div>
      //             <div className="flex justify-center mt-4">
      //               <button
      //                 type="button"
      //                 className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      //               >
      //                 Cancel
      //               </button>
      //               <button
      //                 type="submit"
      //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
      //               >
      //                 Save
      //               </button>
      //             </div>
      //           </form>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // );






      const dummyData = {
        firstName: "John",
        lastName: "Doe",
        email: "dummy@gmail.com",
        contactNumber: "9999999999",
        password: "123456789",
        hrId: "RWI155",
        department: "Designing",
        dateOfBirth: "1999-10-05",
        profilePicture: "https://i.pinimg.com/736x/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg",
      };
    
      const [firstName, setFirstName] = useState(dummyData.firstName);
      const [lastName, setLastName] = useState(dummyData.lastName);
      const [email, setEmail] = useState(dummyData.email);
      const [hrId, setHrId] = useState(dummyData.hrId);
      const [department, setDepartment] = useState(dummyData.department);
      const [dateOfBirth, setDateOfBirth] = useState(dummyData.dateOfBirth);
      const [contactNumber, setContactNumber] = useState(dummyData.contactNumber);
      const [password, setPassword] = useState(dummyData.password);
      const [profilePicture, setProfilePicture] = useState(dummyData.profilePicture);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          firstName,
          lastName,
          email,
          hrId,
          department,
          dateOfBirth,
          contactNumber,
          password,
          profilePicture,
        };
        // Submit the form data to the server
        console.log("Form submitted:", formData);
      };
    
      const isMatched = (value, dummyValue) => value === dummyValue;
    
      const handleChangePicture = () => {
        const newPicture = prompt("Enter the new profile picture URL:");
        if (newPicture) {
          setProfilePicture(newPicture);
        }
      };
    
      return (
        <div className="flex justify-center items-center p-4 ">
          <div className="container  flex flex-col lg:flex-row lg:w-[1000px] lg:h-[600px] bg-white shadow-md rounded-lg overflow-hidden px-[50px] relative left-5 top-16 ">
            <div className="flex flex-col items-center p-4 lg:w-[250px] mt-[70px]">
              <img
                className="w-[160.38px] h-[160.38px] rounded-full mb-4"
                src={profilePicture}
                alt="Profile"
              />
              <button onClick={handleChangePicture} className="bg-blue-500 text-white px-4 py-2 rounded">Change</button>
            </div>
    
            <div className="flex-1 p-4">
              <h1 className="text-[30.5px] text-center font-normal mb-4">Edit Profile</h1>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
                  <div>
                    <label htmlFor="firstName" className="block text-lg font-bold ">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-lg font-bold ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="relative">
                    <label htmlFor="email" className="block text-lg font-bold ">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {email && isMatched(email, dummyData.email) && (
                      <span className="absolute right-3 top-10 text-green-500">✔</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
                  <div>
                    <label htmlFor="hrId" className="block text-lg font-bold ">
                      HR ID
                    </label>
                    <input
                      type="text"
                      id="hrId"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500 bg-gray-200"
                      value={hrId}
                      readOnly
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-lg font-bold ">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500 bg-gray-200"
                      value={department}
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-lg font-bold ">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="contactNumber" className="block text-lg font-bold ">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                    />
                    {contactNumber && isMatched(contactNumber, dummyData.contactNumber) && (
                      <span className="absolute right-3 top-10 text-green-500">✔</span>
                    )}
                  </div>
                </div>
                <div className="relative mt-2">
                  <div>
                    <label htmlFor="password" className="block text-lg font-bold ">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="border-[2px] border-gray-400 rounded-lg w-full h-[50px] outline-none p-2 text-lg text-gray-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {password && isMatched(password, dummyData.password) && (
                      <span className="absolute right-3 top-10 text-green-500">✔</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="  text-amber-500 border-2 hover:text-amber-600 hover:border-amber-600 border-amber-500 font-bold  px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );








    }

export default Profile

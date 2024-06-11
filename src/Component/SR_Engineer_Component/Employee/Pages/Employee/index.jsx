import { Helmet, HelmetProvider } from "react-helmet-async";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Input } from "../../components";
// import Header from "../../components/Header";
// import Sidebar1 from "../../components/Sidebar1";
import React from "react";
import { Link } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';
// import Employee2 from '../../components/Employee/Employee2'
// import { Link, useNavigate } from "react-router-dom";

export default function EmployeePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  // const handleViewAllClick = () => {
  //   // Use the navigate function to navigate to the desired route
  //   navigate("/Senior_Employee/view_all");
  // };
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Employee Dashboard - Manage Your Work Efficiently</title>
          <meta
            name="description"
            content="Access your employee dashboard to manage attendance, projects, leave, and more. Connect with HR across branches for support and feedback."
          />
        </Helmet>

        {/* main content section */}
        <div className="w-full  pb-[7px]">
          <div className="flex flex-col gap-1.5">
            {/* header section */}
            {/* <Header /> */}
            <div className="flex items-start gap-8 md:flex-col">
              {/* sidebar navigation section */}
              {/* <Sidebar1 /> */}

              {/* search and content section */}
              <div className="mt-[25px] mx-[30px] ml-[55px]  flex flex-1 flex-col items-end gap-3.5 rounded-[20px] bg-[#ffffff] p-[13px] md:self-stretch md:p-5">
                <Input
                  name="Search Bar"
                  placeholder={`Search`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
                  prefix={
                    <Img
                      src="../../images/img_search.svg"
                      alt="search"
                      className="h-[24px] w-[24px] cursor-pointer"
                    />
                  }
                  suffix={
                    searchBarValue?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue("")}
                        height={24}
                        width={24}
                        fillColor="#16141bff"
                      />
                    ) : null
                  }
                  className="mt-[22px] flex h-[50px] w-[25%] items-center justify-center gap-2.5 rounded-[10px] border border-solid border-[#a2a1a819] pl-4 pr-[35px] text-base font-light text-[#16151c33] sm:pr-5"
                />
                <div className="mb-[15px] grid grid-row-2 gap-5 self-stretch md:grid-cols-2">
                  {/* branch info section */}
                  <div className="flex w-full flex-col gap-5 rounded-[10px] border border-solid border-[#a2a1a833] p-5">
                    <div>
                      <div className="flex flex-col gap-3.5">
                        <div className="flex items-center justify-between gap-5">
                          <div className="flex flex-col items-start justify-center gap-0.5">
                            <Heading as="h1">Raipur Branch</Heading>
                            <Text size="s" as="p">
                              20 Members
                            </Text>
                          </div>

                          {/* <Link to="/Senoir_Employee/view_all">
                        
                      <Text as="p" className="!text-[#7152f3]">
                        View All
                      </Text>
                      </Link> */}
                          <Link to='/Senoir_Employee/view_all' >
                            <Text as="p" className="!text-[#7152f3]">
                              View All
                            </Text>
                          </Link>
                        </div>
                        <div className="h-px bg-[#a2a1a833]" />
                      </div>
                    </div>
                    <div className="mb-[29px] flex flex-col gap-[17px]">
                      <div className="flex items-center gap-2.5">
                        <Img
                          src="../../images/img_ellipse_1192.png"
                          alt="profile image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-col items-start gap-[3px]">
                          <Text as="p" className="!text-[#16141b]">
                            Dianne Russell
                          </Text>
                          <Text size="xs" as="p">
                            Head HR
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[33%] items-center gap-2.5 md:w-full">
                        {/* Images/img_ellipse_1192_40x40.png */}
                        <Img
                          src="../../images/img_ellipse_1192_40x40.png"
                          alt="profile image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start gap-0.5 self-end">
                          <Text as="p" className="!text-[#16141b]">
                            Arlene McCoy
                          </Text>
                          <Text size="xs" as="p">
                            Executive HR
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[30%] items-center gap-2.5 md:w-full">
                        <Img
                          src="../../images/img_ellipse_1192_1.png"
                          alt="profile image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start gap-0.5 self-end">
                          <Text as="p" className="!text-[#16141b]">
                            Cody Fisher
                          </Text>
                          <Text size="xs" as="p">
                            Executive HR
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* branch info section alternate */}
                  <div className="flex w-full flex-col gap-2.5 rounded-[10px] border border-solid border-[#a2a1a833] p-5">
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex flex-col items-start justify-center">
                        <Heading as="h2">Gurgaon Branch</Heading>
                        <Text size="s" as="p">
                          14 Members
                        </Text>
                      </div>
                      <Link to="/Senoir_Employee/view_all">
                        <Text as="p" className="!text-[#7152f3]">
                          View All
                        </Text>
                      </Link>
                    </div>
                    <div className="mb-[29px] flex flex-col items-start gap-[18px]">
                      <div className="h-px w-full self-stretch bg-[#a2a1a833]" />
                      <div className="flex w-[35%] items-center gap-2.5 md:w-full">
                        <Img
                          src="../../images/img_ellipse_1192_2.png"
                          alt="profile image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start gap-[3px]">
                          <Text as="p" className="!text-[#16141b]">
                            Darrell Steward
                          </Text>
                          <Text size="xs" as="p">
                            Head HR
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[34%] items-center gap-2.5 md:w-full">
                        <Img
                          src="../../images/img_ellipse_1192_3.png"
                          alt="profile image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start gap-[3px]">
                          <Text as="p" className="!text-[#16141b]">
                            Kristin Watson
                          </Text>
                          <Text size="xs" as="p">
                            Executive HR
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[36%] items-center gap-2.5 md:w-full">
                        <Img
                          src="../../images/img_ellipse_1192_4.png"
                          alt="profile image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start self-end">
                          <Text as="p" className="!text-[#16141b]">
                            Courtney Henry
                          </Text>
                          <Text size="xs" as="p">
                            Executive HR
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full rounded-[10px] border border-solid border-[#a2a1a833] p-5">
                    <div className="mb-[22px] flex w-full flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex flex-col items-start gap-[3px]">
                          <Heading as="h3">Indore Branch</Heading>
                          <Text size="s" as="p">
                            18 Members
                          </Text>
                        </div>
                        <Link to="/Senoir_Employee/view_all">
                          <Text as="p" className="!text-[#7152f3]">
                            View All
                          </Text>
                        </Link>
                      </div>
                      <div className="flex flex-col items-start gap-5">
                        <div className="h-px w-full self-stretch bg-[#a2a1a833]" />
                        <div className="flex w-[37%] items-center gap-2.5 md:w-full">
                          <Img
                            src="../../images/img_ellipse_1192_5.png"
                            alt="image"
                            className="h-[40px] w-[40px] rounded-[20px] object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start gap-1">
                            <Text as="p" className="!text-[#16141b]">
                              Leslie Alexander
                            </Text>
                            <Text size="xs" as="p">
                              Head HR
                            </Text>
                          </div>
                        </div>
                        <div className="flex w-[37%] md:w-full">
                          <div className="flex w-full items-center gap-2.5">
                            <Img
                              src="../../images/img_ellipse_1192_6.png"
                              alt="image"
                              className="h-[40px] w-[40px] rounded-[20px] object-cover"
                            />
                            <div className="flex flex-1 flex-col items-start gap-[3px]">
                              <Text as="p" className="!text-[#16141b]">
                                Ronald Richards
                              </Text>
                              <Text size="xs" as="p">
                                Executive HR
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-[40%] items-center gap-2.5 md:w-full">
                          <Img
                            src="../../images/img_ellipse_1192.png"
                            alt="image"
                            className="h-[40px] w-[40px] rounded-[20px] object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start gap-0.5 self-end">
                            <Text as="p" className="!text-[#16141b]">
                              Savannah Nguyen
                            </Text>
                            <Text size="xs" as="p">
                              Executive HR
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start rounded-[10px] border border-solid border-[#a2a1a833] p-5">
                    <div className="flex items-center justify-between gap-5 self-stretch">
                      <div className="flex flex-col items-start justify-center gap-[3px]">
                        <Heading as="h4" className="mt-[5px]">
                          Team & Group
                        </Heading>
                        <Text size="s" as="p" className="mb-[13px]"></Text>
                      </div>
                      <Link to="/Senoir_Employee/view_all">
                        <Text as="p" className="!text-[#7152f3]">
                          View All
                        </Text>
                      </Link>
                    </div>
                    <div className="mt-2.5 h-px self-stretch bg-[#a2a1a833]" />
                    <div className="mb-[29px] mt-[21px] flex w-[40%] flex-col gap-[17px] md:w-full">
                      <div className="flex w-[80%] items-center gap-2.5 md:w-full">
                        <Img
                          src="../../images/img_ellipse_1192_7.png"
                          alt="image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start gap-[3px]">
                          <Text as="p" className="!text-[#16141b]">
                            Backend Group
                          </Text>
                          <Text size="xs" as="p">
                            Senior UI/UX designer
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Img
                          src="../../images/img_ellipse_1192_8.png"
                          alt="image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start gap-0.5 self-end">
                          <Text as="p" className="!text-[#16141b]">
                            Backend Group
                          </Text>
                          <Text size="xs" as="p">
                            Senior UI/UX designer
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[84%] items-center gap-2.5 md:w-full">
                        <Img
                          src="../../images/img_ellipse_1192_9.png"
                          alt="image"
                          className="h-[40px] w-[40px] rounded-[20px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start gap-[3px]">
                          <Text as="p" className="!text-[#16141b]">
                            Backend Group
                          </Text>
                          <Text size="xs" as="p">
                            Senior UI/UX designer
                          </Text>
                        </div>
                      </div>
                      <Link
                        to="/Senoir_Employee/create_team"
                        className="bg-[#148cfc] rounded-[20px] p-[10px] w-80 ml-[120px] mt-[30px] text-white text-center"
                      >
                        Create Team & Group
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Routes>
            <Route path="/view_all" element={<Employee2/>} />
          </Routes> */}
      </>
    </HelmetProvider>
  );
}

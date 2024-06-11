import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="322px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pt-2.5 top-0 px-2.5 md:p-5 !sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "15px 50px",
            gap: "20px",
            color: "#1c274c",
            fontWeight: 300,
            fontSize: "20px",
            [`&:hover, &.ps-active`]: {
              color: "#ffffff",
              fontWeight: "500 !important",
              backgroundColor: "#1c274c !important",
              width:"95%"
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "15px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem icon={<Img src="images/img_home_svgrepo_com.svg" alt="home icon" className="h-[25px] w-[25px]" />}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<Img src="images/img_lock.svg" alt="profile icon" className="h-[25px] w-[25px]" />}>
          Profile
        </MenuItem>
        <MenuItem icon={<Img src="images/img_person_combinat.svg" alt="employee icon" className="h-[25px] w-[25px]" />}>
          Employee
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_attendance_svgrepo_com.svg" alt="attendance icon" className="h-[25px] w-[25px]" />}
        >
          Attendance
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_task_svgrepo_com.svg" alt="projects icon" className="h-[25px] w-[25px]" />}
        >
          Projects{" "}
        </MenuItem>
        <MenuItem icon={<Img src="images/img_edit.svg" alt="leave icon" className="h-[25px] w-[25px]" />}>
          Leave{" "}
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_data_2_svgrepo_com.svg" alt="analytics icon" className="h-[25px] w-[25px]" />}
        >
          <>
            Reporting &<br />
            Analytics
          </>
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_feedback_svgrepo_com.svg" alt="feedback icon" className="h-[25px] w-[25px]" />}
        >
          <>
            Feedback &<br />
            Suggestions
          </>
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_logout_svgrepo_com.svg" alt="logout icon" className="h-[25px] w-[25px]" />}
        >
          Log out
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

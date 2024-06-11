import { Img, Text, Button, Heading } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center p-[5px] rounded-bl-[20px] rounded-br-[20px] bg-[#f8f8fb] shadow-[0_24px_48px_-8px_#274c7728]`}
    >
      <div className="mx-auto flex w-full max-w-[1361px] items-start justify-between gap-5 self-end md:flex-col">
        <Img src="images/img_header_logo.png" alt="header logo" className="h-[45px] w-[70px] object-contain" />
        <div className="flex w-[78%] items-start justify-between gap-5 md:w-full sm:flex-col">
          <div className="mt-3 flex flex-wrap items-center gap-[25px]">
            <Heading size="xs" as="h6" className="!font-['Lato'] !text-[#516f91]">
              11:13 PM
            </Heading>
            <Heading size="xs" as="h6" className="!font-['Lato'] !text-[#516f91]">
              Monday, 10 May, 2024{" "}
            </Heading>
          </div>
          <div className="flex w-[22%] items-center justify-center gap-[3px] sm:w-full">
            <a href="#">
              <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#a2a1a819] px-[13px]">
                <Img src="images/img_huge_icon_devic.svg" />
              </Button>
            </a>
            <div className="flex flex-1 items-center justify-end gap-[15px] self-start py-[5px]">
              <Text size="lg" as="p" className="mb-1 self-end !font-['Lato'] !text-[#274c77]">
                <span className="text-[#274c77]">H</span>
                <span className="text-[#274c77]">i</span>
                <span className="text-[#274c77]">&nbsp;Employee</span>
              </Text>
              <a href="#">
                <Img
                  src="images/img_ellipse_1.png"
                  alt="profile image"
                  className="h-[35px] w-[35px] rounded-[17px] object-cover"
                />
              </a>
            </div>
          </div>
        </div>
        <a href="#">
          <Img src="images/img_user.svg" alt="user icon" className="mt-[7px] h-[25px] w-[25px] md:w-full" />
        </a>
      </div>
    </header>
  );
}

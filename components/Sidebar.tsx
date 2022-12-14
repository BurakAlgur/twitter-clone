import React from "react";
import { UserIcon, DotsCircleHorizontalIcon, BellIcon, HomeIcon, HashtagIcon, CollectionIcon, BookmarkIcon, MailIcon } from '@heroicons/react/outline';
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="h-10 w-10"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
      />
      <SidebarRow Icon={HomeIcon} title={"Home"} />
      <SidebarRow Icon={HashtagIcon} title={"Explore"} />
      <SidebarRow Icon={BellIcon} title={"Notifications"} />
      <SidebarRow Icon={MailIcon} title={"Messages"} />
      <SidebarRow Icon={BookmarkIcon} title={"Bookmarks"} />
      <SidebarRow Icon={CollectionIcon} title={"Lists"} />
      <SidebarRow Icon={UserIcon} title={"Sign In"} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title={"More"} />
    </div>
  );
};

export default Sidebar;

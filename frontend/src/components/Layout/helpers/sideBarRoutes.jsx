import PhoneIcon from "../../../assets/icon/phone.svg?react";
import HotelsIcon from "../../../assets/icon/calendar.svg?react";
import AboutIcon from "../../../assets/icon/network.svg?react";

export const sideBarRoutes = [
    {label:"Home", path:"./", icon:<PhoneIcon/>},
    {label:"Hotels", path:"./hotels", icon:<HotelsIcon/>},
    {label:"About", path:"./about-us", icon:<AboutIcon/>},
]
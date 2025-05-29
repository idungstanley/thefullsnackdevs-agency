import { IoCall, IoMail } from "react-icons/io5";
import { contactInfoProp, NavItem } from "../types";

export const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];
  
export const contactInformations: contactInfoProp[] = [
  { icon: IoCall, message: 'Quick Call Us:', link: 'tel:+2349039267685', value: '+234-903926-7685' },
  {
    icon: IoMail,
    message: 'Mail Us On:',
    link: 'mailto: info@thefullsnacksdevs.com',
    value: 'info@thefullsnacksdevs.com'
  }
];
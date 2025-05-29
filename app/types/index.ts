import { CSSProperties } from "react";
import { IconType } from "react-icons";

export interface NavItem {
    label: string;
    path: string;
}
  
export interface ButtonProps {
    buttonStyle?: string;
    onClick?: () => void;
    loading?: boolean;
    label?: string | null;
    icon?: string | React.ReactNode;
    width?: string | number;
    height?: string;
    padding?: string;
    disabled?: boolean;
    iconPosition?: string;
    ringOnFocus?: boolean;
    roundedLeft?: boolean;
    roundedRight?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    loaderColor?: string;
    value?: string | number | readonly string[] | undefined;
    bgColor?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    labelSize?: string;
    customClasses?: string;
    disableClasses?: string;
    style?: CSSProperties;
    labelClasses?: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    path: string;
}
  
export interface Project {
    id: number;
    title: string;
    description: string;
    category: string[];
    image: string;
    technologies: string[];
    path: string;
}
  
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    image: string;
}
  
export interface contactInfoProp {
    icon: IconType;
    message: string;
    link: string;
    value: string;
}
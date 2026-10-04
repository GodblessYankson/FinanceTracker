import { FaChartPie } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { FaShieldAlt } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";



export const navLinks = [
    {
        id: 1,
        title: "Features",
        path: "/"
    },
    {
        id: 2,
        title: "Goal Calculator",
        path: "/"
    },
    {
        id: 3,
        title: "Testimonial",
        path: "/"
    },
    {
        id: 4,
        title: "Contact Us",
        path: "/"
    }
   
]

export const feauturesIcons = [
    {
        id: "smart",
        title: "Smart Expense Tracking",
        subtitle: "Automatically organize your spending into intuitive categories to quickly see where every dollar goes",
        icon: FaChartPie 
    },
    {
        id: "goal",
        title: "Visual Analytics",
        subtitle: "Create personal savings targets or join collaborative rotational group savings (Susu) with friends and family.",
        icon: GoGoal

    },
    {
        id: "analysis",
        title: "Smart Expense Tracking",
        subtitle: "Automatically organize your spending into intuitive categories to quickly see where every dollar goes",
        icon: IoStatsChartSharp 
    },
    {
        id: "alert",
        title: "Smart Budget Alerts",
        subtitle: "Set custom category spending limits and receive real-time notifications before you overspend.",
        icon: MdOutlineNotificationsActive 
    },
    {
        id: "bank",
        title: "Bank-Grade Security",
        subtitle: "Your financial data is protected with 256-bit encryption, strict privacy protocols, and zero data selling",
        icon: FaShieldAlt 

    },
    {
        id: "seam",
        title: "Seamless Sync",
        subtitle: "Access your balances and budget updates in real-time across desktop, tablet, or mobile phone.",
        icon: FcSmartphoneTablet
    }
]
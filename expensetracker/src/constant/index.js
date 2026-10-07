import { FaChartPie } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineNotificationsActive, MdOutlineStar } from "react-icons/md";
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

export const testimonialsTop = [
    {
        id: 1,
        title: "$50M+",
        subtitle: "Tracked Transactions"
    },
    {
        id: 2,
        title: "85,000+",
        subtitle: "Active Users"
    },
    {
        id: 3,
        title: "4.9/5",
        subtitle: "User Satisfaction Rating"
    },
    {
        id: 4,
        title: "99.9%",
        subtitle: "Uptime Security"
    },
]

export const testimonialsDown = [
    {
        id: 1,
        name: "Evans Nkuah ",
        title: "Software Engineer",
        shortTitle: "EN",
        subtitle: "FinTrack totally shifted how I view my nonthly spending. The visual breakdowns make it impossible to accidentally overspend.",
        icon: MdOutlineStar,
    },
    {
        id: 2,
        name: "Akwasi Kyei",
        title: "Entrepreneur",
        shortTitle: "AK",
        subtitle: "The group savings feature helped my team keep track of our contributions easily without endless spreadsheets. High praise!",
        icon: MdOutlineStar,
    },
    {
        id: 3,
        name: "Perpetual Emefa",
        title: "Teacher",
        shortTitle: "PE",
        subtitle: "The estimated savings feature helped me set realistic goals and stay motivated to save for my dream vacation. I love it!",
        icon: MdOutlineStar,
    },
    {
        id: 4,
        name: "Yahweh Yireh",
        title: "Prophet",
        shortTitle: "YY",
        subtitle: "FinTrack is helped me stay on track with my finances and acheive my saving goals.",
        icon: MdOutlineStar,
    }
]
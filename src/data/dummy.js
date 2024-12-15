import React from "react";
import { FiBarChart, FiCreditCard, FiShoppingBag } from "react-icons/fi";
import { BiSolidDiscount } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsBoxSeam, BsCurrencyDollar, BsShield } from "react-icons/bs";

export const barChartData = [
  [
    { x: "2022", y: 46 },
    { x: "2023", y: 27 },
    { x: "2024", y: 26 },
  ],
  [
    { x: "2022", y: 37 },
    { x: "2023", y: 23 },
    { x: "2024", y: 18 },
  ],
  [
    { x: "2022", y: 38 },
    { x: "2023", y: 17 },
    { x: "2024", y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Underweight",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x",
    yName: "y",
    name: "Normal",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x",
    yName: "y",
    name: "Obese",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "data overview",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "activity analytics",
        icon: <IoMdContacts />,
      },
      {
        name: "promotions",
        icon: <BiSolidDiscount />,
      },
    ],
  },
];

export const ecomPieChartData = [
  { x: "2018", y: 40, text: "Underweight" },
  { x: "2019", y: 10, text: "Normal" },
  { x: "2020", y: 40, text: "Overweight" },
  { x: "2021", y: 10, text: "Obese" },
];

export const genderPieChartData = [
  { x: "2024", y: 60, text: "Male" },
  { x: "2024", y: 40, text: "Female" },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const promotionsData = [
  {
    title: "Black Friday",
    date: "12th Dec",
    status: "Active",
    color: "green",
  },
  {
    title: "Christmas",
    date: "25th Dec",
    status: "Inactive",
    color: "red",
  },
  {
    title: "New Year",
    date: "1st Jan",
    status: "Active",
    color: "green",
  },
  {
    title: "Valentine's Day",
    date: "14th Feb",
    status: "Inactive",
    color: "red",
  },
];

export const pieChartData = [
  { x: "Labour", y: 18, text: "18%" },
  { x: "Legal", y: 8, text: "8%" },
  { x: "Production", y: 15, text: "15%" },
  { x: "License", y: 11, text: "11%" },
  { x: "Facilities", y: 18, text: "18%" },
  { x: "Taxes", y: 14, text: "14%" },
  { x: "Insurance", y: 16, text: "16%" },
];

export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

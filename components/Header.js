'use client';
import React from "react";
import Link from "next/link";
import { Rubik_Wet_Paint } from "next/font/google";
import styles from "./styles/header.module.scss";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const rubik_Wet_Paint = Rubik_Wet_Paint({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Головна", href: "/home" },
    { name: "Портфоліо", href: "/portfolio" },
    { name: "Галерея", href: "/gallery" },
    { name: "Про мене", href: "/about" },
    { name: "Контакти", href: "/contacts" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Закрыть меню при клике
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className={`${rubik_Wet_Paint.className} ${styles.header}`}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="header_benu_btn sm:hidden"
        />
        <NavbarBrand>
          <Link href="./home" color="foreground" className="font-bold text-inherit">LOGO</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={item.href} className="text-xl lg:text-lg">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              onClick={handleMenuItemClick} // Закрыть меню при клике на ссылку
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

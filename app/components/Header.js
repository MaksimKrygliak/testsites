"use client";
import React from "react";
import Link from "next/link";
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
import { motion, AnimatePresence } from "framer-motion";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng); // Изменение языка
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: t("page_home"), href: "/home" },
    { name: t("page_gallery"), href: "/gallery" },
    { name: t("page_events"), href: "/events" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Закрыть меню при клике
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className={styles.header}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="header_benu_btn sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="./home"
            color="foreground"
            className="font-bold text-inherit"
          >
            LOGO
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                color="foreground"
                href={item.href}
                className="text-xl lg:text-lg"
              >
                {item.name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
        <button onClick={() => changeLanguage("uk")}>Укр</button>
        <button onClick={() => changeLanguage("en")}>Eng</button>
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
        <button onClick={() => changeLanguage("uk")}>Укр</button>
        <button onClick={() => changeLanguage("en")}>Eng</button>
      </NavbarMenu>
    </Navbar>
  );
}

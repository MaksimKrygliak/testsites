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
import LanguageChanger from "../components/LanguageChanger";
import { useIntl } from "react-intl";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

async function getmenuItems() {
  const menu_item = [
    {
      uk: {
        name: "Головна",
      },
      en: {
        name: "Main",
      },
      de: {
        name: "Hauptsächlich",
      },
      href: "/home",
    },
    {
      uk: {
        name: "Галерея",
      },
      en: {
        name: "Gallery",
      },
      de: {
        name: "Galerie",
      },
      href: "/gallery",
    },
    {
      uk: {
        name: "Заходи",
      },
      en: {
        name: "Events",
      },
      de: {
        name: "Veranstaltungen",
      },
      href: "/events",
    },
  ];

  return {
    menu_item,
  };
}

export default function Header() {
  const intl = useIntl();

  const [menu_itemData, setMenu_itemData] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Получаем данные из getHeaderName при первом рендере
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getmenuItems();
      setMenu_itemData(data.menu_item);
    };
    fetchData();
  }, []);

  // Если данные еще не загружены, возвращаем null или лоадер
  if (!menu_itemData) return null;

  const locale = intl.locale;

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Закрыть меню при клике
  };

  return (
    <Navbar
      position="static"
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
            href="/home"
            color="foreground"
            className="font-bold text-inherit"
          >
            <Image
              className={styles.image}
              alt={"logo"}
              src={Logo}
              // placeholder="blur"
              quality={100}
              // fill
              // sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                width: "50px", // Задает ширину изображения на 100% ширины контейнера
                height: "50px", // Автоматическая высота для сохранения пропорций
                // objectFit: "cover", // Изображение масштабируется, не обрезаясь
                // objectFit: "contain", // Изображение масштабируется, не обрезаясь
                // objectPosition: "top",
              }}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu_itemData.map((item, index) => (
          <NavbarItem key={index}>
            <motion.div
              whileHover={{ color: "#966600" }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                color="foreground"
                href={item.href}
                className="forn_link text-xl lg:text-lg"
                style={{
                  fontFamily: "Mariupol-Regular",
                  textTransform: "uppercase",
                }}
              >
                {item[locale].name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>
      <LanguageChanger />

      <NavbarMenu className={styles.items_list}>
        {menu_itemData.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              // className="w-full"
              href={item.href}
              onClick={handleMenuItemClick} // Закрыть меню при клике на ссылку
            >
              {item[locale].name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../ui/button";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "News & Media", href: "/news-and-media" },
  { label: "Events", href: "/events" },
  { label: "Registration", href: "/registration" },
  { label: "Contact us", href: "/contact-us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVars = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.05,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`w-full bg-transparent fixed top-0 left-0 z-100 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3 "
          : "bg-transparent py-5"
      }`}
    >
      <div
        className={`relative z-110 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 xl:px-0 transition-all duration-300 `}
      >
        <Link
          href="/"
          className="relative flex items-center gap-3 cursor-pointer z-101"
        >
          {path === "/about-us" ? (
            <>
              <Image
                src={"/logo/logo-no-bg.png"}
                alt="KKOSM Logo"
                width={55}
                height={55}
              />
              <span
                className={`text-xl font-bold tracking-wide ${
                  isScrolled ? "text-yellow-dark" : "text-white"
                }`}
              >
                KKOSM
              </span>
            </>
          ) : (
            <Image
              src="/logo/logo.png"
              alt="KKOSM"
              width={120}
              height={60}
              className="w-24 md:w-auto h-auto"
            />
          )}
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-xs sm:text-sm xl:text-base font-medium hover:text-yellow-dark cursor-pointer transition-colors ${
                    path === "/events"
                      ? isScrolled
                        ? "text-yellow-dark"
                        : "text-white"
                      : "text-yellow-darkest"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact">
            <Button variant="default-sm">Donation</Button>
          </Link>
        </nav>

        <div className="relative lg:hidden z-101">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center p-2 rounded-md text-yellow-darkest focus:outline-none"
          >
            <div className="relative w-6 h-6">
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 1, rotate: 0 }}
                animate={{
                  opacity: open ? 0 : 1,
                  rotate: open ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>

              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{
                  opacity: open ? 1 : 0,
                  rotate: open ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-yellow-light flex flex-col items-center justify-center p-10 lg:hidden z-100"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-6 items-center"
            >
              {navItems.map((item) => (
                <div key={item.href} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <Link
                      href={item.href}
                      className="text-3xl font-medium text-yellow-darkest hover:text-yellow-dark"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
              <div className="overflow-hidden mt-4">
                <motion.div variants={mobileLinkVars}>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button variant="default" className="text-xl px-8 py-3">
                      Donation
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

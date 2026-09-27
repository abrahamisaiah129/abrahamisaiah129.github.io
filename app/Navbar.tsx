"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Selected Work", href: "#work" },
  { name: "Career", href: "#experience" },
  { name: "Client Work", href: "#client-work" },
  { name: "Softcity Group", href: "#softcity-projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <div className={styles.logo}>Abraham Isaiah</div>
        <button 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className={styles.navLinksDesktop}>
        {navItems.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.navLinksMobileWrapper}
          >
            <div className={styles.navLinksMobile}>
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

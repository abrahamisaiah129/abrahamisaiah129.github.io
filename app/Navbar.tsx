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
      <div className={styles.navContainer}>
        <div className={styles.logo}>Abraham Isaiah</div>
        
        {/* Desktop Links */}
        <div className={styles.navLinksDesktop}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
          <a 
            href="https://docs.google.com/document/d/1_DKqmwUCgioVAoFjv97qCMvfwW2o-qiF/export?format=pdf"
            className={styles.downloadCvBtn}
          >
            Download CV
          </a>
        </div>

        <button 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
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
              <a 
                href="https://docs.google.com/document/d/1_DKqmwUCgioVAoFjv97qCMvfwW2o-qiF/export?format=pdf"
                className={styles.downloadCvBtnMobile}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Content, Lang } from "@/content/types";
import { contactInfo } from "@/content";

export default function Header({ lang, nav }: { lang: Lang; nav: Content["nav"] }) {
  const pathname = usePathname() ?? `/${lang}`;
  const other: Lang = lang === "tr" ? "en" : "tr";
  const otherHref = `/${other}${pathname.slice(lang.length + 1)}`;
  const home = `/${lang}`;
  const isHome = pathname === home;

  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    // Above the first section nothing is "active".
    if (isHome && y < window.innerHeight * 0.6) setActive(null);
    setHidden(y > 240 && y > prev && !open);
  });

  // While the mobile menu is open it behaves as a modal: page scroll is locked, the page behind is inert,
  // Escape closes it, and it closes itself if the viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return;
    const behind = [document.getElementById("main"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => el !== null
    );
    document.body.style.overflow = "hidden";
    behind.forEach((el) => (el.inert = true));
    menuRef.current?.querySelector("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => (el.inert = false));
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const closeMenu = () => {
    // Release the scroll lock right away so the hash scroll of the clicked link is not blocked.
    document.body.style.overflow = "";
    setOpen(false);
  };

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const sections = nav.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, nav.items]);

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[70] -translate-y-20 bg-ink px-4 py-2 text-sm text-paper focus:translate-y-0"
      >
        {nav.skip}
      </a>

      <header
        onFocusCapture={() => setHidden(false)}
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !open ? "border-b border-rule bg-paper/90 backdrop-blur-md" : "border-b border-transparent"} ${
          open ? "text-fog" : "text-ink"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-6 px-4 sm:px-8">
          <Link
            href={home}
            className="relative z-10 text-[0.95rem] font-semibold tracking-tight"
            onClick={closeMenu}
          >
            Serkan Acar
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {nav.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={`${home}#${item.id}`}
                  className={`relative text-sm transition-colors hover:text-ink ${
                    active === item.id ? "text-ink" : "text-ink-2"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-5">
            <Link
              href={otherHref}
              hrefLang={other}
              lang={other}
              title={nav.switchTo}
              className="mono uppercase opacity-70 transition-opacity hover:opacity-100"
            >
              {other}
            </Link>
            <a
              href={contactInfo.cv}
              download
              className={`hidden rounded-full border border-current px-4 py-1.5 text-sm transition-colors sm:inline-block ${
                open ? "" : "hover:bg-ink hover:text-paper"
              }`}
            >
              {nav.cv} ↓
            </a>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="text-sm lg:hidden"
            >
              {open ? nav.close : nav.menu}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={nav.menu}
            className="fixed inset-0 z-40 flex flex-col bg-night px-4 pt-24 pb-8 text-fog sm:px-8 lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {nav.items.map((item, i) => (
                <li key={item.id} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={`${home}#${item.id}`}
                      onClick={closeMenu}
                      className="display block py-1 text-[clamp(2.4rem,11vw,4.5rem)]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-fog-rule pt-5 text-sm text-fog-2">
              <a href={`mailto:${contactInfo.email}`} className="truncate">
                {contactInfo.email}
              </a>
              <a href={contactInfo.cv} download className="shrink-0 text-fog">
                {nav.cv} ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

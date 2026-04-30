"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ArrowUpRightSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

type Project = {
  company: string;
  title: string;
  slug: string;
};

type Contact = {
  label: string;
  description: string;
  href: string;
  svg: React.ReactNode;
};

const projects: Project[] = [
  { company: "MNET PLUS",       title: "홈 배너 카피라이팅 & 다국어 콘텐츠",  slug: "mnet-plus-banner" },
  { company: "MNET PLUS JAPAN", title: "일본 SNS 현지화 운영",                slug: "mnet-plus-japan" },
  { company: "CJ ENM YOUTUBE",  title: "유튜브 채널 SEO & 메타데이터 전략",   slug: "cjenm-youtube" },
  { company: "ESPORTS SCORE",   title: "이스포츠 생방송 메인 작가",            slug: "esports-score" },
  { company: "SMILEGATE",       title: "AGF 2025 부스 프로그램 작가",          slug: "agf-2025" },
  { company: "SOOP",            title: "2024 PlayX4 행사 프로그램 작가",       slug: "playx4-2024" },
  { company: "LOGIN MEDIA",     title: "이스포츠 방송 콘텐츠 작가",            slug: "loginmedia" },
  { company: "HUBIN COMMERCE",  title: "바이럴 마케팅 & 퍼포먼스 기획",       slug: "hubincommerce" },
];

const instagramSvg = (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const youtubeSvg = (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const emailSvg = (
  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="16" height="12" rx="2" />
    <path d="M2 7l8 5 8-5" />
  </svg>
);

const contacts: Contact[] = [
  { label: "Instagram", description: "@taku.mp3",          href: "https://www.instagram.com/taku.mp3",  svg: instagramSvg },
  { label: "YouTube",   description: "youtube.com/@TAKUmp3", href: "https://www.youtube.com/@TAKUmp3",   svg: youtubeSvg   },
  { label: "Instagram", description: "@taku.gif",          href: "https://www.instagram.com/taku.gif",  svg: instagramSvg },
  { label: "Email",     description: "whristheluv@gmail.com", href: "mailto:whristheluv@gmail.com",      svg: emailSvg     },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const glassStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.07)",
  border: "0.5px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
};

const cardStyle: React.CSSProperties = {
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
};

const profilePanelStyle: React.CSSProperties = {
  background: "rgba(10, 10, 18, 0.6)",
  border: "0.5px solid rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
};

const socialCardBase: React.CSSProperties = {
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
};

const cardHoverOn: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.14)",
  border: "0.5px solid rgba(255, 255, 255, 0.2)",
  transform: "translateY(-2px)",
};
const cardHoverOff: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.09)",
  border: "0.5px solid rgba(255, 255, 255, 0.13)",
  transform: "translateY(0)",
};
const cardTransition = "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const hover = hovered ? cardHoverOn : cardHoverOff;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group flex items-center justify-between"
        style={{ ...cardStyle, ...hover, borderRadius: "1rem", padding: "1.25rem 1.5rem", transition: cardTransition }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="space-y-1">
          <p className="font-semibold uppercase" style={{ fontSize: "0.78rem", letterSpacing: "0.25em", color: "#a89ff0" }}>
            {project.company}
          </p>
          <p style={{ fontSize: "1.05rem", color: "#ffffff", fontWeight: 600 }}>
            {project.title}
          </p>
        </div>
        <ArrowUpRightSvg className="h-4 w-4 shrink-0 text-lv1 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}

function SocialCard({ contact }: { contact: Contact }) {
  const [hovered, setHovered] = useState(false);
  const hover = hovered ? cardHoverOn : cardHoverOff;
  return (
    <motion.a
      variants={itemVariants}
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex items-center gap-3"
      style={{ ...socialCardBase, ...hover, borderRadius: "1.2rem", padding: "22px 20px", minHeight: "96px", transition: cardTransition }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="flex items-center justify-center rounded-full border border-border bg-card shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        style={{ color: "#A89FF0", width: "50px", height: "50px", flexShrink: 0 }}
      >
        {contact.svg}
      </span>
      <div className="min-w-0 flex-1 pr-5">
        <p style={{ color: "#ffffff", fontWeight: 650, fontSize: "1.24rem" }}>{contact.label}</p>
        <p className="truncate" style={{ color: "#a89ff0", fontSize: "0.82rem", marginTop: "4px" }}>{contact.description}</p>
      </div>
      <ArrowUpRightSvg className="absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-lv1 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-[calc(50%+2px)] group-hover:opacity-100" />
    </motion.a>
  );
}

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24 px-6">
      <div className="mx-auto w-full max-w-[1260px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-auto overflow-hidden rounded-3xl p-8 md:p-12 lg:h-[calc(100vh-12rem)] lg:px-[4.5rem] lg:py-16"
          style={{ ...glassStyle, minHeight: "520px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

          <div
            className="relative grid lg:grid-cols-2"
            style={{ gap: "3.5rem", alignItems: "stretch", height: "100%", minHeight: 0 }}
          >

            {/* Left column — stretches to row height, scroll area fills the rest */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.25rem",
                minHeight: 0,
              }}
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="tracking-tight text-white"
                  style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.15 }}
                >
                  LEE AN · Portfolio
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-medium tracking-wide text-lv3"
                  style={{ fontSize: "1rem", marginBottom: "2rem" }}
                >
                  Copywriting · SNS Operations · Content Marketing
                </motion.p>
              </div>

              {/* Scrollable project list — fills remaining 1fr height */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col pr-3"
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "scroll",
                  gap: "14px",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(168, 159, 240, 0.4) transparent",
                }}
              >
                {projects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </motion.div>
            </div>

            {/* Right column — fills same row height via stretch */}
            <div style={{ minHeight: 0 }}>
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl pointer-events-none" />
              <div
                className="relative flex flex-col items-center justify-center overflow-hidden"
                style={{ ...profilePanelStyle, height: "100%", borderRadius: "1.75rem", padding: "3rem 2.5rem" }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl" style={{ width: "148px", height: "148px" }} />
                    <Image
                      src="/profile_3.png"
                      alt="이안 (LEE AN)"
                      width={138}
                      height={140}
                      priority
                      className="relative rounded-full border border-border object-cover shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-5"
                  >
                    <h2 className="tracking-tight" style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.6rem" }}>
                      이안 <span style={{ color: "#ffffff" }}>(LEE AN)</span>
                    </h2>
                    <p className="uppercase" style={{ color: "#c4beff", fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.14em" }}>
                      Content Marketer · Copywriter · Creator
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-sm text-center"
                    style={{ color: "#dcdaf5", fontWeight: 400, fontSize: "0.95rem", lineHeight: 2, margin: "1.5rem 0 2.25rem" }}
                  >
                    K-POP 플랫폼 카피라이팅부터 이스포츠 행사 대본,
                    <br />
                    음악 큐레이션 채널 운영까지 — 콘텐츠가 기획되고
                    <br />
                    세상에 나오는 모든 과정을 직접 경험해온
                    <br />
                    콘텐츠 마케터 이안입니다.
                  </motion.p>
                </div>

                {/* Contact & social list */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="grid w-full grid-cols-2"
                  style={{ gap: "14px", maxWidth: "640px", marginTop: "2.75rem" }}
                >
                  {contacts.map((contact) => (
                    <SocialCard key={contact.href} contact={contact} />
                  ))}
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

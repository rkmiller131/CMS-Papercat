import React from "react"
import { Text, Repeater, types } from "react-bricks/frontend"

import styles from "../../../css/Footer.module.css"

interface FooterProps {}

const Footer: types.Brick<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSectionTitle}>
        <Text
          propName="title"
          placeholder=""
          renderBlock={({ children }) => (
            <h3 className={styles.footerTitle}>{children}</h3>
          )}
        />
        <Text
          propName="copyright"
          placeholder=""
          renderBlock={({ children }) => (
            <span>{children}</span>
          )}
        />
      </section>
      <Repeater propName="columns" />
    </footer>
  )
}

Footer.schema = {
  name: "footer",
  label: "Footer",
  category: "layout",
  tags: ["footer"],
  repeaterItems: [
    {
      name: "columns",
      itemType: "footer-column",
      max: 4,
    },
  ],
  getDefaultProps: () => ({
    title: "Paper Cat Games",
    copyright: "©2023 CA, USA",
    columns: [
      {
        title: "Company",
        links: [
          {
            linkText: "About us",
            linkPath: "/",
          },
          {
            linkText: "Why React Bricks?",
            linkPath: "/",
          },
          {
            linkText: "Terms of service",
            linkPath: "/",
          },
          {
            linkText: "Privacy",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Features",
        links: [
          {
            linkText: "Visual editing",
            linkPath: "/",
          },
          {
            linkText: "React components",
            linkPath: "/",
          },
          {
            linkText: "Enterprise-ready",
            linkPath: "/",
          },
          {
            linkText: "Roadmap",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Use cases",
        links: [
          {
            linkText: "Content editors",
            linkPath: "/",
          },
          {
            linkText: "Developers",
            linkPath: "/",
          },
          {
            linkText: "Enterprises",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Learn",
        links: [
          {
            linkText: "Tutorial",
            linkPath: "/",
          },
          {
            linkText: "Documentation",
            linkPath: "/",
          },
          {
            linkText: "Videos",
            linkPath: "/",
          },
          {
            linkText: "Blog",
            linkPath: "/",
          },
        ],
      },
    ],
  }),
  sideEditProps: [],
}

export default Footer
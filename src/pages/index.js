import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `accessibility`]}
    />
    <h1>Welcome!</h1>
    <p>This starter has the following accessibility features enabled:</p>
    <ul>
      <li>
        <span role="img" aria-label="magnifying glass">
          🔍
        </span>
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">
          eslint-plugin-jsx-a11y
        </a>{" "}
        to catch potential accessibility issues while authoring code.
      </li>
      <li>
        <span role="img" aria-label="checkbox">
          ✅
        </span>
        <a href="https://github.com/okonet/lint-staged">lint-staged</a>{" "}
        configuration so that any linting error, including accessibility issues,
        are caught in a pre-commit hook.
      </li>
      <li>
        <span role="img" aria-label="megaphone">
          📣
        </span>
        <a href="https://github.com/angeloashmore/gatsby-plugin-react-axe">
          gatsby-plugin-react-axe
        </a>{" "}
        for in-console reporting of accessibility errors in the DOM.
      </li>
      <li>
        <span role="img" aria-label="book">
          📖
        </span>
        A <a href="/storybook">Storybook</a> with accessibility testing and
        color blindness simulation tools built in.
      </li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

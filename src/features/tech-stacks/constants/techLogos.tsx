import AntDLogo from "@/assets/ant-design.svg?url&no-inline"
import AxiosLogo from "@/assets/axios.svg?url&no-inline"
import BitbucketLogo from "@/assets/bitbucket.svg?url&no-inline"
import CSS3Logo from "@/assets/css3.svg?url&no-inline"
import CypressLogo from "@/assets/cypress.svg?url&no-inline"
import DockerLogo from "@/assets/docker.svg?url&no-inline"
import FastifyLogo from "@/assets/fastify.svg?url&no-inline"
import GitLogo from "@/assets/git.svg?url&no-inline"
import GithubLogo from "@/assets/github.svg?url&no-inline"
import HTMLLogo from "@/assets/html5.svg?url&no-inline"
import JestLogo from "@/assets/jest.svg?url&no-inline"
import JiraLogo from "@/assets/jira.svg?url&no-inline"
import MUILogo from "@/assets/material-ui.svg?url&no-inline"
import MobxLogo from "@/assets/mobx.svg?url&no-inline"
import MongoDBLogo from "@/assets/mongodb.svg?url&no-inline"
import MySQLLogo from "@/assets/mysql.svg?url&no-inline"
import NextJSLogo from "@/assets/nextjs.svg?url&no-inline"
import NodeJSLogo from "@/assets/nodejs.svg?url&no-inline"
import PostgreSQLLogo from "@/assets/postgre.svg?url&no-inline"
import PrismaLogo from "@/assets/prisma.svg?url&no-inline"
import ReactLogo from "@/assets/react-logo.svg?url&no-inline"
import ReactQueryLogo from "@/assets/react-query.svg?url&no-inline"
import RedisLogo from "@/assets/redis.svg?url&no-inline"
import ReduxLogo from "@/assets/redux.svg?url&no-inline"
import RenderLogo from "@/assets/render.svg?url&no-inline"
import ShadCNLogo from "@/assets/shadcn-ui.svg?url&no-inline"
import StorybookLogo from "@/assets/storybook.svg?url&no-inline"
import SupabaseLogo from "@/assets/supabase.svg?url&no-inline"
import TailwindCSSLogo from "@/assets/tailwindcss.svg?url&no-inline"
import TSLogo from "@/assets/ts-logo-512.svg?url&no-inline"
import VercelLogo from "@/assets/vercel.svg?url&no-inline"
import ViteLogo from "@/assets/vite.svg?url&no-inline"
import ZustandLogo from "@/assets/zustand.svg?url&no-inline"

const logo = (src: string) => <img src={src} alt="" loading="lazy" />

export const getTechLogos = () => [
  { node: logo(ReactLogo), title: "React", href: "https://react.dev" },

  { node: logo(NextJSLogo), title: "NextJS", href: "https://nextjs.org/" },
  {
    node: logo(TSLogo),
    title: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    node: logo(MobxLogo),
    title: "MobX",
    href: "https://mobx.js.org/README.html",
  },
  {
    node: logo(ReduxLogo),
    title: "Redux",
    href: "https://redux.js.org/",
  },
  {
    node: logo(ReactQueryLogo),
    title: "Tanstack Query",
    href: "https://tanstack.com/query/latest",
  },
  {
    node: logo(AxiosLogo),
    title: "Axios",
    href: "https://axios-http.com/",
  },
  {
    node: logo(ViteLogo),
    title: "Vite",
    href: "https://vitejs.dev/",
  },
  {
    node: logo(JestLogo),
    title: "Jest",
    href: "https://jestjs.io/",
  },
  {
    node: logo(CypressLogo),
    title: "Cypress",
    href: "https://www.cypress.io/",
  },
  {
    node: logo(MUILogo),
    title: "MUI",
    href: "https://mui.com/",
  },
  {
    node: logo(AntDLogo),
    title: "AntD",
    href: "https://ant.design/",
  },
  {
    node: logo(ShadCNLogo),
    title: "ShadcnUI",
    href: "https://ui.shadcn.com/",
  },
  {
    node: logo(HTMLLogo),
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: logo(CSS3Logo),
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: logo(StorybookLogo),
    title: "Storybook",
    href: "https://storybook.js.org/",
  },
  {
    node: logo(TailwindCSSLogo),
    title: "TailwindCSS",
    href: "https://tailwindcss.com/",
  },
  {
    node: logo(GitLogo),
    title: "Git",
    href: "https://git-scm.com/",
  },
  {
    node: logo(GithubLogo),
    title: "Github",
    href: "https://github.com/",
  },
  {
    node: logo(BitbucketLogo),
    title: "Bitbucket",
    href: "https://bitbucket.org/",
  },
  {
    node: logo(JiraLogo),
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
  },
  {
    node: logo(NodeJSLogo),
    title: "NodeJS",
    href: "https://nodejs.org/",
  },
  {
    node: logo(FastifyLogo),
    title: "Fastify",
    href: "https://www.fastify.io/",
  },
  {
    node: logo(SupabaseLogo),
    title: "Supabase",
    href: "https://supabase.com/",
  },
  {
    node: logo(ZustandLogo),
    title: "Zustand",
    href: "https://zustand-demo.pmnd.rs/",
  },
  {
    node: logo(PrismaLogo),
    title: "Prisma",
    href: "https://www.prisma.io/",
  },
  {
    node: logo(VercelLogo),
    title: "Vercel",
    href: "https://vercel.com/",
  },
  {
    node: logo(RenderLogo),
    title: "Render",
    href: "https://render.com/",
  },
  { node: logo(RedisLogo), title: "Redis", href: "https://redis.io/" },
  { node: logo(DockerLogo), title: "Docker", href: "https://www.docker.com/" },
  {
    node: logo(MongoDBLogo),
    title: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  { node: logo(MySQLLogo), title: "MySQL", href: "https://www.mysql.com/" },
  {
    node: logo(PostgreSQLLogo),
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
]

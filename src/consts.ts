import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Robosoc",
  DESCRIPTION: "Robosoc",
  AUTHOR: "Robosoc",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Committee Page
export const COMMITTEE: Page = {
  TITLE: "Our Committee",
  DESCRIPTION: "The people running everything behind the scenes!",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Committee", 
    HREF: "/committee", 
  },
  {
    TEXT: "About",
    HREF: "/about",
  },
  {
    TEXT: "Join",
    HREF: "/join",
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "uom.robosoc@gmail.com",
    HREF: "mailto:uom.robosoc@gmail.com",
  },
  { 
    NAME: "Linktree",
    ICON: "linktree",
    TEXT: "Linktree",
    HREF: "https://linktr.ee/uom_robosoc",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Robosoc (University of Manchester Robotics Society)",
    HREF: "https://www.linkedin.com/company/90770697/admin/dashboard/",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "@uom_robosoc",
    HREF: "https://www.instagram.com/uom_robosoc/",
  },
]


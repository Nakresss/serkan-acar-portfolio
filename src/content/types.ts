export type Lang = "tr" | "en";

export interface Photo {
  src: string;
  alt: string;
  /** Short caption shown under the photo. */
  caption?: string;
}

export interface Fact {
  value: string;
  label: string;
}

export interface NowItem {
  since: string;
  title: string;
  place: string;
  text: string;
}

export interface ExperienceItem {
  start: string;
  end: string;
  current?: boolean;
  role: string;
  org: string;
  note?: string;
  bullets: string[];
}

export interface DetailSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Competition / context line, e.g. "TEKNOFEST 2024". */
  meta: string;
  year: string;
  result?: string;
  summary: string;
  role: string;
  stack: string[];
  cover?: Photo;
  sections: DetailSection[];
  gallery?: Photo[];
}

export interface FeaturedTask {
  title: string;
  text: string;
  tools: string;
}

export interface Story {
  kicker: string;
  title: string;
  text: string[];
  photo: Photo;
  secondary?: Photo;
}

export interface Repo {
  name: string;
  summary: string;
  stack: string;
  year: string;
  url?: string;
  live?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  program: string;
  school: string;
  detail?: string;
  current?: boolean;
}

export interface CertGroup {
  issuer: string;
  /** `href` links to the certificate file under /public. */
  items: { name: string; year?: string; href?: string }[];
}

export interface Award {
  year: string;
  title: string;
  result: string;
}

export interface Content {
  meta: { title: string; description: string; ogRole: string; ogField: string };
  nav: {
    items: { id: string; label: string }[];
    cv: string;
    menu: string;
    close: string;
    switchTo: string;
    skip: string;
  };
  hero: {
    role: string;
    location: string;
    intro: string[];
    ctaMail: string;
    ctaCv: string;
    photo: Photo;
    facts: Fact[];
  };
  now: { title: string; updated: string; items: NowItem[] };
  featured: {
    label: string;
    slug: string;
    title: string;
    result: string;
    meta: string;
    intro: string;
    tasksTitle: string;
    tasks: FeaturedTask[];
    metricsTitle: string;
    metrics: Fact[];
    more: string;
  };
  projects: {
    title: string;
    intro: string;
    items: Project[];
    open: string;
  };
  experience: { title: string; present: string; items: ExperienceItem[] };
  field: { title: string; intro: string; stories: Story[] };
  software: {
    title: string;
    intro: string;
    repos: Repo[];
    privateLabel: string;
    liveLabel: string;
    sourceLabel: string;
    notebooks: string;
    all: string;
  };
  skills: { title: string; groups: SkillGroup[] };
  education: {
    title: string;
    items: EducationItem[];
  };
  certificates: {
    title: string;
    intro: string;
    /** Marker shown next to items that link to a certificate file. */
    file: string;
    groups: CertGroup[];
  };
  awards: {
    title: string;
    items: Award[];
    leadershipTitle: string;
    leadership: { title: string; text: string }[];
    interestsTitle: string;
    interests: string;
  };
  contact: {
    title: string;
    lead: string;
    email: string;
    phone: string;
    location: string;
    copy: string;
    copied: string;
    cv: string;
  };
  projectPage: {
    back: string;
    role: string;
    stack: string;
    year: string;
    result: string;
    next: string;
    photos: string;
  };
  footer: { updated: string; top: string; built: string };
  notFound: { title: string; text: string; home: string };
}

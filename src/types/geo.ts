export interface GeoEntityFact {
  label: string;
  value: string;
}

export interface GeoProjectOneLiner {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
}

export interface GeoData {
  fullName: string;
  role: string;
  positioningSentence: string;
  oneLineBio: string;
  bio50Words: string;
  bio150Words: string;
  jobTitles: string[];
  servicesList: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    databases: string[];
    ai: string[];
    integrations: string[];
    tools: string[];
  };
  industriesServed: string[];
  projectOneLiners: GeoProjectOneLiner[];
  location: string;
  availability: string;
  contactEmail: string;
  sameAsUrls: string[];
  keyFacts: GeoEntityFact[];
  lastUpdated: string;
}

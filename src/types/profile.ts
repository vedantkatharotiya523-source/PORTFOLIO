export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  positioningLine: string;
  shortBio: string;
  email: string;
  city: string;
  country: string;
  availability: string;
  experienceYears: number;
  github: string;
  linkedin: string;
  resumeUrl: string;
  socials: SocialLink[];
}

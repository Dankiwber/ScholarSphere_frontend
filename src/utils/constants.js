// 应用常量定义

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
  },
  PROFILES: {
    BASE: "/profiles",
    PUBLICATIONS: "/publications",
    EXPERIENCE: "/experience",
  },
  SEARCH: {
    SCHOLARS: "/search/scholars",
    RECOMMENDATIONS: "/search/recommendations",
    SUGGESTIONS: "/search/suggestions",
  },
  JOBS: {
    BASE: "/jobs",
    APPLICATIONS: "/applications",
    CATEGORIES: "/categories",
  },
  NETWORK: {
    CONNECTIONS: "/connections",
    INVITATIONS: "/invitations",
    STATS: "/stats",
    SUGGESTIONS: "/suggestions",
  },
};

export const USER_ROLES = {
  STUDENT: "student",
  POSTDOC: "postdoc",
  PROFESSOR: "professor",
  RESEARCHER: "researcher",
};

export const JOB_TYPES = {
  PHD: "PhD Position",
  POSTDOC: "Postdoc",
  FACULTY: "Faculty",
  RESEARCH: "Research Position",
};

export const RESEARCH_AREAS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Robotics",
  "Data Science",
  "Human-Computer Interaction",
  "Computer Graphics",
  "Computer Networks",
  "Cybersecurity",
  "Software Engineering",
  "Database Systems",
  "Algorithms",
  "Theoretical Computer Science",
];

export const INSTITUTIONS = [
  "University of Alberta",
  "Tsinghua University",
  "MIT",
  "Stanford University",
  "Carnegie Mellon University",
  "UC Berkeley",
  "University of Washington",
  "Harvard University",
  "Oxford University",
  "Cambridge University",
];

export const PUBLICATION_VENUES = [
  "NeurIPS",
  "ICML",
  "ICLR",
  "AAAI",
  "IJCAI",
  "ACL",
  "EMNLP",
  "NAACL",
  "CVPR",
  "ICCV",
  "ECCV",
  "Nature",
  "Science",
  "IEEE Transactions",
  "ACM Transactions",
];

export const NETWORK_STATUS = {
  CONNECTED: "connected",
  PENDING: "pending",
  NOT_CONNECTED: "not_connected",
};

export const APPLICATION_STATUS = {
  PENDING: "pending",
  REVIEWED: "reviewed",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/gif", "application/pdf"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".gif", ".pdf"],
};

export const NOTIFICATION_TYPES = {
  CONNECTION_REQUEST: "connection_request",
  CONNECTION_ACCEPTED: "connection_accepted",
  JOB_APPLICATION: "job_application",
  PUBLICATION_MENTION: "publication_mention",
  SYSTEM_UPDATE: "system_update",
};

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

export const LANGUAGES = {
  EN: "en",
  ZH: "zh",
  FR: "fr",
  DE: "de",
  ES: "es",
};

export const DATE_FORMATS = {
  SHORT: "MMM DD, YYYY",
  LONG: "MMMM DD, YYYY",
  ISO: "YYYY-MM-DD",
};

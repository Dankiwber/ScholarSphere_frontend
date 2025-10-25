/**
 * Unified Mock Data for ScholarSphere
 *
 * This file contains all mock data used throughout the application.
 * It provides a centralized data source for users, jobs, publications, and network data.
 * All data includes slug-based routing support for better URL structure.
 */

/**
 * Generate a URL-friendly slug from a name
 * @param {string} name - The name to convert to slug
 * @returns {string} URL-friendly slug
 */
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
};

/**
 * Generate a unique identifier for users
 * @returns {string} Random unique identifier
 */
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Users data with slug support
export const users = [
  {
    id: 1,
    slug: "lei-wang-275b40262",
    username: "lei_wang",
    email: "lei.wang@ualberta.ca",
    password: "password123",
    profile: {
      name: "Lei Wang",
      title: "Professor",
      studyField: "Reinforcement Learning",
      organization: "University of Alberta",
      location: "Edmonton, Canada",
      avatar: "https://placehold.co/256x256/e0e7ff/4338ca?text=LW",
      bio: "Professor Lei Wang is a tenured professor in the Department of Computing Science at the University of Alberta and a Fellow at Amii (Alberta Machine Intelligence Institute). His research focuses on the intersection of reinforcement learning, robotics, and artificial intelligence.",
      skills: [
        "Python",
        "PyTorch",
        "Reinforcement Learning",
        "Robotics",
        "Machine Learning",
      ],
      publications: [1, 2, 9, 10], // References to publication IDs
      education: [
        {
          degree: "PhD in Computer Science",
          institution: "Stanford University",
          year: "2010-2015",
          status: "Completed",
        },
      ],
      experience: [
        {
          position: "Professor",
          company: "University of Alberta",
          duration: "2018-Present",
          description:
            "Advising PhD and MSc students on cutting-edge reinforcement learning research.",
        },
        {
          position: "Postdoctoral Researcher",
          company: "Stanford AI Lab",
          duration: "2016-2018",
          description:
            "Focused on deep reinforcement learning algorithms for robotic manipulation.",
        },
      ],
    },
    connections: 156,
    followers: 2341,
    following: 89,
  },
  {
    id: 2,
    slug: "jing-li-8a7c9d2e1",
    username: "jing_li",
    email: "jing.li@tsinghua.edu.cn",
    password: "password123",
    profile: {
      name: "Jing Li",
      title: "Assistant Professor",
      studyField: "Natural Language Processing",
      organization: "Tsinghua University",
      location: "Beijing, China",
      avatar: "https://placehold.co/256x256/dbeafe/1e3a8a?text=JL",
      bio: "Dr. Jing Li is an Assistant Professor at Tsinghua University. Her research lies in the field of Natural Language Processing (NLP), with a special focus on large language models, machine translation, and text summarization.",
      skills: [
        "Python",
        "TensorFlow",
        "Natural Language Processing",
        "Machine Learning",
        "Deep Learning",
      ],
      publications: [3, 4],
      education: [
        {
          degree: "PhD in Computer Science",
          institution: "Carnegie Mellon University",
          year: "2015-2019",
          status: "Completed",
        },
      ],
      experience: [
        {
          position: "Assistant Professor",
          company: "Tsinghua University",
          duration: "2021-Present",
          description: "Teaching and research in natural language processing.",
        },
        {
          position: "Postdoctoral Researcher",
          company: "Carnegie Mellon University",
          duration: "2019-2021",
          description:
            "Research in large language models and machine translation.",
        },
      ],
    },
    connections: 89,
    followers: 1234,
    following: 67,
  },
  {
    id: 3,
    slug: "wei-zhang-3f5g8h9i2",
    username: "wei_zhang",
    email: "wei.zhang@mit.edu",
    password: "password123",
    profile: {
      name: "Wei Zhang",
      title: "Postdoctoral Researcher",
      studyField: "Computer Vision",
      organization: "MIT",
      location: "Cambridge, MA, USA",
      avatar: "https://placehold.co/256x256/fee2e2/991b1b?text=WZ",
      bio: "Dr. Wei Zhang is a Postdoctoral Researcher at MIT, focusing on computer vision and deep learning. His research interests include object detection, image segmentation, and visual understanding.",
      skills: [
        "Python",
        "PyTorch",
        "Computer Vision",
        "Deep Learning",
        "OpenCV",
      ],
      publications: [5],
      education: [
        {
          degree: "PhD in Computer Science",
          institution: "Stanford University",
          year: "2016-2020",
          status: "Completed",
        },
      ],
      experience: [
        {
          position: "Postdoctoral Researcher",
          company: "MIT",
          duration: "2020-Present",
          description: "Research in computer vision and deep learning.",
        },
      ],
    },
    connections: 45,
    followers: 567,
    following: 23,
  },
  {
    id: 4,
    slug: "sam-chen-7k2m9n4p5",
    username: "sam_chen",
    email: "sam.chen@stanford.edu",
    password: "password123",
    profile: {
      name: "Sam Chen",
      title: "PhD Candidate",
      studyField: "Human-Computer Interaction",
      organization: "Stanford University",
      location: "Stanford, CA, USA",
      avatar: "https://placehold.co/256x256/d1fae5/065f46?text=SC",
      bio: "Sam Chen is a PhD candidate at Stanford University, working on human-computer interaction and user experience design. His research focuses on making technology more accessible and intuitive.",
      skills: [
        "JavaScript",
        "React",
        "User Research",
        "Human-Computer Interaction",
        "Design",
      ],
      publications: [6],
      education: [
        {
          degree: "PhD in Computer Science",
          institution: "Stanford University",
          year: "2021-Present",
          status: "In Progress",
        },
      ],
      experience: [
        {
          position: "PhD Candidate",
          company: "Stanford University",
          duration: "2021-Present",
          description:
            "Research in human-computer interaction and accessibility.",
        },
      ],
    },
    connections: 23,
    followers: 89,
    following: 45,
  },
  {
    id: 5,
    slug: "yejin-choi-6q8w3e1r7",
    username: "yejin_choi",
    email: "yejin@uw.edu",
    password: "password123",
    profile: {
      name: "Yejin Choi",
      title: "Professor",
      studyField: "Natural Language Processing",
      organization: "University of Washington",
      location: "Seattle, WA, USA",
      avatar: "https://placehold.co/256x256/fefce8/854d0e?text=YC",
      bio: "Professor Yejin Choi is a leading researcher in natural language processing and computational linguistics. Her work focuses on understanding and generating human language with AI systems.",
      skills: [
        "Python",
        "TensorFlow",
        "Natural Language Processing",
        "Machine Learning",
        "Linguistics",
      ],
      publications: [7],
      education: [
        {
          degree: "PhD in Computer Science",
          institution: "Cornell University",
          year: "2010-2015",
          status: "Completed",
        },
      ],
      experience: [
        {
          position: "Professor",
          company: "University of Washington",
          duration: "2019-Present",
          description: "Teaching and research in natural language processing.",
        },
      ],
    },
    connections: 234,
    followers: 4567,
    following: 123,
  },
  {
    id: 6,
    slug: "david-patterson-9t5y7u2i4",
    username: "david_patterson",
    email: "patterson@berkeley.edu",
    password: "password123",
    profile: {
      name: "David Patterson",
      title: "Professor",
      studyField: "Computer Architecture",
      organization: "UC Berkeley",
      location: "Berkeley, CA, USA",
      avatar: "https://placehold.co/256x256/ecfdf5/047857?text=DP",
      bio: "Professor David Patterson is a renowned computer scientist and Turing Award winner. His research focuses on computer architecture, parallel computing, and RISC processors.",
      skills: [
        "C++",
        "Assembly",
        "Computer Architecture",
        "Parallel Computing",
        "RISC",
      ],
      publications: [8],
      education: [
        {
          degree: "PhD in Computer Science",
          institution: "UCLA",
          year: "1976",
          status: "Completed",
        },
      ],
      experience: [
        {
          position: "Professor",
          company: "UC Berkeley",
          duration: "1976-Present",
          description: "Teaching and research in computer architecture.",
        },
      ],
    },
    connections: 456,
    followers: 7890,
    following: 234,
  },
];

// Jobs data
export const jobs = [
  {
    id: 1,
    title: "PhD Student - Reinforcement Learning",
    organization: "University of Alberta - Prof. Lei Wang's Lab",
    location: "Edmonton, AB, Canada",
    remoteAvailable: true,
    type: "PhD Position",
    tags: ["Reinforcement Learning", "Machine Learning", "Robotics"],
    description:
      "We are seeking a highly motivated PhD student to join our research group focusing on reinforcement learning algorithms for robotic manipulation. The successful candidate will work on cutting-edge research in deep reinforcement learning and its applications to robotics.",
    requirements: [
      "Master's degree in Computer Science, Engineering, or related field",
      "Strong background in machine learning and reinforcement learning",
      "Experience with Python, PyTorch, and robotics frameworks",
      "Excellent written and verbal communication skills",
      "Publications in top-tier conferences preferred",
    ],
    salary: "CAD $25,000 - $30,000 per year",
    startDate: "Fall 2024",
    applicationDeadline: "2024-03-15",
    postedDate: "2024-01-15",
    applicationsCount: 23,
    isActive: true,
    contactEmail: "lei.wang@ualberta.ca",
    website: "https://www.ualberta.ca",
    postedBy: 1,
  },
  {
    id: 2,
    title: "Postdoctoral Fellow - Robotics",
    organization: "Stanford AI Lab",
    location: "Stanford, CA, USA",
    remoteAvailable: false,
    type: "Postdoc",
    tags: ["Robotics", "Computer Vision", "Deep Learning"],
    description:
      "The Stanford AI Lab is seeking a postdoctoral fellow to work on advanced robotics research. The position involves developing novel algorithms for robotic manipulation, computer vision, and human-robot interaction.",
    requirements: [
      "PhD in Computer Science, Robotics, or related field",
      "Strong publication record in top-tier venues",
      "Experience with robotic systems and computer vision",
      "Proficiency in Python, C++, and ROS",
      "Ability to work independently and in teams",
    ],
    salary: "USD $60,000 - $80,000 per year",
    startDate: "Summer 2024",
    applicationDeadline: "2024-04-30",
    postedDate: "2024-02-01",
    applicationsCount: 45,
    isActive: true,
    contactEmail: "ai-lab@stanford.edu",
    website: "https://ai.stanford.edu",
    postedBy: 2,
  },
  {
    id: 3,
    title: "Assistant Professor - Machine Learning",
    organization: "Carnegie Mellon University",
    location: "Pittsburgh, PA, USA",
    remoteAvailable: false,
    type: "Faculty",
    tags: ["Machine Learning", "Full-time", "Tenure-track"],
    description:
      "The School of Computer Science at Carnegie Mellon University invites applications for a tenure-track Assistant Professor position in Machine Learning. We seek candidates with exceptional research potential and a commitment to excellence in teaching.",
    requirements: [
      "PhD in Computer Science or related field",
      "Outstanding research record in machine learning",
      "Potential for excellence in teaching and mentoring",
      "Ability to secure external funding",
      "Commitment to diversity and inclusion",
    ],
    salary: "USD $120,000 - $150,000 per year",
    startDate: "Fall 2024",
    applicationDeadline: "2024-01-31",
    postedDate: "2023-12-01",
    applicationsCount: 156,
    isActive: true,
    contactEmail: "faculty-search@cs.cmu.edu",
    website: "https://www.cs.cmu.edu",
    postedBy: 3,
  },
];

// Publications data
export const publications = [
  {
    id: 1,
    title: "A Policy Gradient Method for Task-Agnostic Reinforcement Learning",
    authors: ["Lei Wang", "John Smith", "Alice Johnson", "Bob Chen"],
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    year: 2022,
    citations: 45,
    abstract:
      "We present a novel policy gradient method that can learn across multiple tasks without task-specific adaptation. Our approach leverages meta-learning principles to achieve superior performance on unseen tasks.",
    keywords: [
      "Reinforcement Learning",
      "Policy Gradient",
      "Meta-Learning",
      "Multi-Task Learning",
    ],
    doi: "10.1234/neurips.2022.12345",
    pdfUrl: "https://arxiv.org/pdf/2201.12345.pdf",
    codeUrl: "https://github.com/example/task-agnostic-rl",
    userId: 1,
  },
  {
    id: 2,
    title: "Learning Dexterous In-Hand Manipulation",
    authors: ["Lei Wang", "Yan Chen", "David Lee", "Sarah Wilson"],
    venue: "International Journal of Robotics Research",
    year: 2020,
    citations: 123,
    abstract:
      "This paper presents a deep reinforcement learning approach for learning dexterous in-hand manipulation skills. We demonstrate that our method can learn complex manipulation tasks that were previously impossible.",
    keywords: [
      "Robotics",
      "Manipulation",
      "Deep Reinforcement Learning",
      "Dexterous Control",
    ],
    doi: "10.1177/0278364920123456",
    pdfUrl: "https://journals.sagepub.com/doi/pdf/10.1177/0278364920123456",
    codeUrl: "https://github.com/example/dexterous-manipulation",
    userId: 1,
  },
  {
    id: 3,
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Jing Li", "Noam Shazeer", "Niki Parmar"],
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    year: 2017,
    citations: 2847,
    abstract:
      "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
    keywords: [
      "Attention",
      "Transformer",
      "Neural Networks",
      "Natural Language Processing",
    ],
    doi: "10.1234/neurips.2017.12345",
    pdfUrl: "https://arxiv.org/pdf/1706.03762.pdf",
    codeUrl: "https://github.com/tensorflow/tensor2tensor",
    userId: 2,
  },
  {
    id: 4,
    title:
      "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: ["Jacob Devlin", "Jing Li", "Ming-Wei Chang", "Kenton Lee"],
    venue:
      "North American Chapter of the Association for Computational Linguistics (NAACL)",
    year: 2019,
    citations: 1923,
    abstract:
      "We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. BERT is designed to pre-train deep bidirectional representations from unlabeled text.",
    keywords: [
      "BERT",
      "Language Understanding",
      "Pre-training",
      "Transformers",
    ],
    doi: "10.18653/v1/N19-1423",
    pdfUrl: "https://arxiv.org/pdf/1810.04805.pdf",
    codeUrl: "https://github.com/google-research/bert",
    userId: 2,
  },
  {
    id: 5,
    title: "Deep Learning for Object Detection: A Comprehensive Survey",
    authors: ["Wei Zhang", "Michael Brown", "Lisa Davis", "Tom Wilson"],
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2021,
    citations: 234,
    abstract:
      "This survey provides a comprehensive overview of deep learning methods for object detection, covering both two-stage and one-stage detectors, as well as recent advances in the field.",
    keywords: [
      "Object Detection",
      "Deep Learning",
      "Computer Vision",
      "Survey",
    ],
    doi: "10.1109/TPAMI.2021.1234567",
    pdfUrl: "https://ieeexplore.ieee.org/document/1234567",
    codeUrl: "https://github.com/example/object-detection-survey",
    userId: 3,
  },
  {
    id: 6,
    title: "Designing Accessible User Interfaces: A Human-Centered Approach",
    authors: ["Sam Chen", "Emma Rodriguez", "Alex Kim", "Maria Garcia"],
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    year: 2023,
    citations: 12,
    abstract:
      "We present a human-centered design approach for creating accessible user interfaces. Our methodology emphasizes user research, iterative design, and inclusive design principles.",
    keywords: [
      "Accessibility",
      "User Interface",
      "Human-Computer Interaction",
      "Inclusive Design",
    ],
    doi: "10.1145/3544548.3581234",
    pdfUrl: "https://dl.acm.org/doi/pdf/10.1145/3544548.3581234",
    codeUrl: "https://github.com/example/accessible-ui",
    userId: 4,
  },
  {
    id: 7,
    title: "Language Models are Few-Shot Learners",
    authors: ["Tom Brown", "Yejin Choi", "Benjamin Mann", "Nick Ryder"],
    venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    year: 2020,
    citations: 3456,
    abstract:
      "We show that scaling up language models greatly improves task-agnostic, few-shot performance, sometimes even reaching competitiveness with prior state-of-the-art fine-tuning approaches.",
    keywords: [
      "Language Models",
      "Few-Shot Learning",
      "GPT",
      "Natural Language Processing",
    ],
    doi: "10.1234/neurips.2020.12345",
    pdfUrl: "https://arxiv.org/pdf/2005.14165.pdf",
    codeUrl: "https://github.com/openai/gpt-3",
    userId: 5,
  },
  {
    id: 8,
    title: "Computer Architecture: A Quantitative Approach",
    authors: ["John Hennessy", "David Patterson"],
    venue: "Morgan Kaufmann",
    year: 2019,
    citations: 1234,
    abstract:
      "This comprehensive textbook covers the fundamentals of computer architecture, including instruction set design, processor implementation, memory systems, and parallel processing.",
    keywords: [
      "Computer Architecture",
      "Processor Design",
      "Memory Systems",
      "Parallel Processing",
    ],
    doi: "10.1016/B978-0-12-811905-1.00001-1",
    pdfUrl:
      "https://www.elsevier.com/books/computer-architecture/hennessy/978-0-12-811905-1",
    codeUrl: null,
    userId: 6,
  },
];

// Network invitations data
export const networkInvitations = [
  {
    id: 1,
    from: {
      id: 2,
      name: "Jing Li",
      title: "Assistant Professor",
      organization: "Tsinghua University",
      avatar: "https://placehold.co/256x256/dbeafe/1e3a8a?text=JL",
      slug: "jing-li-8a7c9d2e1",
    },
    message:
      "Hi! I saw your work on reinforcement learning. Would love to connect and discuss potential collaborations.",
    timestamp: "2024-01-20T10:30:00Z",
  },
  {
    id: 2,
    from: {
      id: 3,
      name: "Wei Zhang",
      title: "Postdoctoral Researcher",
      organization: "MIT",
      avatar: "https://placehold.co/256x256/fee2e2/991b1b?text=WZ",
      slug: "wei-zhang-3f5g8h9i2",
    },
    message:
      "Your recent paper on multi-agent RL is fascinating! Let's connect.",
    timestamp: "2024-01-19T14:20:00Z",
  },
];

// ============================================================================
// USER OPERATIONS
// ============================================================================

/**
 * Get user by ID
 * @param {number|string} id - User ID
 * @returns {Object|null} User object or null if not found
 */
export const getUserById = (id) => {
  return users.find((user) => user.id === parseInt(id));
};

/**
 * Get user by slug (for URL routing)
 * @param {string} slug - User slug
 * @returns {Object|null} User object or null if not found
 */
export const getUserBySlug = (slug) => {
  return users.find((user) => user.slug === slug);
};

/**
 * Get user by username
 * @param {string} username - Username
 * @returns {Object|null} User object or null if not found
 */
export const getUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};

/**
 * Validate user login credentials
 * @param {string} username - Username
 * @param {string} password - Password
 * @returns {Object|null} User object if valid, null otherwise
 */
export const validateLogin = (username, password) => {
  const user = getUserByUsername(username);
  if (user && user.password === password) {
    return user;
  }
  return null;
};

// ============================================================================
// JOB OPERATIONS
// ============================================================================

/**
 * Get job by ID
 * @param {number|string} id - Job ID
 * @returns {Object|null} Job object or null if not found
 */
export const getJobById = (id) => {
  return jobs.find((job) => job.id === parseInt(id));
};

/**
 * Get jobs not posted by the specified user
 * @param {number|string} userId - User ID to exclude
 * @returns {Array} Array of job objects
 */
export const getJobsForUser = (userId) => {
  return jobs.filter((job) => job.postedBy !== parseInt(userId));
};

/**
 * Search jobs by query string
 * @param {string} query - Search query
 * @returns {Array} Array of matching job objects
 */
export const searchJobs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.organization.toLowerCase().includes(lowercaseQuery) ||
      job.description.toLowerCase().includes(lowercaseQuery) ||
      job.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// ============================================================================
// PUBLICATION OPERATIONS
// ============================================================================

/**
 * Get publication by ID
 * @param {number|string} id - Publication ID
 * @returns {Object|null} Publication object or null if not found
 */
export const getPublicationById = (id) => {
  return publications.find((pub) => pub.id === parseInt(id));
};

/**
 * Get publications by user ID
 * @param {number|string} userId - User ID
 * @returns {Array} Array of publication objects
 */
export const getPublicationsByUserId = (userId) => {
  return publications.filter((pub) => pub.userId === parseInt(userId));
};

// ============================================================================
// NETWORK OPERATIONS
// ============================================================================

/**
 * Get network invitations for a user
 * @param {number|string} userId - User ID
 * @returns {Array} Array of invitation objects
 */
export const getNetworkInvitationsForUser = (userId) => {
  return networkInvitations.filter(
    (invitation) => invitation.from.id !== parseInt(userId)
  );
};

// ============================================================================
// SEARCH OPERATIONS
// ============================================================================

/**
 * Search users by query string
 * @param {string} query - Search query
 * @returns {Array} Array of matching user objects
 */
export const searchUsers = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return users.filter(
    (user) =>
      user.profile.name.toLowerCase().includes(lowercaseQuery) ||
      user.profile.organization.toLowerCase().includes(lowercaseQuery) ||
      user.profile.studyField.toLowerCase().includes(lowercaseQuery) ||
      user.profile.title.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Search publications by query string
 * @param {string} query - Search query
 * @returns {Array} Array of matching publication objects
 */
export const searchPublications = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(lowercaseQuery) ||
      pub.abstract.toLowerCase().includes(lowercaseQuery) ||
      pub.keywords.some((keyword) =>
        keyword.toLowerCase().includes(lowercaseQuery)
      ) ||
      pub.authors.some((author) =>
        author.toLowerCase().includes(lowercaseQuery)
      )
  );
};

/**
 * Get recommended users based on research area
 * @param {number|string} currentUserId - Current user ID
 * @param {number} limit - Maximum number of recommendations
 * @returns {Array} Array of recommended user objects
 */
export const getRecommendedUsers = (currentUserId, limit = 3) => {
  const currentUser = getUserById(currentUserId);
  if (!currentUser) return [];

  const sameAreaUsers = users.filter(
    (user) =>
      user.id !== currentUserId &&
      user.profile.studyField.toLowerCase() ===
        currentUser.profile.studyField.toLowerCase()
  );

  const shuffled = sameAreaUsers.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};

// Career Pathway Explorer - Sample Data
// This file contains sample data for engineering departments and career roles

export interface Role {
  id: string;
  title: string;
  description: string;
  skills: string[];
  industries: string[];
  companies: string[];
  pathway: string[];
  salary: string;
  growth: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  subjects: string[];
  coreSkills: string[];
  roles: Role[];
  icon: string; // Using lucide icon names
}

export const departments: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    description: "Focuses on software development, algorithms, data structures, and computing systems.",
    icon: "Computer",
    subjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Technologies"
    ],
    coreSkills: [
      "Programming (Java, Python, C++)",
      "Problem Solving",
      "System Design", 
      "Database Design",
      "Web Development",
      "API Development",
      "Version Control (Git)",
      "Testing & Debugging"
    ],
    roles: [
      {
        id: "software-engineer",
        title: "Software Engineer",
        description: "Develops applications, websites, and software systems. Works on coding, testing, and maintaining software products used by millions of people.",
        skills: ["Programming", "System Design", "Testing", "Version Control", "Problem Solving"],
        industries: ["Technology", "Finance", "Healthcare", "E-commerce", "Gaming"],
        companies: ["Google", "Microsoft", "Amazon", "Flipkart", "TCS", "Infosys", "Wipro"],
        salary: "₹4-15 LPA (Entry to Mid-level)",
        growth: "High demand, excellent career progression",
        pathway: [
          "Master programming languages (Java, Python, JavaScript)",
          "Build projects and contribute to open source",
          "Learn system design and software architecture",
          "Practice coding problems on platforms like LeetCode",
          "Gain experience with databases and web technologies"
        ]
      },
      {
        id: "data-scientist",
        title: "Data Scientist",
        description: "Uses data to solve business problems and make predictions. Combines programming, statistics, and domain knowledge to extract insights from large datasets.",
        skills: ["Python/R", "Statistics", "Machine Learning", "Data Visualization", "SQL"],
        industries: ["Technology", "Finance", "Healthcare", "Retail", "Consulting"],
        companies: ["Google", "Amazon", "Microsoft", "Flipkart", "Swiggy", "Ola", "BYJU'S"],
        salary: "₹6-20 LPA (Entry to Senior level)",
        growth: "Very high demand, emerging field",
        pathway: [
          "Learn Python and statistics fundamentals",
          "Master SQL and database querying",
          "Study machine learning algorithms and libraries",
          "Work on data analysis projects with real datasets",
          "Learn data visualization tools like Tableau or PowerBI"
        ]
      },
      {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        description: "Works on both frontend (user interface) and backend (server-side) of web applications. Can build complete web applications from scratch.",
        skills: ["Frontend Development", "Backend Development", "Databases", "API Design", "DevOps"],
        industries: ["Technology", "Startups", "E-commerce", "Digital Agencies", "SaaS"],
        companies: ["Razorpay", "Zomato", "PayTM", "Freshworks", "Zoho", "PhonePe"],
        salary: "₹5-18 LPA (Entry to Senior level)",
        growth: "High demand, versatile role",
        pathway: [
          "Learn HTML, CSS, and JavaScript for frontend",
          "Master a backend language (Node.js, Python, Java)",
          "Understand databases (SQL and NoSQL)",
          "Build full-stack projects and deploy them",
          "Learn cloud services and deployment strategies"
        ]
      },
      {
        id: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        description: "Protects organizations from cyber threats by monitoring security systems, analyzing vulnerabilities, and implementing security measures.",
        skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Tools", "Compliance"],
        industries: ["Banking", "Government", "Healthcare", "Technology", "Defense"],
        companies: ["Wipro Cyber", "TCS Cyber", "IBM", "Deloitte", "EY", "PwC"],
        salary: "₹4-12 LPA (Entry to Mid-level)",
        growth: "Rapidly growing field, high job security",
        pathway: [
          "Learn networking and operating systems fundamentals",
          "Study cybersecurity frameworks and compliance",
          "Practice with security tools and ethical hacking",
          "Get certifications like CEH, CISSP, or CompTIA Security+",
          "Gain hands-on experience with security monitoring tools"
        ]
      }
    ]
  },
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    description: "Focuses on practical applications of computing technology in business environments.",
    icon: "Smartphone",
    subjects: [
      "Programming Fundamentals",
      "Database Systems",
      "Network Administration",
      "Web Development",
      "Information Security",
      "Project Management",
      "Cloud Computing",
      "Mobile App Development",
      "Business Analytics"
    ],
    coreSkills: [
      "Programming (Java, Python)",
      "Database Administration",
      "Network Management",
      "Cloud Platforms",
      "Project Management",
      "Technical Support",
      "Business Analysis",
      "System Integration"
    ],
    roles: [
      {
        id: "business-analyst",
        title: "Business Analyst",
        description: "Bridges the gap between business needs and technical solutions. Analyzes business processes and recommends technology improvements.",
        skills: ["Requirements Analysis", "Process Modeling", "Communication", "Project Management", "Data Analysis"],
        industries: ["Consulting", "Banking", "Healthcare", "Retail", "Technology"],
        companies: ["Accenture", "Capgemini", "Deloitte", "IBM", "TCS", "Cognizant"],
        salary: "₹4-10 LPA (Entry to Mid-level)",
        growth: "Stable demand, good progression to management roles",
        pathway: [
          "Develop strong analytical and communication skills",
          "Learn business process modeling tools",
          "Understand database systems and basic programming",
          "Study project management methodologies (Agile, Waterfall)",
          "Gain domain knowledge in specific industries"
        ]
      },
      {
        id: "cloud-engineer",
        title: "Cloud Engineer", 
        description: "Designs, implements, and manages cloud computing systems. Helps organizations migrate to and optimize cloud infrastructure.",
        skills: ["AWS/Azure/GCP", "DevOps", "Infrastructure as Code", "Containerization", "Monitoring"],
        industries: ["Technology", "Finance", "Healthcare", "Startups", "Enterprise"],
        companies: ["Amazon", "Microsoft", "Google", "Wipro", "TCS", "HCL", "Tech Mahindra"],
        salary: "₹6-16 LPA (Entry to Senior level)",
        growth: "Very high demand, rapidly growing field", 
        pathway: [
          "Learn fundamentals of cloud computing concepts",
          "Get certified in AWS, Azure, or Google Cloud Platform",
          "Practice with containerization tools like Docker and Kubernetes",
          "Understand Infrastructure as Code tools (Terraform, CloudFormation)",
          "Learn monitoring and automation tools"
        ]
      },
      {
        id: "system-administrator",
        title: "System Administrator",
        description: "Manages and maintains computer systems, networks, and servers. Ensures systems run smoothly and securely in organizations.",
        skills: ["Linux/Windows Administration", "Network Management", "Scripting", "Security", "Backup & Recovery"],
        industries: ["Technology", "Healthcare", "Education", "Government", "Manufacturing"],
        companies: ["IBM", "HP", "Dell", "TCS", "Infosys", "Local IT Companies"],
        salary: "₹3-8 LPA (Entry to Mid-level)",
        growth: "Steady demand, evolving towards cloud administration",
        pathway: [
          "Master operating systems (Linux and Windows)",
          "Learn networking protocols and administration",
          "Develop scripting skills (Bash, PowerShell, Python)",
          "Understand security best practices and tools",
          "Gain experience with virtualization and cloud platforms"
        ]
      }
    ]
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    description: "Deals with electronic devices, communication systems, and signal processing technologies.",
    icon: "Cpu",
    subjects: [
      "Electronic Circuits",
      "Digital Signal Processing", 
      "Communication Systems",
      "Microprocessors",
      "VLSI Design",
      "Antenna Theory",
      "Control Systems",
      "Embedded Systems",
      "Wireless Communications"
    ],
    coreSkills: [
      "Circuit Design",
      "Signal Processing",
      "Programming (C, C++, VHDL)",
      "PCB Design", 
      "Embedded Programming",
      "RF Engineering",
      "Test & Measurement",
      "System Integration"
    ],
    roles: [
      {
        id: "embedded-engineer",
        title: "Embedded Systems Engineer",
        description: "Develops software and hardware for embedded systems in devices like smartphones, cars, and IoT devices.",
        skills: ["C/C++ Programming", "Microcontrollers", "Real-time Systems", "Hardware Debugging", "PCB Design"],
        industries: ["Automotive", "Consumer Electronics", "IoT", "Aerospace", "Medical Devices"],
        companies: ["Bosch", "Continental", "Qualcomm", "Samsung", "L&T Technology", "HCL Technologies"],
        salary: "₹4-12 LPA (Entry to Senior level)",
        growth: "High demand due to IoT and automotive electronics growth",
        pathway: [
          "Master C/C++ programming for embedded systems",
          "Learn microcontroller programming (Arduino, ARM)",
          "Understand real-time operating systems (RTOS)",
          "Practice with hardware debugging tools",
          "Work on IoT and automation projects"
        ]
      },
      {
        id: "rf-engineer",
        title: "RF Engineer",
        description: "Designs and tests radio frequency systems for wireless communication, including antennas, transmitters, and receivers.",
        skills: ["RF Circuit Design", "Antenna Design", "Signal Analysis", "Network Analyzers", "Electromagnetic Theory"],
        industries: ["Telecommunications", "Aerospace", "Defense", "Satellite", "Mobile Networks"],
        companies: ["ISRO", "DRDO", "Airtel", "Jio", "Ericsson", "Nokia", "L&T"],
        salary: "₹5-15 LPA (Entry to Senior level)",
        growth: "Specialized field with good opportunities in 5G and satellite communications",
        pathway: [
          "Strong foundation in electromagnetic theory and antenna design",
          "Learn RF simulation tools (ADS, HFSS, CST)",
          "Understand wireless communication standards (4G, 5G, WiFi)",
          "Practice with RF test equipment and measurements",
          "Specialize in areas like antenna design or RF circuit design"
        ]
      },
      {
        id: "vlsi-engineer", 
        title: "VLSI Design Engineer",
        description: "Designs integrated circuits and chips used in electronic devices. Works on creating smaller, faster, and more efficient processors.",
        skills: ["Verilog/VHDL", "Digital Design", "Layout Design", "Verification", "EDA Tools"],
        industries: ["Semiconductor", "Consumer Electronics", "Automotive", "Telecommunications"],
        companies: ["Intel", "Qualcomm", "Broadcom", "Samsung", "TSMC", "Cadence", "Synopsys"],
        salary: "₹5-18 LPA (Entry to Senior level)",
        growth: "High demand in semiconductor industry, excellent growth potential",
        pathway: [
          "Master digital design concepts and Verilog/VHDL",
          "Learn EDA tools (Cadence, Synopsys, Mentor Graphics)",
          "Understand ASIC and FPGA design flows",
          "Practice with verification methodologies (UVM, SystemVerilog)",
          "Specialize in areas like analog design, digital design, or verification"
        ]
      }
    ]
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering", 
    shortName: "Mechanical",
    description: "Involves design, manufacturing, and maintenance of mechanical systems and machines.",
    icon: "Settings",
    subjects: [
      "Thermodynamics",
      "Fluid Mechanics",
      "Machine Design",
      "Manufacturing Processes",
      "Materials Science",
      "CAD/CAM",
      "Robotics",
      "Automotive Engineering",
      "Production Engineering"
    ],
    coreSkills: [
      "CAD Software (SolidWorks, AutoCAD)",
      "Manufacturing Processes",
      "Quality Control",
      "Project Management", 
      "Problem Solving",
      "Materials Knowledge",
      "Thermal Analysis",
      "Machine Design"
    ],
    roles: [
      {
        id: "design-engineer",
        title: "Design Engineer",
        description: "Creates and develops mechanical products and systems using CAD software. Works on everything from small components to large machinery.",
        skills: ["CAD Software", "Product Design", "Materials Selection", "Manufacturing Processes", "Testing & Validation"],
        industries: ["Automotive", "Aerospace", "Manufacturing", "Consumer Goods", "Heavy Machinery"],
        companies: ["Tata Motors", "Bajaj Auto", "Hero MotoCorp", "L&T", "Ashok Leyland", "Mahindra"],
        salary: "₹3-10 LPA (Entry to Senior level)",
        growth: "Steady demand, opportunities to specialize in specific industries",
        pathway: [
          "Master CAD software (SolidWorks, CATIA, AutoCAD)",
          "Learn manufacturing processes and materials science",
          "Understand design for manufacturing principles", 
          "Work on design projects and build a portfolio",
          "Specialize in specific domains like automotive or aerospace"
        ]
      },
      {
        id: "production-engineer",
        title: "Production Engineer",
        description: "Optimizes manufacturing processes to improve efficiency, quality, and cost-effectiveness in production facilities.",
        skills: ["Process Optimization", "Quality Management", "Lean Manufacturing", "Six Sigma", "Production Planning"],
        industries: ["Manufacturing", "Automotive", "Textiles", "Food Processing", "Pharmaceuticals"],
        companies: ["Maruti Suzuki", "Hyundai", "TVS Motors", "Godrej", "ITC", "Hindustan Unilever"],
        salary: "₹3-8 LPA (Entry to Mid-level)",
        growth: "Good opportunities in manufacturing sector, path to plant management",
        pathway: [
          "Learn manufacturing processes and industrial engineering",
          "Understand quality management systems (ISO, Six Sigma)",
          "Study lean manufacturing and process optimization",
          "Gain hands-on experience in production environments",
          "Develop leadership and project management skills"
        ]
      },
      {
        id: "automobile-engineer",
        title: "Automobile Engineer",
        description: "Specializes in design, development, and testing of vehicles and automotive systems. Works on making cars safer, more efficient, and innovative.",
        skills: ["Automotive Systems", "Vehicle Dynamics", "Engine Design", "CAD/CAE", "Testing & Validation"],
        industries: ["Automotive", "Racing", "Transportation", "Electric Vehicles", "Autonomous Vehicles"],
        companies: ["Tata Motors", "Mahindra", "Bajaj Auto", "TVS", "Ola Electric", "Ather Energy"],
        salary: "₹4-12 LPA (Entry to Senior level)", 
        growth: "Growing field with electric and autonomous vehicles creating new opportunities",
        pathway: [
          "Specialize in automotive engineering subjects",
          "Learn automotive CAD/CAE tools (CATIA, ANSYS)",
          "Understand electric and hybrid vehicle technologies",
          "Work on automotive projects and internships",
          "Stay updated with latest automotive trends and regulations"
        ]
      }
    ]
  },
  {
    id: "civil",
    name: "Civil Engineering",
    shortName: "Civil", 
    description: "Focuses on design, construction, and maintenance of infrastructure like buildings, roads, and bridges.",
    icon: "Building",
    subjects: [
      "Structural Engineering",
      "Geotechnical Engineering", 
      "Transportation Engineering",
      "Environmental Engineering",
      "Construction Management",
      "Surveying",
      "Concrete Technology",
      "Hydraulics",
      "Urban Planning"
    ],
    coreSkills: [
      "Structural Analysis",
      "CAD Software (AutoCAD, Revit)",
      "Project Management",
      "Construction Planning",
      "Site Supervision",
      "Material Testing",
      "Cost Estimation", 
      "Safety Management"
    ],
    roles: [
      {
        id: "structural-engineer",
        title: "Structural Engineer", 
        description: "Designs and analyzes structures like buildings, bridges, and dams to ensure they are safe and can withstand various loads and environmental conditions.",
        skills: ["Structural Analysis", "Design Software (STAAD, ETABS)", "Building Codes", "Material Properties", "Foundation Design"],
        industries: ["Construction", "Infrastructure", "Consulting", "Government", "Real Estate"],
        companies: ["L&T Construction", "Shapoorji Pallonji", "DLF", "Godrej Properties", "NBCC"],
        salary: "₹3-8 LPA (Entry to Mid-level)",
        growth: "Steady demand due to ongoing infrastructure development",
        pathway: [
          "Master structural analysis and design principles",
          "Learn structural design software (STAAD Pro, ETABS, SAP2000)", 
          "Understand building codes and safety standards",
          "Gain experience with different construction materials",
          "Work on real structural design projects"
        ]
      },
      {
        id: "construction-manager",
        title: "Construction Manager",
        description: "Oversees construction projects from planning to completion, managing resources, timelines, and ensuring quality and safety standards.",
        skills: ["Project Management", "Construction Planning", "Cost Control", "Quality Management", "Team Leadership"],
        industries: ["Construction", "Real Estate", "Infrastructure", "Government", "Industrial"],
        companies: ["L&T", "Hindustan Construction", "GMR", "Shapoorji Pallonji", "NCC"],
        salary: "₹4-12 LPA (Entry to Senior level)",
        growth: "Good career progression to senior management roles",
        pathway: [
          "Develop strong project management and leadership skills", 
          "Learn construction planning and scheduling tools",
          "Understand cost estimation and budget management",
          "Gain field experience in construction projects",
          "Get PMP or similar project management certifications"
        ]
      },
      {
        id: "urban-planner",
        title: "Urban Planner",
        description: "Plans and designs urban spaces, communities, and cities to create sustainable and livable environments for people.",
        skills: ["Urban Design", "GIS Software", "Zoning Laws", "Environmental Planning", "Community Engagement"],
        industries: ["Government", "Urban Development", "Consulting", "NGOs", "Real Estate"],
        companies: ["Municipal Corporations", "HUDCO", "DDA", "Urban Development Authorities", "Planning Consultancies"],
        salary: "₹3-7 LPA (Entry to Mid-level)",
        growth: "Growing importance due to urbanization and smart city initiatives",
        pathway: [
          "Study urban planning principles and zoning regulations",
          "Learn GIS software and mapping technologies",
          "Understand environmental and social impact assessment",
          "Work on community development and planning projects", 
          "Specialize in areas like transportation planning or environmental planning"
        ]
      }
    ]
  }
];

// Helper functions for searching and filtering
export const searchRoles = (query: string): Role[] => {
  const lowercaseQuery = query.toLowerCase();
  const allRoles = departments.flatMap(dept => 
    dept.roles.map(role => ({ ...role, department: dept.name }))
  );
  
  return allRoles.filter(role =>
    role.title.toLowerCase().includes(lowercaseQuery) ||
    role.description.toLowerCase().includes(lowercaseQuery) ||
    role.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery)) ||
    role.industries.some(industry => industry.toLowerCase().includes(lowercaseQuery))
  );
};

export const getRolesBySkill = (skill: string): Role[] => {
  const lowercaseSkill = skill.toLowerCase();
  const allRoles = departments.flatMap(dept => 
    dept.roles.map(role => ({ ...role, department: dept.name }))
  );
  
  return allRoles.filter(role =>
    role.skills.some(roleSkill => roleSkill.toLowerCase().includes(lowercaseSkill))
  );
};

export const getDepartmentById = (id: string): Department | undefined => {
  return departments.find(dept => dept.id === id);
};

export const getRoleById = (roleId: string): (Role & { department: string }) | undefined => {
  for (const dept of departments) {
    const role = dept.roles.find(r => r.id === roleId);
    if (role) {
      return { ...role, department: dept.name };
    }
  }
  return undefined;
};
export const foundationData = {
  meta: {
    name: "Sulochana Foundation",
    location: "Parel, Mumbai 400012, Maharashtra, India",
    motto: "Bringing Hope Where It’s Needed Most",
    phone: "+91 98200 12345",
    email: "contact@sulochanafoundation.org",
    operatingHours: "Monday to Saturday: 9:30 AM - 6:30 PM IST",
    heroImage: "/assets/main_page_bg.png",
    logoImage: "/assets/logo.png",
    ownerImage: "/assets/owner.png"
  },

  memorial: {
    name: "Late Smt. Sulochana Dhaku Jadhav",
    title: "Our Guiding Light & Maternal Inspiration",
    tribute: "Sulochana Foundation was founded in eternal reverence to Late Smt. Sulochana Dhaku Jadhav, whose entire life was an embodiment of selfless sacrifice, unconditional compassion, and silent service. Her belief that true human duty lies in wiping tears, helping the underprivileged, protecting nature, and caring for all living creatures continues to steer our every initiative.",
    quote: "Service to humanity is the highest calling. When you lift a family in distress, guide a student, or care for nature, you create a brighter tomorrow.",
    image: "/assets/owner.png"
  },

  founders: [
    {
      id: "founder-1",
      name: "Dr. Kunal Jadhav",
      role: "Founder & Trustee",
      title: "Professor, DLLE, University of Mumbai",
      image: "/assets/founder1.png",
      qualifications: [
        "M.A. (English)",
        "M.A. (History)",
        "M.A. (Sociology)",
        "M.Ed. (Master of Education)",
        "M.Phil.",
        "Ph.D. - Lifelong Learning (TISS - Tata Institute of Social Sciences)",
        "Ph.D. - Rural Development (University of Mumbai)"
      ],
      bio: "Distinguished academician, scholar, and professor at the Department of Lifelong Learning and Extension (DLLE), University of Mumbai, dedicated to grassroots education, rural development, and youth empowerment."
    },
    {
      id: "founder-2",
      name: "Dr. Ragini Jadhav",
      role: "Co-Founder & Trustee",
      title: "Academician & Research Scholar",
      image: "/assets/founder2.png",
      education: [
        "Ph.D. (Education), University of Mumbai",
        "M.A. (Economics), SNDT Women's University",
        "M.A. (Sociology), University of Mumbai",
        "M.Ed., University of Mumbai",
        "B.Ed., SNDT Women's University"
      ],
      teachingExperience: "3 years teaching experience in UG College and University Departments",
      industryExposure: "7 years administrative experience in Academic Research, Management and Development",
      academicAffiliation: "Research Associate for various research projects at National and International level",
      bio: "Accomplished researcher and educator with extensive administrative and teaching experience across prominent universities, leading educational advancement and social welfare programs."
    }
  ],

  stats: [
    { id: "beneficiaries", value: 28500, suffix: "+", label: "Lives Touched with Care & Support", icon: "Users" },
    { id: "health", value: 165, suffix: "+", label: "Health & Blood Donation Camps", icon: "HeartPulse" },
    { id: "education", value: 14200, suffix: "+", label: "Students Guided & Supported", icon: "GraduationCap" },
    { id: "environment", value: 46000, suffix: "+", label: "Trees Planted & Farmers Guided", icon: "Trees" }
  ],

  corePillars: [
    {
      id: "healthcare",
      title: "Healthcare",
      tagline: "Accessible Health Support & Voluntary Blood Camps",
      shortDesc: "Dedicated to community health through organized voluntary blood donation camps and comprehensive free health check-ups.",
      icon: "HeartPulse",
      color: "from-peace-700 to-peace-900",
      accent: "#0D9488",
      image: "/assets/health_bg.jpg",
      subcategories: [
        {
          title: "1. Blood Donation Camps",
          summary: "Organizing periodic voluntary blood donation camps in partnership with certified hospitals and blood banks across Mumbai and MMR to support emergency requirements.",
          focusAreas: [
            "Regular community voluntary blood donation drives",
            "Emergency voluntary donor coordination for hospitals",
            "Awareness campaigns encouraging voluntary blood donation",
            "Partnerships with certified government and charitable blood banks"
          ]
        },
        {
          title: "2. Health Check-ups",
          summary: "Conducting free multi-specialty health check-up camps including doctor consultations, blood pressure, sugar screening, and vision tests.",
          focusAreas: [
            "General physician consultations and vital screening",
            "Blood pressure, diabetes and random sugar checks",
            "Basic eye check-ups and vision screening support",
            "Distribution of essential vitamin supplements and medical guidance"
          ]
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      tagline: "Empowering Students Through Admission, Books & Exam Support",
      shortDesc: "Supporting students through 10th and 12th standard admission assistance, free distribution of books and notebooks, and competitive examination coaching.",
      icon: "GraduationCap",
      color: "from-peace-700 to-peace-900",
      accent: "#0284C7",
      image: "/assets/edu_bg.jpg",
      subcategories: [
        {
          title: "1. 10th and 12th Admission Support",
          summary: "Guiding students and low-income parents through 10th and 12th board registration, college admission counseling, and fee sponsorship assistance to prevent dropouts.",
          focusAreas: [
            "Assistance with 10th and 12th college admission forms and procedures",
            "Guidance for stream selection (Arts, Commerce, Science, Vocational)",
            "Fee support and scholarship guidance for deserving students",
            "Parental counseling to encourage continuous higher schooling"
          ]
        },
        {
          title: "2. Distribution of Books and Notebooks",
          summary: "Providing free school notebooks, reference textbooks, stationery kits, and learning supplies to school and college students.",
          focusAreas: [
            "Annual textbook and notebook distribution drives",
            "Complete student stationery sets (pens, geometry boxes, school bags)",
            "Collection and recycling of curriculum books for juniors",
            "Community study materials and library support"
          ]
        },
        {
          title: "3. Competitive Exam Support",
          summary: "Offering structured coaching materials, mock tests, and mentorship for youth preparing for government, civil, banking, and entrance exams.",
          focusAreas: [
            "Guidance and study materials for MPSC, Police Bharti, and SSC exams",
            "Interactive guidance and career mentoring sessions",
            "Mock test practice and time-management workshops",
            "Interview preparation and personality development guidance"
          ]
        }
      ]
    },
    {
      id: "environment",
      title: "Environment",
      tagline: "Green Plantations, Farmer Guidance & Technology Support",
      shortDesc: "Promoting environmental sustainability through indigenous tree plantations, practical guidance to farmers, and modern technology support.",
      icon: "Trees",
      color: "from-peace-700 to-peace-900",
      accent: "#10B981",
      image: "/assets/env_bg.jpg",
      subcategories: [
        {
          title: "1. Tree Plantation",
          summary: "Conducting mass native tree plantation drives across open grounds, schools, and community green belts with dedicated sapling nurturing.",
          focusAreas: [
            "Plantation of native shade and fruit trees (Neem, Peepal, Banyan)",
            "Community greening and seed ball distribution drives",
            "Installation of tree guards and post-plantation care",
            "Cleanliness and eco-awareness drives in neighbourhoods"
          ]
        },
        {
          title: "2. Guidance to Farmers",
          summary: "Providing rural and semi-urban farmers with actionable guidance on sustainable agricultural practices, soil health, and organic methods.",
          focusAreas: [
            "Workshops on soil conservation and water management techniques",
            "Guidance on seasonal crop planning and organic fertilizers",
            "Information sessions on agricultural credit and government subsidies",
            "Connecting farmers with agricultural experts and agronomists"
          ]
        },
        {
          title: "3. Technology Support",
          summary: "Introducing digital tools, modern agricultural techniques, smart irrigation awareness, and digital literacy to rural farming communities.",
          focusAreas: [
            "Awareness on modern agricultural technology and drip irrigation",
            "Digital portal training for accessing weather alerts and market rates",
            "E-governance and online farmer scheme application guidance",
            "Use of basic technology tools for farm record management"
          ]
        }
      ]
    },
    {
      id: "social-welfare",
      title: "Social Welfare",
      tagline: "Awareness on Govt Schemes & Women Empowerment",
      shortDesc: "Dedicated to societal upliftment through comprehensive awareness and facilitation of Government welfare schemes and dedicated women empowerment programs.",
      icon: "HandHeart",
      color: "from-peace-700 to-peace-900",
      accent: "#F59E0B",
      image: "/assets/social_bg.jpg",
      subcategories: [
        {
          title: "1. Awareness & Govt Scheme Welfare",
          summary: "Helping citizens understand, access, and enroll in state and central government welfare schemes, senior citizen benefits, and health cards.",
          focusAreas: [
            "Guidance help desks for Ayushman Bharat and health scheme enrolment",
            "Assistance with pension schemes for senior citizens and widows",
            "Ration card, Aadhaar, and documentation assistance drives",
            "Awareness camps educating citizens on their statutory welfare rights"
          ]
        },
        {
          title: "2. Women Empowerment",
          summary: "Equipping women with certified vocational skills, tailoring training, self-help group formation, and micro-livelihood opportunities.",
          focusAreas: [
            "Certified tailoring, cutting, and stitching workshops for women",
            "Support in starting home-based sewing and handicraft micro-enterprises",
            "Financial literacy and self-help group savings orientation",
            "Health, hygiene, and nutrition awareness sessions for mothers"
          ]
        }
      ]
    }
  ],

  impactCalculatorTiers: [
    {
      amount: 500,
      title: "Books & Stationery Kit",
      impact: "Supplies a complete set of notebooks, stationery, and textbooks to 1 student.",
      tag: "Popular",
      icon: "BookOpen"
    },
    {
      amount: 1200,
      title: "Health & Check-up Camp Aid",
      impact: "Supports diagnostic test kits and doctor consultations for 2 community members.",
      tag: "Essential",
      icon: "Stethoscope"
    },
    {
      amount: 2500,
      title: "Tree Plantation & Farmer Aid",
      impact: "Funds 15 native tree saplings with protective guards and agricultural workshop kits.",
      tag: "Green Mission",
      icon: "Sprout"
    },
    {
      amount: 5000,
      title: "Women Tailoring Empowerment",
      impact: "Provides a sewing machine starter setup, enabling a mother to start her tailoring livelihood.",
      tag: "Empowerment",
      icon: "Sparkles"
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: "Sulochana Foundation guided my daughter through her 12th college admissions and provided full textbook support. Their encouragement gave our family confidence.",
      author: "Laxmi Shinde",
      role: "Parent & Community Member",
      location: "Parel, Mumbai",
      domain: "Education",
      rating: 5
    },
    {
      id: 2,
      quote: "The free health check-up camp organized in our area was very helpful. The doctors tested my blood sugar and provided free medicines and valuable guidance.",
      author: "Ganesh Gaikwad",
      role: "Camp Participant",
      location: "Bhoiwada, Parel",
      domain: "Healthcare",
      rating: 5
    },
    {
      id: 3,
      quote: "Their guidance on government welfare schemes and women tailoring workshops helped my sister start her own sewing work from home. We are truly grateful.",
      author: "Sheetal More",
      role: "Beneficiary",
      location: "Dadar, Mumbai",
      domain: "Social Welfare",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "What are the primary focus areas of Sulochana Foundation?",
      answer: "Our core initiatives encompass 4 key domains: Healthcare (Blood donation camps & Health check-ups), Education (10th/12th admission support, distribution of books/notebooks, and competitive exam support), Environment (Tree plantation, guidance to farmers, and technology support), and Social Welfare (Awareness & Govt scheme welfare, and women empowerment)."
    },
    {
      question: "How can students apply for 10th/12th admission or book support?",
      answer: "Students or their parents can reach out through our Contact page, visit our Parel center, or contact our coordinators during our annual distribution drives before the start of each academic session."
    },
    {
      question: "How can citizens or corporations collaborate for blood donation camps or tree plantations?",
      answer: "We actively collaborate with housing societies, colleges, community groups, and corporate partners to organize voluntary blood donation drives and tree planting campaigns across Mumbai and Maharashtra."
    },
    {
      question: "How can I volunteer with the foundation?",
      answer: "We warmly welcome volunteers! You can volunteer at our health check-up camps, help distribute books and notebooks, join tree planting drives, or mentor students for competitive exams. Click on 'Join As Volunteer' to register."
    }
  ]
};

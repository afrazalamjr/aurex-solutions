import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  client1,client2,
  client3,client4,
  client5,client6,client7,
  twitter,  

  send,
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About Us",
    path: "/about",
  },
  {
    id: "services",
    title: "Services",
    path: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        id: "business-development",
        title: "Business Development",
        path: "/services/business-development",
      },
      {
        id: "ai-workflow-automation",
        title: "AI Workflow Automation",
        path: "/services/ai-workflow-automation",
      },
      {
        id: "blockchain-development",
        title: "Blockchain Development",
        path: "/services/blockchain",
      },
      {
        id: "crypto-launch-pad",
        title: "Crypto Launch Pad",
        path: "/services/crypto-coin-launch",
      },
    ],
  },
  {
    id: "clients",
    title: "Clients",
    path: "/clients",
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star, // You can replace with a relevant icon (like a social media icon)
    title: "Social Media Designs",
    content: "Creative and impactful designs tailored for your brand to elevate your online presence across platforms.",
  },
  {
    id: "feature-2",
    icon: shield, // Consider replacing with a web icon or similar
    title: "Full Stack Web Development",
    content: "Modern, scalable websites and applications crafted with the latest technologies to meet your business goals.",
  },
  {
    id: "feature-3",
    icon: send, // Consider replacing with automation/gear icon
    title: "Automations",
    content: "Custom-built automations to streamline business workflows, saving time and boosting productivity.",
  }
];


export const feedback = [
 {
    id: "feedback-1",
    content:
      "Aurex Solutions built our e-commerce platform with such precision that our conversion rates increased by 140%. Their React developers are among the best we've worked with.",
    name: "Ahmed Raza",
    title: "CEO, ShopKar (Pakistan)",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "The mobile app Aurex developed for our SaaS product received a 4.9/5 rating on the App Store within 3 months of launch. Their UI/UX team is exceptional.",
    name: "Sarah",
    title: "Startup Founder, TechWave (USA)",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "We've partnered with Aurex on 6 projects over 3 years because they consistently deliver ahead of schedule. Their Node.js architects saved us $250K in cloud costs.",
    name: "Fatima Khan",
    title: "CTO, DigiSolutions (Pakistan)",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "Aurex's blockchain development expertise helped us launch our DeFi platform successfully. Their smart contract auditing saved us from potential vulnerabilities.",
    name: "Michael Chen",
    title: "Founder, CryptoFinance (Singapore)",
    img: people01,
  },
  {
    id: "feedback-5",
    content:
      "The AI automation solutions Aurex implemented reduced our operational costs by 60% while improving efficiency. Highly recommended for any business looking to scale.",
    name: "Emma Thompson",
    title: "Operations Director, TechCorp (UK)",
    img: people02,
  }
  
];

export const stats = [
   {
    id: "stats-1",
    title: "Projects Completed",
    value: "150+",
    // Shows experience and scale
  },
  {
    id: "stats-2",
    title: "Client Satisfaction Rate",
    value: "98%",
    // Highlights quality of service
  },
  {
    id: "stats-3",
    title: "Development Hours Logged",
    value: "50,000+",
    // Demonstrates technical capacity
  }
];

export const footerLinks = [
  {
    title: "Contact",
    links: [
      {
        name: "info@aurexsolutions.com",
        link: "mailto:info@aurexsolutions.com",
      },
      {
        name: "+92 300 123 4567",
        link: "tel:+923001234567",
      },
      {
        name: "Karachi, Pakistan",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Our Story",
        link: "/about",
      },
      {
        name: "Team",
        link: "/team",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "Help Center",
        link: "/help",
      },
      {
        name: "FAQs",
        link: "/faq",
      },
      {
        name: "Privacy Policy",
        link: "/privacy",
      },
      {
        name: "Terms of Service",
        link: "/terms",
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61567608718359",
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com/",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/company/aurex-solutions",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/aurexsol/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/aurexsol/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=61567608718359",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/aurex-solutions",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: client1,
    link: 'https://www.nebrascorp.com/',
  },
  {
    id: "client-2",
    logo: client2,
    link: 'https://www.teambridgeit.org/',
  },
  {
    id: "client-3",
    logo: client3,
    link: 'https://www.fohmics.ae/',
  },
  {
    id: "client-4",
    logo: client4,
    link: 'https://www.pivot.ae/Home',
  },
  {
    id: "client-5",
    logo: client5,
    link: 'https://smherbscosmetics.com/',
  },
  {
    id: "client-6",
    logo: client6,
    link: 'https://www.learnoda.com/',
  },
  {
    id: "client-7",
    logo: client7,
    link: 'https://letera.ai',
  }
];

export const partners = [
  {
    id: "partner-1",
    name: "Artificial Intelligence",
    logo: "A"
  },
  {
    id: "partner-2", 
    name: "User Experience",
    logo: "U"
  },
  {
    id: "partner-3",
    name: "React Development", 
    logo: "R"
  },
  {
    id: "partner-4",
    name: "Enterprise Solutions",
    logo: "E"
  },
  {
    id: "partner-5",
    name: "eXtended Reality",
    logo: "X"
  }
];

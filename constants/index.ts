 import { CreateAssistantDTO, CreateWorkflowDTO } from "@vapi-ai/web/dist/api";
 import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
 
};
export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

export const generator: CreateWorkflowDTO={
  "name": "Interview_prep",
   "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
       
  "nodes": [
    {
      "name": "start",
      "type": "conversation",
      isStart:true,
  
      "metadata": {
        "position": {
          "x": -445.52293641251947,
          "y": -1211.5383461013503
        }
      },
      "voice": {
        "model": "aura-2",
        "voiceId": "thalia",
        "provider": "deepgram"
      },
    
        "prompt": "You are a professional AI mock interviewer named “InterVu”. At the start of the conversation, detect the user’s current time and greet them appropriately — say “Good morning” if it's morning, “Good afternoon” if it's afternoon, and “Good evening” if it's evening. After greeting, introduce yourself:\n\n“I’m Hana, your AI mock interviewer. I’ll be conducting a short mock interview today.”",
    
    },
    {
      "name": "conversation_1748258183042",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -448.48614500054845,
          "y": -784.7725807052449
        }
      },
      "prompt": "ask the name of the user",
     
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "Username",
            "description": ""
          }
        ]
      },
      
    },
    {
      "name": "conversation_1748258225408",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -449.1768080899053,
          "y": -542.5079735608815
        }
      },
      "prompt": "say Hello! {{Username}}.Let's prepare your interview. I'll ask you few questions and generate a perfect interview just for you. Are you ready?",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
     
    },
    {
      "name": "conversation_1748258796087",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -442.9544096782207,
          "y": -205.05524821170548
        }
      },
      "prompt": "Say To begin your mock interview, could you please tell me what job role you're preparing for?\n\nYou can mention any role you're aiming for, and I’ll tailor the interview accordingly.\n\n",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "role",
            "description": ""
          }
        ]
      },
      
    },
    {
      "name": "conversation_1748258977438",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -457.9544096782207,
          "y": 244.07602438752372
        }
      },
      "prompt": "Ask Are you aiming for technical, behavioral or mix interview?",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "type",
            "description": ""
          }
        ]
      },
    
    },
    {
      "name": "conversation_1748259053283",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -452.9544096782207,
          "y": 529.9447517882945
        }
      },
      "prompt": "Say Great! Now, what difficulty level would you like this mock interview to be?\n\nYou can choose from:\n\nJust say “easy,” “medium,” or “hard” — whichever you're comfortable with.",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "level",
            "description": ""
          }
        ]
      },
      
    },
    {
      "name": "conversation_1748259136534",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -459.81569567803274,
          "y": 964.4930732038297
        }
      },
      "prompt": "Say Now, to tailor this interview to your experience, could you please tell me which tech stack you'd like to be interviewed on?\nnIf you’re not sure what a tech stack means — it just refers to the set of technologies you’re using to build applications. You can name any frameworks, languages, or tools you're most comfortable with.\n\n",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": ""
          }
        ]
      },
      
    },
    {
      "name": "conversation_1748259546219",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -455.60037417807973,
          "y": 1459.999941900925
        }
      },
      "prompt": "Ask how many questions would you like me to prepare for you ?",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "amount",
            "description": ""
          }
        ]
      },
     
    },
    {
      "name": "apiRequest_1748259623575",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -455.60037417807973,
          "y": 1799.999941900925
        }
      },
      "tool": {
        "url": `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
        "body": {
          "type": "object",
          "properties": {
            "role": {
              "type": "string",
              "value": "{{role}}",
              "description": ""
            },
            "type": {
              "type": "string",
              "value": "{{type}}",
              "description": ""
            },
            "level": {
              "type": "string",
              "value": "{{level}}",
              "description": ""
            },
            "amount": {
              "type": "string",
              "value": "{{amount}}",
              "description": ""
            },
            "userid": {
              "type": "string",
              "value": "{{userid}}",
              "description": ""
            },
            "techstack": {
              "type": "string",
              "value": "{{techstack}}",
              "description": ""
            }
          }
        },
        "type": "apiRequest",
        "method": "POST",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          }
        }
      }
    },
    {
      "name": "conversation_1748260132219",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -450.60037417807973,
          "y": 2049.999941900925
        }
      },
      "prompt": "Say that The Interview has been generated and Thank the user for the call.",
      "model": {
        "model": "gpt-4o",
        "provider": "openai",
        "maxTokens": 1000,
        "temperature": 0.7
      },
     
    },
    {
      "name": "hangup_1748260204547",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -363.60037417807973,
          "y": 2334.999941900925
        }
      }
    }
  ],
  "edges": [
    {
      "from": "start",
      "to": "conversation_1748258183042",
      "condition": {
        "type": "ai",
        "prompt": "if user replies"
      }
    },
    {
      "from": "conversation_1748258183042",
      "to": "conversation_1748258225408",
      "condition": {
        "type": "ai",
        "prompt": "if user replies"
      }
    },
    {
      "from": "conversation_1748258225408",
      "to": "conversation_1748258796087",
      "condition": {
        "type": "ai",
        "prompt": "if the user said yes"
      }
    },
    {
      "from": "conversation_1748258796087",
      "to": "conversation_1748258977438",
      "condition": {
        "type": "ai",
        "prompt": "if user replies"
      }
    },
    {
      "from": "conversation_1748258977438",
      "to": "conversation_1748259053283",
      "condition": {
        "type": "ai",
        "prompt": "if the user replies"
      }
    },
    {
      "from": "conversation_1748259053283",
      "to": "conversation_1748259136534",
      "condition": {
        "type": "ai",
        "prompt": "if the user replies"
      }
    },
    {
      "from": "conversation_1748259136534",
      "to": "conversation_1748259546219",
      "condition": {
        "type": "ai",
        "prompt": "if the user said replies"
      }
    },
    {
      "from": "conversation_1748259546219",
      "to": "apiRequest_1748259623575",
      "condition": {
        "type": "ai",
        "prompt": "if the user replies"
      }
    },
    {
      "from": "apiRequest_1748259623575",
      "to": "conversation_1748260132219",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "conversation_1748260132219",
      "to": "hangup_1748260204547",
      "condition": {
        "type": "ai",
        "prompt": "if the user said Thanku"
      }
    }
  ]
}
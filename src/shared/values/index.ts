export type Priority = "low" | "medium" | "high";
export type TaskStatus = "pending" | "in_progress" | "completed" | "cancelled";

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  category?: string;
  priority: Priority;
  pomodoro: number;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  
}

export type TaskCardType = Task;

export interface TaskCardProps {
  task: TaskCardType;
  actions: React.ReactNode;
}
export const tasks: Task[] = [
  {
    id: "1",
    title: "Buy groceries",
    description:
      "Head to the local supermarket and pick up essentials: organic milk, free-range eggs, whole grain bread, fresh apples, Greek yogurt, spinach, chicken breast, and some dark chocolate for dessert. Don't forget reusable bags!",
    status: "pending",
    priority: "high",
    dueDate: "2025-09-01",
    pomodoro: 2,
    category: "Personal",
    createdAt: "2025-08-25T10:00:00Z",
    updatedAt: "2025-08-25T10:00:00Z",
  },
  {
    id: "2",
    title: "Workout",
    description:
      "Strength training session focusing on chest and back muscles. Start with 10-minute warmup cardio, then bench press 4x8, incline dumbbell press 3x10, bent-over rows 4x8, lat pulldowns 3x12, and finish with core exercises. Cool down with stretching.",
    status: "in_progress",
    priority: "medium",
    dueDate: "2025-09-02",
    pomodoro: 3,
    category: "Health",
    createdAt: "2025-08-26T09:00:00Z",
    updatedAt: "2025-08-28T14:30:00Z",
  },
  {
    id: "3",
    title: "Read a book",
    description:
      "Continue reading 'Atomic Habits' by James Clear. Finish chapter 5 which covers the implementation intentions and habit stacking strategies. Take notes on key concepts and think about how to apply them to daily routine.",
    status: "completed",
    priority: "low",
    dueDate: "2025-08-28",
    pomodoro: 1,
    category: "Leisure",
    createdAt: "2025-08-20T08:00:00Z",
    updatedAt: "2025-08-28T20:15:00Z",
  },
  {
    id: "4",
    title: "Build project",
    description:
      "Set up the new TypeScript project with proper configuration. Initialize tsconfig.json with strict mode enabled, configure ESLint with recommended rules, set up Prettier for code formatting, and integrate pre-commit hooks with Husky. Document the setup process in README.md.",
    status: "in_progress",
    priority: "high",
    dueDate: "2025-08-30",
    pomodoro: 4,
    category: "Work",
    createdAt: "2025-08-24T11:00:00Z",
    updatedAt: "2025-08-28T16:45:00Z",
  },
  {
    id: "5",
    title: "Call client",
    description:
      "Schedule a video call with the client to discuss recent project scope changes. Prepare agenda covering: timeline adjustments, budget implications, new feature requests, and deliverable expectations. Send meeting notes afterwards with action items clearly outlined.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-08-29",
    pomodoro: 2,
    category: "Work",
    createdAt: "2025-08-27T13:00:00Z",
    updatedAt: "2025-08-27T13:00:00Z",
  },
  {
    id: "6",
    title: "Learn React hooks",
    description:
      "Deep dive into advanced React hooks patterns. Study useCallback and useMemo optimization techniques, explore custom hooks creation, understand useReducer for complex state management, and practice with useContext for global state. Build a small demo project to solidify understanding.",
    status: "in_progress",
    priority: "medium",
    dueDate: "2025-09-05",
    pomodoro: 5,
    category: "Learning",
    createdAt: "2025-08-23T10:00:00Z",
    updatedAt: "2025-08-27T15:20:00Z",
  },
  {
    id: "7",
    title: "Meal prep Sunday",
    description:
      "Prepare healthy meals for the entire week. Cook quinoa bowls with grilled vegetables, bake chicken thighs with herbs, prepare overnight oats with berries, make a large batch of vegetable soup, portion everything into containers. Calculate macros and label each meal.",
    status: "pending",
    priority: "high",
    dueDate: "2025-09-03",
    pomodoro: 4,
    category: "Health",
    createdAt: "2025-08-28T08:00:00Z",
    updatedAt: "2025-08-28T08:00:00Z",
  },
  {
    id: "8",
    title: "Update portfolio website",
    description:
      "Redesign the portfolio landing page with modern aesthetics. Add latest projects with detailed case studies, update the about section with recent accomplishments, optimize images for faster loading, implement dark mode toggle, and ensure mobile responsiveness across all devices.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-09-10",
    pomodoro: 6,
    category: "Work",
    createdAt: "2025-08-22T14:00:00Z",
    updatedAt: "2025-08-22T14:00:00Z",
  },
  {
    id: "9",
    title: "Morning meditation",
    description:
      "Start the day with a 20-minute guided meditation session. Focus on breath awareness and body scan techniques. Use the Headspace app or follow a YouTube guided session. Set up a comfortable quiet space, light a candle, and eliminate all distractions.",
    status: "completed",
    priority: "low",
    dueDate: "2025-08-27",
    pomodoro: 1,
    category: "Health",
    createdAt: "2025-08-27T06:00:00Z",
    updatedAt: "2025-08-27T06:30:00Z",
  },
  {
    id: "10",
    title: "Fix production bug",
    description:
      "Critical bug in the payment processing module causing transactions to fail intermittently. Review error logs from the past 48 hours, identify the root cause in the API integration, implement a fix with proper error handling, write unit tests to prevent regression, and deploy to staging for QA testing.",
    status: "in_progress",
    priority: "high",
    dueDate: "2025-08-29",
    pomodoro: 5,
    category: "Work",
    createdAt: "2025-08-28T09:00:00Z",
    updatedAt: "2025-08-28T17:00:00Z",
  },
  {
    id: "11",
    title: "Plan birthday party",
    description:
      "Organize surprise birthday party for Sarah next weekend. Create guest list and send invitations, book restaurant private dining room, order custom cake from the bakery, plan decorations theme (vintage aesthetic), coordinate with friends for gift contribution, and prepare playlist with her favorite songs.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-09-06",
    pomodoro: 3,
    category: "Personal",
    createdAt: "2025-08-26T11:00:00Z",
    updatedAt: "2025-08-26T11:00:00Z",
  },
  {
    id: "12",
    title: "Database optimization",
    description:
      "Analyze slow-running queries in the production database. Add missing indexes on frequently queried columns, optimize JOIN operations, implement query caching strategy, archive old data to reduce table size, and document all changes in the technical wiki. Expected performance improvement of 40-50%.",
    status: "pending",
    priority: "high",
    dueDate: "2025-09-04",
    pomodoro: 6,
    category: "Work",
    createdAt: "2025-08-25T13:00:00Z",
    updatedAt: "2025-08-25T13:00:00Z",
  },
  {
    id: "13",
    title: "Practice guitar",
    description:
      "Work on fingerpicking technique for 'Dust in the Wind'. Practice chord transitions slowly with metronome at 60 BPM, gradually increase tempo to 80 BPM. Focus on clean notes and proper finger placement. Record a practice session to track progress and identify areas needing improvement.",
    status: "completed",
    priority: "low",
    dueDate: "2025-08-26",
    pomodoro: 2,
    category: "Leisure",
    createdAt: "2025-08-26T18:00:00Z",
    updatedAt: "2025-08-26T20:00:00Z",
  },
  {
    id: "14",
    title: "Write blog post",
    description:
      "Draft comprehensive blog post about building scalable microservices architecture. Cover topics: service decomposition strategies, inter-service communication patterns, API gateway implementation, handling distributed transactions, monitoring and logging best practices. Include code examples and architecture diagrams. Target length: 2500-3000 words.",
    status: "in_progress",
    priority: "medium",
    dueDate: "2025-09-08",
    pomodoro: 7,
    category: "Work",
    createdAt: "2025-08-24T10:00:00Z",
    updatedAt: "2025-08-27T16:00:00Z",
  },
  {
    id: "15",
    title: "Clean apartment",
    description:
      "Deep cleaning day! Vacuum all rooms including under furniture, mop kitchen and bathroom floors, clean all windows and mirrors, organize closet and donate unused clothes, scrub bathroom tiles and fixtures, dust all surfaces, change bed linens, and take out recycling. Put on favorite podcast while cleaning.",
    status: "pending",
    priority: "low",
    dueDate: "2025-09-07",
    pomodoro: 4,
    category: "Personal",
    createdAt: "2025-08-28T07:00:00Z",
    updatedAt: "2025-08-28T07:00:00Z",
  },
  {
    id: "17",
    title: "Review pull requests",
    description:
      "Code review session for the team's pending PRs. Focus on the authentication refactor PR (needs security review), the new dashboard component (check accessibility), and the API optimization changes (verify performance benchmarks). Leave constructive feedback and approve or request changes by end of day.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-08-31",
    pomodoro: 3,
    category: "Work",
    createdAt: "2025-08-28T09:00:00Z",
    updatedAt: "2025-08-28T09:00:00Z",
  },
  {
    id: "18",
    title: "Organize photos",
    description:
      "Sort through 2000+ photos from the past year. Create albums for: summer vacation, family gatherings, hiking trips, and random moments. Delete duplicates and blurry shots. Back up everything to cloud storage and external hard drive. Consider making a photo book for grandparents' anniversary gift.",
    status: "completed",
    priority: "low",
    dueDate: "2025-08-25",
    pomodoro: 5,
    category: "Personal",
    createdAt: "2025-08-24T13:00:00Z",
    updatedAt: "2025-08-25T18:00:00Z",
  },
  {
    id: "19",
    title: "Learn Docker",
    description:
      "Complete Docker fundamentals course on Udemy. Topics to cover: containerization basics, Dockerfile creation, docker-compose for multi-container apps, volume management, networking between containers, and deployment strategies. Build a practical project: containerize existing Node.js application with PostgreSQL database.",
    status: "in_progress",
    priority: "medium",
    dueDate: "2025-09-15",
    pomodoro: 8,
    category: "Learning",
    createdAt: "2025-08-20T10:00:00Z",
    updatedAt: "2025-08-28T14:00:00Z",
  },
  {
    id: "20",
    title: "Prepare presentation",
    description:
      "Create slide deck for quarterly business review meeting with stakeholders. Include: Q3 achievements and KPIs, user growth metrics with visualizations, revenue breakdown by product line, upcoming Q4 roadmap, resource allocation needs, and risk assessment. Practice delivery to keep under 30 minutes. Use company template and brand colors.",
    status: "pending",
    priority: "high",
    dueDate: "2025-09-09",
    pomodoro: 6,
    category: "Work",
    createdAt: "2025-08-26T10:00:00Z",
    updatedAt: "2025-08-26T10:00:00Z",
  },
  {
    id: "21",
    title: "Yoga class",
    description:
      "Evening vinyasa flow yoga class at 6 PM with instructor Maya. Focus on hip openers and backbends this week. Bring yoga mat, water bottle, and towel. Arrive 15 minutes early to get a good spot near the window. Stay for the 10-minute meditation at the end of class.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-09-02",
    pomodoro: 2,
    category: "Health",
    createdAt: "2025-08-28T10:00:00Z",
    updatedAt: "2025-08-28T10:00:00Z",
  },
  {
    id: "22",
    title: "Financial planning",
    description:
      "Review and update personal budget for the rest of the year. Analyze spending patterns from last 3 months, identify areas to cut expenses, set savings goals for emergency fund (target: 6 months expenses), research investment options for retirement account, and schedule meeting with financial advisor to discuss long-term wealth building strategy.",
    status: "pending",
    priority: "high",
    dueDate: "2025-09-12",
    pomodoro: 4,
    category: "Personal",
    createdAt: "2025-08-27T09:00:00Z",
    updatedAt: "2025-08-27T09:00:00Z",
  },
  {
    id: "23",
    title: "Watch conference talk",
    description:
      "Watch React Conf 2024 keynote about React Server Components and new rendering patterns. Take detailed notes on: streaming SSR improvements, selective hydration benefits, migration path from current architecture, and potential performance gains. Share key takeaways with the team in Slack and discuss implementation feasibility.",
    status: "completed",
    priority: "low",
    dueDate: "2025-08-24",
    pomodoro: 2,
    category: "Learning",
    createdAt: "2025-08-23T19:00:00Z",
    updatedAt: "2025-08-24T21:00:00Z",
  },
  {
    id: "24",
    title: "Car maintenance",
    description:
      "Take car to mechanic for scheduled 50,000 mile service. Services needed: oil change, tire rotation, brake inspection, air filter replacement, fluid level checks, and general safety inspection. Ask about the weird noise coming from the rear right wheel. Estimated time: 2-3 hours. Bring laptop to work remotely from waiting area.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-09-05",
    pomodoro: 1,
    category: "Personal",
    createdAt: "2025-08-28T11:00:00Z",
    updatedAt: "2025-08-28T11:00:00Z",
  },
  {
    id: "25",
    title: "Refactor legacy code",
    description:
      "Technical debt sprint: refactor the old user authentication module written 3 years ago. Replace deprecated libraries, add proper TypeScript types, implement error boundaries, write comprehensive unit tests (target: 80% coverage), update documentation, and ensure backward compatibility. This will improve maintainability and reduce production bugs.",
    status: "pending",
    priority: "high",
    dueDate: "2025-09-13",
    pomodoro: 10,
    category: "Work",
    createdAt: "2025-08-21T14:00:00Z",
    updatedAt: "2025-08-21T14:00:00Z",
  },
  {
    id: "26",
    title: "Gaming session",
    description:
      "Relax with a few hours of Elden Ring. Current progress: exploring Liurnia of the Lakes, need to defeat Rennala. Farm runes in Caelid if underpowered. Try out the new sword build with bleed damage. Remember to take breaks every hour and stay hydrated. Maybe stream on Twitch if friends want to watch.",
    status: "completed",
    priority: "low",
    dueDate: "2025-08-27",
    pomodoro: 4,
    category: "Leisure",
    createdAt: "2025-08-27T19:00:00Z",
    updatedAt: "2025-08-27T23:00:00Z",
  },
  {
    id: "27",
    title: "Network security audit",
    description:
      "Conduct comprehensive security audit of company network infrastructure. Tasks: scan for vulnerabilities using Nmap and Nessus, review firewall rules and access controls, check SSL certificate expiration dates, audit user permissions and remove unused accounts, test backup and disaster recovery procedures, and generate detailed security report for IT director.",
    status: "pending",
    priority: "high",
    dueDate: "2025-09-14",
    pomodoro: 8,
    category: "Work",
    createdAt: "2025-08-23T10:00:00Z",
    updatedAt: "2025-08-23T10:00:00Z",
  },
  {
    id: "28",
    title: "Cooking experiment",
    description:
      "Try making homemade ramen from scratch! Prepare tonkotsu broth (requires 12-hour simmer), make fresh noodles with alkaline water, marinate soft-boiled eggs in soy sauce mixture, prepare chashu pork belly, and gather toppings: nori, green onions, bamboo shoots, corn. Invite friends over for tasting session.",
    status: "pending",
    priority: "low",
    dueDate: "2025-09-07",
    pomodoro: 6,
    category: "Leisure",
    createdAt: "2025-08-28T12:00:00Z",
    updatedAt: "2025-08-28T12:00:00Z",
  },
  {
    id: "29",
    title: "Job interview prep",
    description:
      "Prepare for senior software engineer position at TechCorp. Research the company: recent news, products, company culture, tech stack (React, Node.js, AWS). Review common interview questions: system design problems, algorithm challenges, behavioral questions. Practice coding problems on LeetCode (focus on medium-hard level). Prepare questions to ask interviewer about team structure and growth opportunities.",
    status: "in_progress",
    priority: "high",
    dueDate: "2025-09-08",
    pomodoro: 7,
    category: "Work",
    createdAt: "2025-08-25T09:00:00Z",
    updatedAt: "2025-08-28T15:00:00Z",
  },
  {
    id: "30",
    title: "Plant garden",
    description:
      "Start small vegetable garden in backyard. Purchase supplies: raised bed kit, organic soil, compost, seeds (tomatoes, peppers, herbs, lettuce), gardening tools, and watering system. Research companion planting strategies. Install beds in sunny spot with good drainage. Plant starter seeds and create maintenance schedule for watering and fertilizing.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-09-10",
    pomodoro: 5,
    category: "Personal",
    createdAt: "2025-08-27T10:00:00Z",
    updatedAt: "2025-08-27T10:00:00Z",
  },
];

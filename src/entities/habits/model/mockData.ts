
type FrequencyType = 'daily' | 'weekly' | 'custom';
type PomodoroType = 'work' | 'shortBreak' | 'longBreak';
type IntensityLevel = 0 | 1 | 2 | 3 | 4;

interface Habit {
  id: string;
  userId: string;
  name: string;
  description?: string;
  frequency: FrequencyType;
  reminderTime?: string;
  reminderEnabled: boolean;
  targetDaysPerWeek?: number;
  specificDays?: number[];
  startDate: string;
  goalDays: number;
  createdAt: string;
  updatedAt: string;
}

interface HabitCompletion {
  id: string;
  habitId: string;
  userId: string;
  date: string;
  completed: boolean;
  pomodoros: number;
  completedAt?: string;
  note?: string;
}

interface PomodoroSession {
  id: string;
  habitId: string;
  userId: string;
  startedAt: string;
  completedAt?: string;
  duration: number;
  type: PomodoroType;
  interrupted: boolean;
}

interface HabitStats {
  habitId: string;
  currentStreak: number;
  longestStreak: number;
  totalCompletions: number;
  totalPomodoros: number;
  completionRate: number;
  lastCompletedDate?: string;
}

interface ContributionDay {
  date: string;
  count: number;
  level: IntensityLevel;
  completed: boolean;
}

interface User {
  id: string;
  email: string;
  name: string;
}

interface GetDashboardResponse {
  habits: Habit[];
  stats: Record<string, HabitStats>;
  todayCompletions: HabitCompletion[];
  todayPomodoros: number;
  totalPomodoros: number;
}

// ============================================
// MOCK DATA
// ============================================

const mockUsers: User[] = [
  {
    id: "user-1",
    email: "john@example.com",
    name: "John Doe"
  }
];

const mockHabits: Habit[] = [
  {
    id: "habit-1",
    userId: "user-1",
    name: "Code 1 hour",
    description: "Practice coding for at least 1 hour",
    frequency: "daily",
    reminderTime: "09:00",
    reminderEnabled: true,
    startDate: "2025-09-01",
    goalDays: 100,
    createdAt: "2025-09-01T00:00:00Z",
    updatedAt: "2025-11-13T00:00:00Z"
  },
  {
    id: "habit-2",
    userId: "user-1",
    name: "Read 20 pages",
    description: "Read at least 20 pages of a book",
    frequency: "daily",
    reminderTime: "21:00",
    reminderEnabled: true,
    startDate: "2025-09-01",
    goalDays: 100,
    createdAt: "2025-09-01T00:00:00Z",
    updatedAt: "2025-11-13T00:00:00Z"
  },
  {
    id: "habit-3",
    userId: "user-1",
    name: "Run 3km",
    description: "Morning run",
    frequency: "weekly",
    targetDaysPerWeek: 3,
    specificDays: [1, 3, 5],
    reminderTime: "07:00",
    reminderEnabled: false,
    startDate: "2025-09-01",
    goalDays: 50,
    createdAt: "2025-09-01T00:00:00Z",
    updatedAt: "2025-11-13T00:00:00Z"
  },
  {
    id: "habit-4",
    userId: "user-1",
    name: "Meditate 10m",
    description: "Morning meditation",
    frequency: "daily",
    reminderTime: "07:30",
    reminderEnabled: true,
    startDate: "2025-09-01",
    goalDays: 100,
    createdAt: "2025-09-01T00:00:00Z",
    updatedAt: "2025-11-13T00:00:00Z"
  }
];

const mockCompletions: HabitCompletion[] = [
  // Habit 1 - Code 1 hour (последние 14 дней)
  { id: "c1-1", habitId: "habit-1", userId: "user-1", date: "2025-11-13", completed: true, pomodoros: 2, completedAt: "2025-11-13T10:00:00Z" },
  { id: "c1-2", habitId: "habit-1", userId: "user-1", date: "2025-11-12", completed: true, pomodoros: 3, completedAt: "2025-11-12T09:30:00Z" },
  { id: "c1-3", habitId: "habit-1", userId: "user-1", date: "2025-11-11", completed: true, pomodoros: 2, completedAt: "2025-11-11T14:00:00Z" },
  { id: "c1-4", habitId: "habit-1", userId: "user-1", date: "2025-11-10", completed: true, pomodoros: 4, completedAt: "2025-11-10T11:00:00Z" },
  { id: "c1-5", habitId: "habit-1", userId: "user-1", date: "2025-11-09", completed: true, pomodoros: 2, completedAt: "2025-11-09T10:00:00Z" },
  { id: "c1-6", habitId: "habit-1", userId: "user-1", date: "2025-11-08", completed: true, pomodoros: 3, completedAt: "2025-11-08T15:00:00Z" },
  { id: "c1-7", habitId: "habit-1", userId: "user-1", date: "2025-11-07", completed: true, pomodoros: 2, completedAt: "2025-11-07T09:00:00Z" },
  { id: "c1-8", habitId: "habit-1", userId: "user-1", date: "2025-11-06", completed: true, pomodoros: 3, completedAt: "2025-11-06T13:00:00Z" },
  { id: "c1-9", habitId: "habit-1", userId: "user-1", date: "2025-11-05", completed: true, pomodoros: 4, completedAt: "2025-11-05T10:30:00Z" },
  { id: "c1-10", habitId: "habit-1", userId: "user-1", date: "2025-11-04", completed: true, pomodoros: 2, completedAt: "2025-11-04T14:00:00Z" },
  { id: "c1-11", habitId: "habit-1", userId: "user-1", date: "2025-11-03", completed: true, pomodoros: 3, completedAt: "2025-11-03T11:00:00Z" },
  { id: "c1-12", habitId: "habit-1", userId: "user-1", date: "2025-11-02", completed: true, pomodoros: 2, completedAt: "2025-11-02T09:30:00Z" },
  { id: "c1-13", habitId: "habit-1", userId: "user-1", date: "2025-11-01", completed: false, pomodoros: 0 },
  { id: "c1-14", habitId: "habit-1", userId: "user-1", date: "2025-10-31", completed: true, pomodoros: 3, completedAt: "2025-10-31T10:00:00Z" },
  
  // Habit 2 - Read 20 pages
  { id: "c2-1", habitId: "habit-2", userId: "user-1", date: "2025-11-13", completed: true, pomodoros: 1, completedAt: "2025-11-13T21:00:00Z" },
  { id: "c2-2", habitId: "habit-2", userId: "user-1", date: "2025-11-12", completed: true, pomodoros: 2, completedAt: "2025-11-12T21:30:00Z" },
  { id: "c2-3", habitId: "habit-2", userId: "user-1", date: "2025-11-11", completed: false, pomodoros: 0 },
  { id: "c2-4", habitId: "habit-2", userId: "user-1", date: "2025-11-10", completed: true, pomodoros: 1, completedAt: "2025-11-10T21:00:00Z" },
  { id: "c2-5", habitId: "habit-2", userId: "user-1", date: "2025-11-09", completed: true, pomodoros: 2, completedAt: "2025-11-09T20:30:00Z" },
  
  // Habit 3 - Run 3km
  { id: "c3-1", habitId: "habit-3", userId: "user-1", date: "2025-11-13", completed: true, pomodoros: 1, completedAt: "2025-11-13T07:00:00Z" },
  { id: "c3-2", habitId: "habit-3", userId: "user-1", date: "2025-11-11", completed: true, pomodoros: 1, completedAt: "2025-11-11T07:00:00Z" },
  { id: "c3-3", habitId: "habit-3", userId: "user-1", date: "2025-11-08", completed: true, pomodoros: 1, completedAt: "2025-11-08T07:00:00Z" },
  
  // Habit 4 - Meditate 10m
  { id: "c4-1", habitId: "habit-4", userId: "user-1", date: "2025-11-13", completed: true, pomodoros: 1, completedAt: "2025-11-13T07:30:00Z" },
  { id: "c4-2", habitId: "habit-4", userId: "user-1", date: "2025-11-12", completed: true, pomodoros: 1, completedAt: "2025-11-12T07:30:00Z" },
  { id: "c4-3", habitId: "habit-4", userId: "user-1", date: "2025-11-11", completed: true, pomodoros: 1, completedAt: "2025-11-11T07:30:00Z" },
  { id: "c4-4", habitId: "habit-4", userId: "user-1", date: "2025-11-10", completed: true, pomodoros: 1, completedAt: "2025-11-10T07:30:00Z" },
  { id: "c4-5", habitId: "habit-4", userId: "user-1", date: "2025-11-09", completed: true, pomodoros: 1, completedAt: "2025-11-09T07:30:00Z" },
  { id: "c4-6", habitId: "habit-4", userId: "user-1", date: "2025-11-08", completed: true, pomodoros: 1, completedAt: "2025-11-08T07:30:00Z" },
  { id: "c4-7", habitId: "habit-4", userId: "user-1", date: "2025-11-07", completed: true, pomodoros: 1, completedAt: "2025-11-07T07:30:00Z" }
];

const mockPomodoroSessions: PomodoroSession[] = [
  { id: "p-1", habitId: "habit-1", userId: "user-1", startedAt: "2025-11-13T09:00:00Z", completedAt: "2025-11-13T09:25:00Z", duration: 1500, type: "work", interrupted: false },
  { id: "p-2", habitId: "habit-1", userId: "user-1", startedAt: "2025-11-13T09:30:00Z", completedAt: "2025-11-13T09:55:00Z", duration: 1500, type: "work", interrupted: false },
  { id: "p-3", habitId: "habit-4", userId: "user-1", startedAt: "2025-11-13T07:30:00Z", completedAt: "2025-11-13T07:40:00Z", duration: 600, type: "work", interrupted: false },
  { id: "p-4", habitId: "habit-1", userId: "user-1", startedAt: "2025-11-12T10:00:00Z", completedAt: "2025-11-12T10:25:00Z", duration: 1500, type: "work", interrupted: false },
  { id: "p-5", habitId: "habit-1", userId: "user-1", startedAt: "2025-11-12T14:00:00Z", duration: 1500, type: "work", interrupted: true }
];

const mockStats: Record<string, HabitStats> = {
  "habit-1": {
    habitId: "habit-1",
    currentStreak: 12,
    longestStreak: 18,
    totalCompletions: 63,
    totalPomodoros: 128,
    completionRate: 85,
    lastCompletedDate: "2025-11-13"
  },
  "habit-2": {
    habitId: "habit-2",
    currentStreak: 5,
    longestStreak: 14,
    totalCompletions: 58,
    totalPomodoros: 72,
    completionRate: 78,
    lastCompletedDate: "2025-11-13"
  },
  "habit-3": {
    habitId: "habit-3",
    currentStreak: 3,
    longestStreak: 8,
    totalCompletions: 28,
    totalPomodoros: 28,
    completionRate: 92,
    lastCompletedDate: "2025-11-13"
  },
  "habit-4": {
    habitId: "habit-4",
    currentStreak: 7,
    longestStreak: 21,
    totalCompletions: 67,
    totalPomodoros: 67,
    completionRate: 90,
    lastCompletedDate: "2025-11-13"
  }
};

const mockContributions: Record<string, ContributionDay[]> = {
  "habit-1": [
    { date: "2025-10-01", count: 3, level: 2, completed: true },
    { date: "2025-10-02", count: 0, level: 0, completed: false },
    { date: "2025-10-03", count: 4, level: 3, completed: true },
    { date: "2025-10-04", count: 2, level: 2, completed: true },
    { date: "2025-10-05", count: 3, level: 2, completed: true },
    { date: "2025-10-06", count: 0, level: 0, completed: false },
    { date: "2025-10-07", count: 2, level: 2, completed: true },
    { date: "2025-10-08", count: 3, level: 2, completed: true },
    { date: "2025-10-09", count: 4, level: 3, completed: true },
    { date: "2025-10-10", count: 2, level: 2, completed: true },
    { date: "2025-10-11", count: 3, level: 2, completed: true },
    { date: "2025-10-12", count: 0, level: 0, completed: false },
    { date: "2025-10-13", count: 2, level: 2, completed: true },
    { date: "2025-10-14", count: 4, level: 3, completed: true },
    { date: "2025-11-01", count: 0, level: 0, completed: false },
    { date: "2025-11-02", count: 2, level: 2, completed: true },
    { date: "2025-11-03", count: 3, level: 2, completed: true },
    { date: "2025-11-04", count: 2, level: 2, completed: true },
    { date: "2025-11-05", count: 4, level: 3, completed: true },
    { date: "2025-11-06", count: 3, level: 2, completed: true },
    { date: "2025-11-07", count: 2, level: 2, completed: true },
    { date: "2025-11-08", count: 3, level: 2, completed: true },
    { date: "2025-11-09", count: 2, level: 2, completed: true },
    { date: "2025-11-10", count: 4, level: 3, completed: true },
    { date: "2025-11-11", count: 2, level: 2, completed: true },
    { date: "2025-11-12", count: 3, level: 2, completed: true },
    { date: "2025-11-13", count: 2, level: 2, completed: true }
  ]
};

const mockDashboard: GetDashboardResponse = {
  habits: mockHabits,
  stats: mockStats,
  todayCompletions: mockCompletions.filter(c => c.date === "2025-11-13"),
  todayPomodoros: 2,
  totalPomodoros: 128
};

// ============================================
// EXPORT
// ============================================

export type {
  Habit,
  HabitCompletion,
  PomodoroSession,
  HabitStats,
  ContributionDay,
  User,
  FrequencyType,
  PomodoroType,
  IntensityLevel,
  GetDashboardResponse
};

export {
  mockUsers,
  mockHabits,
  mockCompletions,
  mockPomodoroSessions,
  mockStats,
  mockContributions,
  mockDashboard
};
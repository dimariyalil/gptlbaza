// Mock data for lbazaG platform demo

export const kpiData = {
  dailyActiveUsers: {
    value: 15420,
    change: +12.5,
    trend: 'up'
  },
  monthlyRevenue: {
    value: 2850000,
    change: +8.3,
    trend: 'up'
  },
  averageRTP: {
    value: 94.2,
    change: -0.3,
    trend: 'down'
  },
  conversionRate: {
    value: 3.8,
    change: +15.2,
    trend: 'up'
  }
};

export const revenueChartData = [
  { month: 'Jan', revenue: 2100000, players: 12000 },
  { month: 'Feb', revenue: 2300000, players: 13200 },
  { month: 'Mar', revenue: 2450000, players: 14100 },
  { month: 'Apr', revenue: 2600000, players: 14800 },
  { month: 'May', revenue: 2750000, players: 15200 },
  { month: 'Jun', revenue: 2850000, players: 15420 }
];

export const playerSegments = [
  { name: 'High Value', value: 25, color: '#8884d8', count: 3855 },
  { name: 'Regular', value: 45, color: '#82ca9d', count: 6939 },
  { name: 'Casual', value: 20, color: '#ffc658', count: 3084 },
  { name: 'New', value: 10, color: '#ff7300', count: 1542 }
];

export const aiAgentsStatus = [
  {
    name: 'Analytics Agent',
    status: 'active',
    lastRun: '2 min ago',
    insights: 23,
    accuracy: 94.2
  },
  {
    name: 'Customer Service Agent',
    status: 'active',
    lastRun: '5 min ago',
    insights: 156,
    accuracy: 91.8
  },
  {
    name: 'Marketing Agent',
    status: 'active',
    lastRun: '1 min ago',
    insights: 45,
    accuracy: 89.6
  },
  {
    name: 'Risk Management Agent',
    status: 'active',
    lastRun: 'just now',
    insights: 12,
    accuracy: 96.1
  }
];

export const recentInsights = [
  {
    id: 1,
    agent: 'Analytics Agent',
    type: 'anomaly',
    title: 'Unusual spike in slot game activity',
    description: 'Detected 25% increase in slot game sessions during non-peak hours',
    timestamp: '5 minutes ago',
    severity: 'medium',
    actions: ['Investigate traffic source', 'Check for promotional campaigns']
  },
  {
    id: 2,
    agent: 'Risk Management Agent',
    type: 'alert',
    title: 'Potential fraud pattern detected',
    description: 'Multiple accounts showing similar betting patterns from same IP range',
    timestamp: '12 minutes ago',
    severity: 'high',
    actions: ['Block suspicious accounts', 'Enhanced monitoring']
  },
  {
    id: 3,
    agent: 'Marketing Agent',
    type: 'recommendation',
    title: 'Optimal timing for email campaign',
    description: 'ML analysis suggests 18:30-19:30 for highest engagement rates',
    timestamp: '1 hour ago',
    severity: 'low',
    actions: ['Schedule campaign', 'A/B test timing']
  }
];

export const hrMetrics = {
  totalEmployees: 247,
  activeToday: 231,
  avgPerformance: 87.3,
  recruitmentPipeline: 15
};

export const employees = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Senior Data Analyst',
    department: 'Analytics',
    performance: 94,
    status: 'online'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    position: 'AI Engineer',
    department: 'Technology',
    performance: 91,
    status: 'online'
  },
  {
    id: 3,
    name: 'David Chen',
    position: 'Customer Success Manager',
    department: 'Support',
    performance: 88,
    status: 'away'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    position: 'Marketing Specialist',
    department: 'Marketing',
    performance: 92,
    status: 'online'
  }
];

export const systemMetrics = {
  cpuUsage: 68,
  memoryUsage: 72,
  diskUsage: 45,
  networkLatency: 23,
  uptime: 99.97
};
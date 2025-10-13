export interface TeamData {
  name: string;
  logo: string;
  form: ('W' | 'L' | 'D')[];
  flag: string;
}

export interface MatchData {
  id: number;
  league: string;
  leagueBadge: string;
  round: string;
  homeTeam: TeamData;
  awayTeam: TeamData;
  kickoff: Date;
  startsIn: string;
  isLive: boolean;
  headToHead: { home: number; draw: number; away: number };
  communityPrediction: { home: number; draw: number; away: number };
  aiSuggestion?: 0 | 1 | 2;
  venue: string;
  weather: string;
}

export interface LeaderboardUser {
  rank: number;
  address: string;
  baseName?: string;
  avatar: string;
  accuracy: number;
  predictions: number;
  earnings: number;
  badges: string[];
}

export const MOCK_MATCHES: MatchData[] = [
  {
    id: 1001,
    league: 'Premier League',
    leagueBadge: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    round: 'Round 15',
    homeTeam: {
      name: 'Man City',
      logo: 'https://media.api-sports.io/football/teams/50.png',
      form: ['W', 'W', 'D', 'W', 'W'],
      flag: '🔵'
    },
    awayTeam: {
      name: 'Arsenal',
      logo: 'https://media.api-sports.io/football/teams/42.png',
      form: ['W', 'L', 'W', 'W', 'D'],
      flag: '🔴'
    },
    kickoff: new Date(Date.now() + 2 * 60 * 60 * 1000),
    startsIn: 'in 2 hours',
    isLive: false,
    headToHead: { home: 3, draw: 1, away: 2 },
    communityPrediction: { home: 45, draw: 25, away: 30 },
    aiSuggestion: 0,
    venue: 'Etihad Stadium',
    weather: '☁️ Cloudy, 12°C'
  },
  {
    id: 1002,
    league: 'La Liga',
    leagueBadge: '🇪🇸',
    round: 'Round 12',
    homeTeam: {
      name: 'Real Madrid',
      logo: 'https://media.api-sports.io/football/teams/541.png',
      form: ['W', 'W', 'W', 'D', 'W'],
      flag: '⚪'
    },
    awayTeam: {
      name: 'Barcelona',
      logo: 'https://media.api-sports.io/football/teams/529.png',
      form: ['W', 'W', 'L', 'W', 'W'],
      flag: '🔵'
    },
    kickoff: new Date(Date.now() + 24 * 60 * 60 * 1000),
    startsIn: 'tomorrow',
    isLive: false,
    headToHead: { home: 4, draw: 2, away: 4 },
    communityPrediction: { home: 40, draw: 20, away: 40 },
    aiSuggestion: 2,
    venue: 'Santiago Bernabéu',
    weather: '☀️ Sunny, 18°C'
  },
  {
    id: 1003,
    league: 'Bundesliga',
    leagueBadge: '🇩🇪',
    round: 'Round 10',
    homeTeam: {
      name: 'Bayern Munich',
      logo: 'https://media.api-sports.io/football/teams/157.png',
      form: ['W', 'W', 'W', 'W', 'D'],
      flag: '🔴'
    },
    awayTeam: {
      name: 'Dortmund',
      logo: 'https://media.api-sports.io/football/teams/165.png',
      form: ['W', 'D', 'W', 'L', 'W'],
      flag: '🟡'
    },
    kickoff: new Date(Date.now() + 5 * 60 * 60 * 1000),
    startsIn: 'in 5 hours',
    isLive: false,
    headToHead: { home: 5, draw: 2, away: 3 },
    communityPrediction: { home: 55, draw: 20, away: 25 },
    venue: 'Allianz Arena',
    weather: '🌧️ Rainy, 8°C'
  },
  {
    id: 1004,
    league: 'Serie A',
    leagueBadge: '🇮🇹',
    round: 'Round 14',
    homeTeam: {
      name: 'Inter Milan',
      logo: 'https://media.api-sports.io/football/teams/505.png',
      form: ['W', 'W', 'D', 'W', 'L'],
      flag: '🔵'
    },
    awayTeam: {
      name: 'Juventus',
      logo: 'https://media.api-sports.io/football/teams/496.png',
      form: ['D', 'W', 'W', 'D', 'W'],
      flag: '⚫'
    },
    kickoff: new Date(Date.now() + 26 * 60 * 60 * 1000),
    startsIn: 'tomorrow',
    isLive: false,
    headToHead: { home: 3, draw: 4, away: 3 },
    communityPrediction: { home: 38, draw: 30, away: 32 },
    venue: 'San Siro',
    weather: '☁️ Cloudy, 14°C'
  },
  {
    id: 1005,
    league: 'Ligue 1',
    leagueBadge: '🇫🇷',
    round: 'Round 11',
    homeTeam: {
      name: 'PSG',
      logo: 'https://media.api-sports.io/football/teams/85.png',
      form: ['W', 'W', 'W', 'D', 'W'],
      flag: '🔴'
    },
    awayTeam: {
      name: 'Marseille',
      logo: 'https://media.api-sports.io/football/teams/81.png',
      form: ['L', 'W', 'D', 'W', 'L'],
      flag: '⚪'
    },
    kickoff: new Date(Date.now() + 8 * 60 * 60 * 1000),
    startsIn: 'in 8 hours',
    isLive: false,
    headToHead: { home: 6, draw: 2, away: 2 },
    communityPrediction: { home: 60, draw: 22, away: 18 },
    venue: 'Parc des Princes',
    weather: '☀️ Clear, 16°C'
  },
  {
    id: 1006,
    league: 'Süper Lig',
    leagueBadge: '🇹🇷',
    round: 'Round 13',
    homeTeam: {
      name: 'Galatasaray',
      logo: 'https://media.api-sports.io/football/teams/610.png',
      form: ['W', 'W', 'W', 'D', 'W'],
      flag: '🟡'
    },
    awayTeam: {
      name: 'Fenerbahçe',
      logo: 'https://media.api-sports.io/football/teams/609.png',
      form: ['W', 'D', 'W', 'W', 'L'],
      flag: '🟡'
    },
    kickoff: new Date(Date.now() + 12 * 60 * 60 * 1000),
    startsIn: 'in 12 hours',
    isLive: false,
    headToHead: { home: 4, draw: 3, away: 3 },
    communityPrediction: { home: 42, draw: 28, away: 30 },
    aiSuggestion: 1,
    venue: 'Türk Telekom Stadium',
    weather: '🌤️ Partly Cloudy, 11°C'
  },
];

export const MOCK_LEADERBOARD: LeaderboardUser[] = [
  {
    rank: 1,
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f38a1b2',
    baseName: 'alice.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice',
    accuracy: 94,
    predictions: 127,
    earnings: 450,
    badges: ['🎯', '🔥', '⭐']
  },
  {
    rank: 2,
    address: '0x8ab3F0d9f5c6e1234567890abcdef1234567890a',
    baseName: 'bob.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob',
    accuracy: 91,
    predictions: 89,
    earnings: 380,
    badges: ['🎯', '🔥']
  },
  {
    rank: 3,
    address: '0x9bc4E1e2d3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8',
    baseName: 'carol.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carol',
    accuracy: 87,
    predictions: 156,
    earnings: 290,
    badges: ['🎯', '⭐']
  },
  {
    rank: 4,
    address: '0xacd5F2f3e4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9',
    baseName: 'dave.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dave',
    accuracy: 85,
    predictions: 78,
    earnings: 240,
    badges: ['🎯']
  },
  {
    rank: 5,
    address: '0xbde6G3g4f5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0',
    baseName: 'eve.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=eve',
    accuracy: 82,
    predictions: 134,
    earnings: 215,
    badges: ['🔥']
  },
  {
    rank: 6,
    address: '0xcef7H4h5g6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1',
    baseName: 'frank.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=frank',
    accuracy: 80,
    predictions: 92,
    earnings: 180,
    badges: []
  },
  {
    rank: 7,
    address: '0xdf08I5i6h7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
    baseName: 'grace.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=grace',
    accuracy: 78,
    predictions: 67,
    earnings: 145,
    badges: []
  },
  {
    rank: 8,
    address: '0xe019J6j7i8e9f0a1b2c3d4e5f6a7b8c9d0e1f2g3',
    baseName: 'henry.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=henry',
    accuracy: 76,
    predictions: 103,
    earnings: 120,
    badges: []
  },
  {
    rank: 9,
    address: '0xf12aK7k8j9f0a1b2c3d4e5f6a7b8c9d0e1f2g3h4',
    baseName: 'iris.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=iris',
    accuracy: 74,
    predictions: 54,
    earnings: 95,
    badges: []
  },
  {
    rank: 10,
    address: '0x023bL8l9k0a1b2c3d4e5f6a7b8c9d0e1f2g3h4i5',
    baseName: 'jack.base',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jack',
    accuracy: 73,
    predictions: 81,
    earnings: 80,
    badges: []
  },
];

export const ACTIVITY_TEMPLATES = [
  { template: '{user} predicted {outcome} for {match}', type: 'prediction' },
  { template: '{user} earned ${amount} prize!', type: 'reward' },
  { template: '{user} achieved {badge} badge', type: 'achievement' },
  { template: '{count} new predictions in last hour', type: 'stat' },
  { template: 'Match {matchId} starts in {time}', type: 'match' },
  { template: '{user} joined the competition', type: 'user' },
];

export const generateRandomActivity = () => {
  const users = MOCK_LEADERBOARD.map(u => u.baseName || u.address.slice(0, 10));
  const outcomes = ['Home Win', 'Draw', 'Away Win'];
  const matches = MOCK_MATCHES.map(m => `${m.homeTeam.name} vs ${m.awayTeam.name}`);
  const badges = ['First Prediction', 'Hat Trick', 'League Expert', 'Hot Streak'];
  
  const template = ACTIVITY_TEMPLATES[Math.floor(Math.random() * ACTIVITY_TEMPLATES.length)];
  
  let text = template.template
    .replace('{user}', users[Math.floor(Math.random() * users.length)])
    .replace('{outcome}', outcomes[Math.floor(Math.random() * outcomes.length)])
    .replace('{match}', matches[Math.floor(Math.random() * matches.length)])
    .replace('{amount}', String(Math.floor(Math.random() * 100) + 10))
    .replace('{badge}', badges[Math.floor(Math.random() * badges.length)])
    .replace('{count}', String(Math.floor(Math.random() * 20) + 5))
    .replace('{matchId}', String(1000 + Math.floor(Math.random() * 100)))
    .replace('{time}', ['5 minutes', '30 minutes', '1 hour'][Math.floor(Math.random() * 3)]);
  
  return {
    id: Date.now() + Math.random(),
    text,
    type: template.type,
    time: 'Just now'
  };
};


import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import {
  BookOpen,
  Clock,
  Tag,
  Flame,
  TrendingUp,
  Trophy,
  Target,
  Users,
  Star,
  Heart,
  Award,
  ChevronDown,
  Filter,
  ArrowUp,
  ArrowDown,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Mock data structures that match real API responses
interface ReadingStats {
  articlesRead: {
    total: number;
    thisWeek: number;
    thisMonth: number;
    weeklyData: number[];
  };
  timeSpent: {
    totalMinutes: number;
    thisWeek: number;
    thisMonth: number;
    averagePerDay: number;
  };
  topicsExplored: {
    total: number;
    breakdown: { topic: string; percentage: number; articles: number }[];
  };
  readingStreak: {
    current: number;
    longest: number;
    streakDays: string[];
  };
}

interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  articlesRead: number;
  challengesWon: number;
  currentStreak: number;
  points: number;
  isCurrentUser?: boolean;
}

interface Challenge {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  prize: string;
  topUsers: {
    rank: number;
    name: string;
    score: number;
    badge?: string;
  }[];
  userRank: number;
  userScore: number;
  likes: number;
  userLiked: boolean;
}

const MyStats = () => {
  const { user, isAuthenticated } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'all'>('week');
  const [leaderboardFilter, setLeaderboardFilter] = useState<'all' | 'campus'>('all');
  const [sortBy, setSortBy] = useState<'articles' | 'challenges' | 'streak'>('articles');
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  // Mock data - in real app, this would come from API
  const [stats, setStats] = useState<ReadingStats>({
    articlesRead: {
      total: 342,
      thisWeek: 28,
      thisMonth: 105,
      weeklyData: [4, 6, 8, 5, 7, 9, 12]
    },
    timeSpent: {
      totalMinutes: 2840,
      thisWeek: 320,
      thisMonth: 1250,
      averagePerDay: 45
    },
    topicsExplored: {
      total: 12,
      breakdown: [
        { topic: "Campus News", percentage: 35, articles: 120 },
        { topic: "Technology", percentage: 28, articles: 96 },
        { topic: "Sports", percentage: 18, articles: 62 },
        { topic: "Politics", percentage: 12, articles: 41 },
        { topic: "Science", percentage: 7, articles: 23 }
      ]
    },
    readingStreak: {
      current: 15,
      longest: 28,
      streakDays: ["2024-01-01", "2024-01-02", "2024-01-03"] // last 3 days
    }
  });

  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([
    { rank: 1, id: "1", name: "Sarah Chen", avatar: "SC", articlesRead: 456, challengesWon: 8, currentStreak: 42, points: 2840 },
    { rank: 2, id: "2", name: "Alex Rivera", avatar: "AR", articlesRead: 423, challengesWon: 6, currentStreak: 28, points: 2650 },
    { rank: 3, id: "3", name: "Jordan Smith", avatar: "JS", articlesRead: 398, challengesWon: 7, currentStreak: 35, points: 2580 },
    { rank: 4, id: "4", name: "Demo User", avatar: "DU", articlesRead: 342, challengesWon: 3, currentStreak: 15, points: 2180, isCurrentUser: true },
    { rank: 5, id: "5", name: "Maya Patel", avatar: "MP", articlesRead: 312, challengesWon: 4, currentStreak: 22, points: 2050 },
    { rank: 6, id: "6", name: "Chris Johnson", avatar: "CJ", articlesRead: 289, challengesWon: 2, currentStreak: 18, points: 1920 },
    { rank: 7, id: "7", name: "Taylor Wong", avatar: "TW", articlesRead: 267, challengesWon: 5, currentStreak: 12, points: 1840 },
    { rank: 8, id: "8", name: "Jamie Lee", avatar: "JL", articlesRead: 245, challengesWon: 3, currentStreak: 8, points: 1720 }
  ]);

  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "1",
      name: "Sports News Sprint",
      description: "Read 50 sports articles this month",
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      participants: 1247,
      prize: "AirPods Pro",
      topUsers: [
        { rank: 1, name: "Mike Torres", score: 47, badge: "🏆" },
        { rank: 2, name: "Lisa Park", score: 44, badge: "🥈" },
        { rank: 3, name: "Ryan Kim", score: 41, badge: "🥉" }
      ],
      userRank: 23,
      userScore: 18,
      likes: 342,
      userLiked: true
    },
    {
      id: "2", 
      name: "Campus News Champion",
      description: "Stay updated with 30 campus stories",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      participants: 856,
      prize: "iPad Mini",
      topUsers: [
        { rank: 1, name: "Emma Davis", score: 28, badge: "🏆" },
        { rank: 2, name: "Noah Wilson", score: 26, badge: "🥈" },
        { rank: 3, name: "Ava Brown", score: 24, badge: "🥉" }
      ],
      userRank: 12,
      userScore: 15,
      likes: 567,
      userLiked: false
    },
    {
      id: "3",
      name: "Tech Tuesday Challenge",
      description: "Read tech news every Tuesday for 4 weeks",
      startDate: "2024-01-02",
      endDate: "2024-01-30",
      participants: 423,
      prize: "Wireless Charger",
      topUsers: [
        { rank: 1, name: "Alex Chen", score: 4, badge: "🏆" },
        { rank: 2, name: "Sam Rodriguez", score: 4, badge: "🥈" },
        { rank: 3, name: "Jordan Martinez", score: 3, badge: "🥉" }
      ],
      userRank: 8,
      userScore: 3,
      likes: 289,
      userLiked: true
    }
  ]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-midnight-black text-soft-gray flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Trophy className="w-16 h-16 text-electric-blue mx-auto mb-6" />
          <h1 className="text-2xl font-display font-bold text-soft-gray mb-4">
            Sign in to view your stats
          </h1>
          <p className="text-soft-gray/70 mb-6">
            Track your reading progress, compete in challenges, and see how you rank among other readers.
          </p>
          <Link to="/login">
            <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-3">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const toggleChallengeLike = (challengeId: string) => {
    setChallenges(prev => prev.map(challenge => 
      challenge.id === challengeId 
        ? { 
            ...challenge, 
            userLiked: !challenge.userLiked,
            likes: challenge.userLiked ? challenge.likes - 1 : challenge.likes + 1
          }
        : challenge
    ));
  };

  const nextChallenge = () => {
    setCurrentChallengeIndex((prev) => 
      prev === challenges.length - 1 ? 0 : prev + 1
    );
  };

  const prevChallenge = () => {
    setCurrentChallengeIndex((prev) => 
      prev === 0 ? challenges.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Personal Stats Dashboard */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-6">
              Your Reading <span className="text-electric-blue">Stats</span>
            </h1>
            <p className="text-xl text-soft-gray/70 max-w-2xl mx-auto">
              Track your progress and beat your bests
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Articles Read Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-electric-blue">Articles Read</h3>
                  <p className="text-xs text-soft-gray/60">This {selectedPeriod}</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-2">
                {selectedPeriod === 'week' ? stats.articlesRead.thisWeek : 
                 selectedPeriod === 'month' ? stats.articlesRead.thisMonth : 
                 stats.articlesRead.total}
              </div>
              <div className="h-16 bg-gray-800/50 rounded-lg flex items-end justify-between px-2 py-1">
                {stats.articlesRead.weeklyData.map((value, index) => (
                  <div
                    key={index}
                    className="bg-electric-blue/60 rounded-sm w-4"
                    style={{ height: `${(value / Math.max(...stats.articlesRead.weeklyData)) * 100}%` }}
                  />
                ))}
              </div>
            </Card>

            {/* Time Spent Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-neon-green">Time Spent Reading</h3>
                  <p className="text-xs text-soft-gray/60">This month</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-2">
                {Math.floor(stats.timeSpent.thisMonth / 60)}h {stats.timeSpent.thisMonth % 60}m
              </div>
              <div className="relative w-20 h-20 mx-auto">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-neon-green"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="75, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-neon-green">75%</span>
                </div>
              </div>
            </Card>

            {/* Topics Explored Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-vibrant-pink/20 rounded-xl flex items-center justify-center mr-4">
                  <Tag className="w-6 h-6 text-vibrant-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-vibrant-pink">Topics Explored</h3>
                  <p className="text-xs text-soft-gray/60">Total categories</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-4">
                {stats.topicsExplored.total}
              </div>
              <div className="space-y-2">
                {stats.topicsExplored.breakdown.slice(0, 3).map((topic, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-soft-gray/80">{topic.topic}</span>
                    <span className="text-vibrant-pink font-medium">{topic.percentage}%</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reading Streak Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Flame className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-500">Reading Streak</h3>
                  <p className="text-xs text-soft-gray/60">Current streak</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-2">
                {stats.readingStreak.current} days
              </div>
              <div className="flex space-x-1 mb-2">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-sm ${
                      index < stats.readingStreak.current % 7 
                        ? 'bg-orange-500' 
                        : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-soft-gray/60">
                Best: {stats.readingStreak.longest} days
              </p>
            </Card>
          </div>

          {/* View Full Stats CTA */}
          <div className="text-center">
            <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-4 rounded-full">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Full Stats
            </Button>
          </div>
        </div>
      </section>

      {/* Global Leaderboard */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6">
              Global <span className="text-electric-blue">Leaderboard</span>
            </h2>
            <p className="text-xl text-soft-gray/70">
              See how you rank among readers
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2">
              <Button
                variant={leaderboardFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setLeaderboardFilter('all')}
                className={leaderboardFilter === 'all' 
                  ? 'bg-electric-blue text-midnight-black' 
                  : 'border-electric-blue text-electric-blue hover:bg-electric-blue/10'
                }
              >
                All Readers
              </Button>
              <Button
                variant={leaderboardFilter === 'campus' ? 'default' : 'outline'}
                onClick={() => setLeaderboardFilter('campus')}
                className={leaderboardFilter === 'campus' 
                  ? 'bg-electric-blue text-midnight-black' 
                  : 'border-electric-blue text-electric-blue hover:bg-electric-blue/10'
                }
              >
                Campus Only
              </Button>
            </div>
            <div className="flex gap-2 ml-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy('articles')}
                className={`border-electric-blue text-electric-blue hover:bg-electric-blue/10 ${
                  sortBy === 'articles' ? 'bg-electric-blue/20' : ''
                }`}
              >
                <BookOpen className="w-4 h-4 mr-1" />
                Articles
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy('challenges')}
                className={`border-electric-blue text-electric-blue hover:bg-electric-blue/10 ${
                  sortBy === 'challenges' ? 'bg-electric-blue/20' : ''
                }`}
              >
                <Trophy className="w-4 h-4 mr-1" />
                Challenges
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy('streak')}
                className={`border-electric-blue text-electric-blue hover:bg-electric-blue/10 ${
                  sortBy === 'streak' ? 'bg-electric-blue/20' : ''
                }`}
              >
                <Flame className="w-4 h-4 mr-1" />
                Streak
              </Button>
            </div>
          </div>

          {/* Leaderboard Table */}
          <Card className="bg-gray-800/30 border-electric-blue/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr className="text-left">
                    <th className="px-6 py-4 text-electric-blue font-semibold">Rank</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Reader</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Articles</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Challenges</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Streak</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((user) => (
                    <tr 
                      key={user.id} 
                      className={`border-t border-gray-700/50 hover:bg-gray-800/30 transition-colors ${
                        user.isCurrentUser ? 'bg-electric-blue/10 border-electric-blue/30' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className={`font-bold text-lg ${
                            user.rank === 1 ? 'text-yellow-500' :
                            user.rank === 2 ? 'text-gray-400' :
                            user.rank === 3 ? 'text-orange-600' :
                            user.isCurrentUser ? 'text-electric-blue' : 'text-soft-gray'
                          }`}>
                            #{user.rank}
                          </span>
                          {user.rank <= 3 && (
                            <span className="ml-2">
                              {user.rank === 1 ? '🏆' : user.rank === 2 ? '🥈' : '🥉'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                            user.isCurrentUser 
                              ? 'bg-electric-blue text-midnight-black' 
                              : 'bg-gray-700 text-soft-gray'
                          }`}>
                            {user.avatar}
                          </div>
                          <span className={`font-medium ${
                            user.isCurrentUser ? 'text-electric-blue' : 'text-soft-gray'
                          }`}>
                            {user.name}
                            {user.isCurrentUser && (
                              <Badge className="ml-2 bg-electric-blue/20 text-electric-blue border-electric-blue/30 text-xs">
                                You
                              </Badge>
                            )}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-soft-gray">{user.articlesRead}</td>
                      <td className="px-6 py-4 font-medium text-soft-gray">{user.challengesWon}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Flame className="w-4 h-4 text-orange-500 mr-1" />
                          <span className="font-medium text-soft-gray">{user.currentStreak}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-electric-blue">{user.points.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold px-8 py-4 rounded-full">
              <Target className="w-5 h-5 mr-2" />
              Climb the Ranks �� Join a Challenge
            </Button>
          </div>
        </div>
      </section>

      {/* Challenge Rankings */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6">
              Challenge <span className="text-electric-blue">Rankings</span>
            </h2>
            <p className="text-xl text-soft-gray/70">
              Compete in topics like 'Sports News Sprint'
            </p>
          </div>

          {/* Challenge Carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-bold text-soft-gray">
                Active Challenges
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevChallenge}
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextChallenge}
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card 
                  key={challenge.id} 
                  className={`bg-gray-800/30 border-electric-blue/30 p-6 transition-all duration-300 hover:bg-gray-800/40 ${
                    index === currentChallengeIndex ? 'ring-2 ring-electric-blue/50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-vibrant-pink mb-1">
                        {challenge.name}
                      </h4>
                      <p className="text-sm text-soft-gray/70 mb-2">
                        {challenge.description}
                      </p>
                      <div className="flex items-center text-xs text-soft-gray/60">
                        <Users className="w-3 h-3 mr-1" />
                        {challenge.participants.toLocaleString()} participants
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleChallengeLike(challenge.id)}
                      className="p-1 hover:bg-transparent"
                    >
                      <Heart 
                        className={`w-5 h-5 ${
                          challenge.userLiked 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-soft-gray/60 hover:text-red-500'
                        }`} 
                      />
                      <span className="ml-1 text-xs">{challenge.likes}</span>
                    </Button>
                  </div>

                  {/* Top 3 Users */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-electric-blue mb-2">Leaderboard</h5>
                    <div className="space-y-2">
                      {challenge.topUsers.map((topUser) => (
                        <div key={topUser.rank} className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <span className="text-lg mr-2">{topUser.badge}</span>
                            <span className="text-soft-gray/80">{topUser.name}</span>
                          </div>
                          <span className="font-medium text-neon-green">{topUser.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* User's Rank */}
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-soft-gray/70">Your rank:</span>
                      <span className="font-bold text-electric-blue">#{challenge.userRank}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-soft-gray/70">Your score:</span>
                      <span className="font-bold text-neon-green">{challenge.userScore}</span>
                    </div>
                  </div>

                  {/* Prize */}
                  <div className="text-center">
                    <Badge className="bg-vibrant-pink/20 text-vibrant-pink border-vibrant-pink/30 mb-2">
                      <Award className="w-3 h-3 mr-1" />
                      Prize: {challenge.prize}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-4 rounded-full">
              <Trophy className="w-5 h-5 mr-2" />
              Join a Challenge – Win Rewards
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyStats;

'use client'

import { useState } from 'react'
import {
  Calendar,
  MessageSquare,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Star,
  Trophy,
  Radio,
  Music,
  Mic,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Navigation } from '@/components/navigation'

export default function CommunityPage() {
  const [votedSongs, setVotedSongs] = useState<Set<number>>(new Set())

  const upcomingEvents = [
    {
      id: 1,
      title: 'Electronic Music Festival 2024',
      date: 'December 15, 2024',
      time: '8:00 PM - 2:00 AM',
      location: 'The Electric Venue',
      type: 'Concert',
      attendees: 1250,
      image: '/api/placeholder/400/200',
      description: 'Join us for the biggest electronic music event of the year featuring top DJs from around the world.',
      featured: true
    },
    {
      id: 2,
      title: 'DJ Workshop: Beat Matching 101',
      date: 'December 20, 2024',
      time: '3:00 PM - 6:00 PM',
      location: 'PULSE Studio',
      type: 'Workshop',
      attendees: 45,
      description: 'Learn the fundamentals of DJing with our professional instructors.'
    },
    {
      id: 3,
      title: 'Community Listening Party',
      date: 'December 22, 2024',
      time: '7:00 PM - 11:00 PM',
      location: 'Downtown Lounge',
      type: 'Social',
      attendees: 180,
      description: 'Join fellow music lovers for an evening of discovering new tracks together.'
    },
    {
      id: 4,
      title: 'New Year DJ Battle',
      date: 'December 31, 2024',
      time: '10:00 PM - 3:00 AM',
      location: 'The Underground',
      type: 'Competition',
      attendees: 890,
      description: 'Watch local DJs compete for the title of 2025 Champion.'
    }
  ]

  const messageBoard = [
    {
      id: 1,
      user: 'MusicLover92',
      avatar: 'ML',
      time: '2 hours ago',
      message: 'Just discovered this amazing new artist called Cyber Pulse through DJ Luna\'s morning show! Anyone else heard of them?',
      likes: 23,
      replies: 8,
      category: 'Music Discovery'
    },
    {
      id: 2,
      user: 'BeatHunter',
      avatar: 'BH',
      time: '4 hours ago',
      message: 'Looking for recommendations for underground techno artists. Hit me with your favorites!',
      likes: 15,
      replies: 12,
      category: 'Recommendations'
    },
    {
      id: 3,
      user: 'ElectroFan',
      avatar: 'EF',
      time: '6 hours ago',
      message: 'Tonight\'s show with DJ Phoenix was absolutely incredible! That industrial set was mind-blowing 🔥',
      likes: 34,
      replies: 6,
      category: 'Show Review'
    },
    {
      id: 4,
      user: 'SynthwaveQueen',
      avatar: 'SQ',
      time: '8 hours ago',
      message: 'Anyone attending the Electronic Music Festival next week? Would love to meet some fellow PULSE listeners there!',
      likes: 19,
      replies: 15,
      category: 'Events'
    }
  ]

  const topSongsVoting = [
    {
      id: 1,
      title: 'Midnight Drive',
      artist: 'RetroWave',
      upvotes: 847,
      downvotes: 23,
      percentage: 97,
      isNew: false
    },
    {
      id: 2,
      title: 'Electric Dreams',
      artist: 'Neon Waves',
      upvotes: 723,
      downvotes: 45,
      percentage: 94,
      isNew: true
    },
    {
      id: 3,
      title: 'Digital Love',
      artist: 'Synthia',
      upvotes: 692,
      downvotes: 38,
      percentage: 95,
      isNew: false
    },
    {
      id: 4,
      title: 'Cyber Pulse',
      artist: 'Dark Frequency',
      upvotes: 654,
      downvotes: 67,
      percentage: 91,
      isNew: true
    },
    {
      id: 5,
      title: 'Thunder Strike',
      artist: 'Lightning Bolt',
      upvotes: 589,
      downvotes: 42,
      percentage: 93,
      isNew: false
    }
  ]

  const communitySpotlights = [
    {
      user: 'TechnoMaster',
      achievement: 'Top Contributor',
      description: 'Most helpful music recommendations this month',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      user: 'BeatDetective',
      achievement: 'Music Discovery',
      description: 'Found 15 new artists through community posts',
      icon: Star,
      color: 'text-blue-500'
    },
    {
      user: 'MixMaster',
      achievement: 'Event Organizer',
      description: 'Organized 3 successful community meetups',
      icon: Users,
      color: 'text-green-500'
    }
  ]

  const handleVote = (songId: number, voteType: 'up' | 'down') => {
    setVotedSongs(prev => new Set(prev.add(songId)))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            COMMUNITY HUB
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect, discover, and celebrate music together. Join discussions, vote on tracks, and never miss an event.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">24.7K</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageSquare className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">1.2K</div>
              <div className="text-sm text-muted-foreground">Messages Today</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-muted-foreground">Upcoming Events</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">847</div>
              <div className="text-sm text-muted-foreground">Song Votes</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="voting">Top Songs</TabsTrigger>
            <TabsTrigger value="spotlights">Spotlights</TabsTrigger>
          </TabsList>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className={`overflow-hidden ${event.featured ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5' : ''}`}>
                  {event.featured && (
                    <div className="bg-gradient-to-r from-primary to-secondary p-3">
                      <div className="flex items-center space-x-2 text-white">
                        <Star className="h-4 w-4" />
                        <span className="text-sm font-medium">FEATURED EVENT</span>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant={event.type === 'Concert' ? 'default' : 'secondary'}>
                        {event.type}
                      </Badge>
                      <div className="text-sm text-muted-foreground flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">Join Event</Button>
                      <Button variant="outline">Share</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Community Discussions</h2>
              <Button>Start New Discussion</Button>
            </div>

            <div className="space-y-4">
              {messageBoard.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{post.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{post.user}</span>
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>
                          <span className="text-sm text-muted-foreground">{post.time}</span>
                        </div>

                        <p className="mb-3">{post.message}</p>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.replies} replies</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Voting Tab */}
          <TabsContent value="voting" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Vote for Top Songs</h2>
              <p className="text-muted-foreground">Help decide what gets played more often on PULSE</p>
            </div>

            <div className="space-y-4">
              {topSongsVoting.map((song, index) => (
                <Card key={song.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-primary">#{index + 1}</div>
                      <div className="w-12 h-12 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Music className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold">{song.title}</h3>
                          {song.isNew && (
                            <Badge className="animate-pulse">NEW</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{song.artist}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <Progress value={song.percentage} className="w-24 mb-2" />
                        <div className="text-sm text-muted-foreground">{song.percentage}% positive</div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant={votedSongs.has(song.id) ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleVote(song.id, 'up')}
                          disabled={votedSongs.has(song.id)}
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {song.upvotes}
                        </Button>
                        <Button
                          variant={votedSongs.has(song.id) ? 'secondary' : 'outline'}
                          size="sm"
                          onClick={() => handleVote(song.id, 'down')}
                          disabled={votedSongs.has(song.id)}
                        >
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          {song.downvotes}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Spotlights Tab */}
          <TabsContent value="spotlights" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Community Spotlights</h2>
              <p className="text-muted-foreground">Celebrating our most active and helpful community members</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {communitySpotlights.map((spotlight, index) => {
                const IconComponent = spotlight.icon
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <IconComponent className={`h-12 w-12 mx-auto mb-4 ${spotlight.color}`} />
                      <h3 className="text-xl font-bold mb-2">{spotlight.user}</h3>
                      <Badge className="mb-3">{spotlight.achievement}</Badge>
                      <p className="text-sm text-muted-foreground">{spotlight.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Recent Artist Interviews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <span>Recent Artist Interviews</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { artist: 'Cyber Pulse', interviewer: 'DJ Luna', topic: 'The Future of Synthwave', date: '2 days ago' },
                    { artist: 'Dark Frequency', interviewer: 'DJ Phoenix', topic: 'Underground Techno Scene', date: '1 week ago' },
                    { artist: 'Lightning Bolt', interviewer: 'DJ Storm', topic: 'Evolution of Drum & Bass', date: '2 weeks ago' }
                  ].map((interview, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-semibold">{interview.artist}</h4>
                        <p className="text-sm text-muted-foreground">
                          {interview.topic} • with {interview.interviewer}
                        </p>
                      </div>
                      <div className="text-right">
                        <Button variant="outline" size="sm">Listen</Button>
                        <div className="text-xs text-muted-foreground mt-1">{interview.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
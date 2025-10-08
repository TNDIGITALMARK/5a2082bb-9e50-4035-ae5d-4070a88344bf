'use client'

import { useState } from 'react'
import { Play, Heart, MessageSquare, Clock, Users, ExternalLink, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Navigation } from '@/components/navigation'

export default function DJShowsPage() {
  const [selectedDJ, setSelectedDJ] = useState(0)

  const djProfiles = [
    {
      id: 1,
      name: 'DJ Luna',
      realName: 'Luna Martinez',
      show: 'The Morning Frequency',
      schedule: 'Mon-Fri 6AM-10AM',
      bio: 'Bringing you the perfect blend of electronic beats and indie vibes to start your day right. Luna has been spinning tracks for over 8 years and specializes in progressive house and ambient techno.',
      image: '/api/placeholder/400/400',
      social: {
        twitter: '@djluna',
        instagram: '@lunamix',
        facebook: 'djlunaofficial'
      },
      genres: ['Progressive House', 'Ambient Techno', 'Indie Electronic'],
      favoriteTracks: [
        { title: 'Morning Glow', artist: 'Synthwave Collective', plays: 1240 },
        { title: 'Digital Dawn', artist: 'Neon Dreams', plays: 987 },
        { title: 'Electric Sunrise', artist: 'Cyber Pulse', plays: 856 }
      ],
      stats: {
        followers: 12500,
        totalPlays: 45230,
        showsHosted: 156
      },
      recentMessages: [
        { user: 'MusicLover92', message: 'Your morning sets are amazing!', time: '2h ago' },
        { user: 'BeatHunter', message: 'Can you play more synthwave?', time: '4h ago' },
        { user: 'ElectroFan', message: 'Best morning show ever!', time: '6h ago' }
      ]
    },
    {
      id: 2,
      name: 'DJ Phoenix',
      realName: 'Marcus Chen',
      show: 'Midnight Vibes',
      schedule: 'Mon-Fri 8PM-12AM',
      bio: 'Dive deep into the underground with Phoenix. Specializing in dark techno and industrial beats, Marcus creates an atmosphere that transforms the night into an unforgettable experience.',
      image: '/api/placeholder/400/400',
      social: {
        twitter: '@djphoenix',
        instagram: '@phoenixbeats',
        soundcloud: 'phoenixmidnight'
      },
      genres: ['Dark Techno', 'Industrial', 'Deep House'],
      favoriteTracks: [
        { title: 'Midnight Machine', artist: 'Dark Frequency', plays: 2100 },
        { title: 'Industrial Dreams', artist: 'Steel Pulse', plays: 1890 },
        { title: 'Underground', artist: 'Shadow Tech', plays: 1670 }
      ],
      stats: {
        followers: 18700,
        totalPlays: 78450,
        showsHosted: 203
      },
      recentMessages: [
        { user: 'NightOwl23', message: 'Phoenix sets are pure fire!', time: '1h ago' },
        { user: 'TechnoHead', message: 'More industrial please!', time: '3h ago' },
        { user: 'BassLover', message: 'That drop was insane!', time: '5h ago' }
      ]
    },
    {
      id: 3,
      name: 'DJ Storm',
      realName: 'Sarah Williams',
      show: 'Weekend Warriors',
      schedule: 'Sat-Sun 10PM-2AM',
      bio: 'Storm brings the energy with high-octane drum & bass and breakbeat that will get you moving. Known for her explosive live performances and crowd interaction.',
      image: '/api/placeholder/400/400',
      social: {
        twitter: '@djstormbeats',
        instagram: '@stormwarrior',
        facebook: 'djstormofficial'
      },
      genres: ['Drum & Bass', 'Breakbeat', 'Jungle'],
      favoriteTracks: [
        { title: 'Thunder Strike', artist: 'Lightning Bolt', plays: 3200 },
        { title: 'Storm Warning', artist: 'Weather System', plays: 2890 },
        { title: 'Electric Storm', artist: 'Power Surge', plays: 2650 }
      ],
      stats: {
        followers: 22100,
        totalPlays: 95230,
        showsHosted: 187
      },
      recentMessages: [
        { user: 'BassHead99', message: 'Storm always delivers!', time: '30min ago' },
        { user: 'DNBFanatic', message: 'Best D&B on the airwaves!', time: '2h ago' },
        { user: 'RaveGirl', message: 'Weekend vibes!', time: '4h ago' }
      ]
    }
  ]

  const currentDJ = djProfiles[selectedDJ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            DJ SHOWCASE
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented DJs who bring you the best music 24/7. Get to know their stories, favorite tracks, and connect with them directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* DJ Selection Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">OUR DJS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {djProfiles.map((dj, index) => (
                  <Button
                    key={dj.id}
                    variant={selectedDJ === index ? 'default' : 'ghost'}
                    className="w-full justify-start space-x-3 h-auto p-3"
                    onClick={() => setSelectedDJ(index)}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{dj.name.slice(3, 5)}</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{dj.name}</div>
                      <div className="text-xs text-muted-foreground">{dj.show}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main DJ Profile */}
          <div className="lg:col-span-3">
            <Card className="mb-8 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end space-x-6">
                    <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Radio className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 text-white">
                      <h1 className="text-4xl font-bold mb-2">{currentDJ.name}</h1>
                      <h2 className="text-2xl text-primary animate-glow">{currentDJ.show}</h2>
                      <p className="text-lg opacity-90">{currentDJ.schedule}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="lg" className="space-x-2">
                        <Play className="h-5 w-5" />
                        <span>Listen Live</span>
                      </Button>
                      <Button variant="secondary" size="lg">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* DJ Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">{currentDJ.stats.followers.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary">{currentDJ.stats.totalPlays.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Plays</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent">{currentDJ.stats.showsHosted}</div>
                  <div className="text-sm text-muted-foreground">Shows Hosted</div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="playlist">Favorites</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="social">Connect</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {currentDJ.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed">{currentDJ.bio}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Specializes in:</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentDJ.genres.map((genre, i) => (
                            <Badge key={i} variant="secondary">{genre}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Real Name:</h4>
                        <p className="text-muted-foreground">{currentDJ.realName}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="playlist" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Favorite Tracks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentDJ.favoriteTracks.map((track, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                              <Play className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-medium">{track.title}</h4>
                              <p className="text-sm text-muted-foreground">{track.artist}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{track.plays} plays</div>
                            <div className="text-xs text-muted-foreground">This month</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageSquare className="h-5 w-5" />
                      <span>Recent Messages</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentDJ.recentMessages.map((msg, i) => (
                        <div key={i} className="space-y-2 p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-primary">{msg.user}</div>
                            <div className="text-xs text-muted-foreground flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{msg.time}</span>
                            </div>
                          </div>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className="w-full space-x-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Send Message to {currentDJ.name}</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Connect with {currentDJ.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(currentDJ.social).map(([platform, handle]) => (
                        <div key={platform} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                              <ExternalLink className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-medium capitalize">{platform}</h4>
                              <p className="text-sm text-muted-foreground">{handle}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Follow
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
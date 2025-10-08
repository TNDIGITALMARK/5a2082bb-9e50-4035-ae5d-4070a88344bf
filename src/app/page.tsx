'use client'

import { useState } from 'react'
import { Play, Pause, Volume2, MessageCircle, Calendar, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/navigation'

export const dynamic = 'force-dynamic'

export default function Homepage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong] = useState({
    title: 'Electric Dreams',
    artist: 'Neon Waves',
    album: 'Synthwave Collection',
    artwork: '/api/placeholder/300/300'
  })

  const [currentDJ] = useState({
    name: 'DJ Luna',
    show: 'The Morning Frequency',
    avatar: '/api/placeholder/80/80',
    nextUp: 'DJ Phoenix - Midnight Vibes'
  })

  const recentNews = [
    { title: 'New Artist Interview: Cyber Pulse', time: '2 hours ago', category: 'Interview' },
    { title: 'Contest Alert: Win VIP Concert Tickets', time: '4 hours ago', category: 'Contest' },
    { title: 'Local Band Spotlight: Digital Storm', time: '6 hours ago', category: 'Music' }
  ]

  const topSongs = [
    { title: 'Midnight Drive', artist: 'RetroWave', votes: 847 },
    { title: 'City Lights', artist: 'Synthia', votes: 723 },
    { title: 'Digital Love', artist: 'Neon Dreams', votes: 692 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content - Now Playing */}
          <div className="lg:col-span-2 space-y-8">

            {/* Hero Section - Now Playing */}
            <Card className="overflow-hidden bg-gradient-to-br from-primary/20 via-card to-secondary/20 border-primary/30">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-xl overflow-hidden shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Radio className="h-16 w-16 text-white animate-pulse" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2">
                      <Button
                        size="lg"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="rounded-full h-16 w-16 shadow-lg animate-pulse-neon"
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left space-y-4">
                    <div>
                      <h1 className="text-5xl font-bold text-primary animate-glow mb-2">
                        NOW PLAYING
                      </h1>
                      <p className="text-muted-foreground text-lg uppercase tracking-wide">
                        {currentDJ.show} with {currentDJ.name}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold">{currentSong.title}</h2>
                      <p className="text-xl text-secondary">{currentSong.artist}</p>
                      <p className="text-muted-foreground">{currentSong.album}</p>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                      <Button variant="secondary" size="lg" className="space-x-2">
                        <Volume2 className="h-5 w-5" />
                        <span>Volume</span>
                      </Button>
                      <Button variant="outline" size="lg" className="space-x-2">
                        <MessageCircle className="h-5 w-5" />
                        <span>Request</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DJ Profiles Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Radio className="h-5 w-5 text-primary" />
                  <span>DJ PROFILES</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'DJ Luna', show: 'Morning Frequency', time: 'NOW LIVE', status: 'live' },
                    { name: 'DJ Phoenix', show: 'Midnight Vibes', time: '8 PM', status: 'upcoming' },
                    { name: 'DJ Storm', show: 'Weekend Mix', time: '10 PM', status: 'upcoming' }
                  ].map((dj, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{dj.name.slice(3, 5)}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{dj.name}</h3>
                        <p className="text-sm text-muted-foreground">{dj.show}</p>
                      </div>
                      <Badge variant={dj.status === 'live' ? 'default' : 'secondary'} className="text-xs">
                        {dj.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Shows */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-secondary" />
                  <span>UPCOMING SHOWS</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: 'Electronic Thursdays', dj: 'DJ Volt', time: 'Thu 7 PM', genre: 'Electronic' },
                  { title: 'Global Groove', dj: 'DJ Atlas', time: 'Fri 9 PM', genre: 'World' },
                  { title: 'Weekend Warriors', dj: 'DJ Storm', time: 'Sat 10 PM', genre: 'Rock' }
                ].map((show, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                    <div>
                      <h3 className="font-semibold">{show.title}</h3>
                      <p className="text-sm text-muted-foreground">with {show.dj}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{show.genre}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{show.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Latest Music News */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">LATEST MUSIC NEWS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentNews.map((news, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {news.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{news.time}</span>
                    </div>
                    <h4 className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
                      {news.title}
                    </h4>
                    {i < recentNews.length - 1 && <div className="border-b border-border/30" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Songs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">TOP SONGS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topSongs.map((song, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="text-2xl font-bold text-primary">#{i + 1}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{song.title}</h4>
                      <p className="text-sm text-muted-foreground">{song.artist}</p>
                    </div>
                    <div className="text-sm text-secondary">
                      {song.votes} votes
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">COMMUNITY EVENTS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Badge className="w-full justify-center text-center py-2">Live Concert Tonight</Badge>
                  <p className="text-sm text-center">Join us at The Electric venue - 8 PM</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center text-center py-2">DJ Battle - Friday</Badge>
                  <p className="text-sm text-center">Vote for your favorite mix</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
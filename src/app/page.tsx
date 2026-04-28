'use client';

import React from 'react';
import Link from 'next/link';
import {
  Bot, Rocket, Video, Calendar, Code, Play,
  GraduationCap, Zap, Clock, Brain, Wifi, Trophy, Users,
  Cpu, Radio, Layers, Shield, ChevronRight, Activity,
  Terminal, Eye
} from 'lucide-react';

/* ─────────────────────────────── DATA ─────────────────────────────── */
const features = [
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Live Video Streaming',
    desc: 'Multi-camera HD feeds from the robot lab with sub-50ms latency.',
    color: 'text-sky-400',
    border: 'border-sky-400/20',
    bg: 'bg-sky-400/5',
    glow: 'hover:border-sky-400/40',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'AI Overlay on Video',
    desc: 'Real-time object detection and pose estimation rendered directly on the stream.',
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/5',
    glow: 'hover:border-emerald-400/40',
  },
  {
    icon: <Radio className="w-6 h-6" />,
    title: 'WebSocket Real-Time Updates',
    desc: 'Joint angles, sensor data and telemetry pushed live to the browser.',
    color: 'text-violet-400',
    border: 'border-violet-400/20',
    bg: 'bg-violet-400/5',
    glow: 'hover:border-violet-400/40',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Robot 3D Viewer',
    desc: 'Interactive SVG/3D model of the arm mirroring real joint positions.',
    color: 'text-amber-400',
    border: 'border-amber-400/20',
    bg: 'bg-amber-400/5',
    glow: 'hover:border-amber-400/40',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'User Controls & Buttons',
    desc: 'Teleoperation, emergency stop, speed control and manual joint override.',
    color: 'text-rose-400',
    border: 'border-rose-400/20',
    bg: 'bg-rose-400/5',
    glow: 'hover:border-rose-400/40',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'REST API Commands',
    desc: 'FastAPI backend exposes every robot action over a clean typed REST interface.',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
    bg: 'bg-orange-400/5',
    glow: 'hover:border-orange-400/40',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Session & User Management',
    desc: 'Supabase-powered auth, booking calendar and per-session access control.',
    color: 'text-sky-400',
    border: 'border-sky-400/20',
    bg: 'bg-sky-400/5',
    glow: 'hover:border-sky-400/40',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Score System & Leaderboard',
    desc: 'Earn points for successful tasks, climb the leaderboard and earn badges.',
    color: 'text-yellow-400',
    border: 'border-yellow-400/20',
    bg: 'bg-yellow-400/5',
    glow: 'hover:border-yellow-400/40',
  },
];

const leaderboardPreview = [
  { rank: 1, name: 'Aisha K.', score: 9420, sessions: 38, badge: '🥇' },
  { rank: 2, name: 'Marco R.', score: 8815, sessions: 34, badge: '🥈' },
  { rank: 3, name: 'Yuki T.', score: 8230, sessions: 31, badge: '🥉' },
  { rank: 4, name: 'Priya M.', score: 7650, sessions: 29, badge: '' },
  { rank: 5, name: 'Leon B.', score: 7120, sessions: 26, badge: '' },
];

const stats = [
  { icon: <Wifi className="w-5 h-5" />, value: '100%', label: 'Remote Access' },
  { icon: <Zap className="w-5 h-5" />, value: '<50ms', label: 'Stream Latency' },
  { icon: <Brain className="w-5 h-5" />, value: 'AI-Powered', label: 'Vision Overlay' },
  { icon: <Clock className="w-5 h-5" />, value: '24/7', label: 'Lab Access' },
];

const steps = [
  { icon: <Users className="w-5 h-5" />, title: 'Create Account', desc: 'Sign up in seconds — email, Google, or GitHub.' },
  { icon: <Calendar className="w-5 h-5" />, title: 'Book a Session', desc: 'Pick any available time slot from the calendar.' },
  { icon: <Code className="w-5 h-5" />, title: 'Write & Run Code', desc: 'Use the Monaco editor to script and execute robot tasks.' },
  { icon: <Trophy className="w-5 h-5" />, title: 'Earn Points', desc: 'Complete challenges, climb the leaderboard.' },
];

/* ─────────────────────────────── TICKER ─────────────────────────────── */
const tickerItems = [
  'LIVE VIDEO STREAMING', '/', 'AI OVERLAY', '/', 'DAKAR AMERICAN UNIVERSITY OF SCIENCE AND TECHNOLOGY',
  '/', 'ROBOT 3D VIEWER', '/', 'LEADERBOARD', '/', 'AI OVERLAY', '/', 'DAKAR AMERICAN UNIVERSITY OF SCIENCE AND TECHNOLOGY',
  '/', 'ROBOT 3D VIEWER', '/', 'LEADERBOARD',
  '///',
];

/* ─────────────────────────────── COMPONENT ─────────────────────────────── */
export default function HomePage() {
  return (
    <div className="min-h-screen gradient-cyber">
      {/* ── Background decoration ── */}
      <div className="fixed inset-0 cyber-grid opacity-60 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      {/* ══════════════════════════ NAV ══════════════════════════ */}
      <nav className="relative glass-dark border-b border-sky-400/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Labs</span><span className="text-sky-400">Yi</span>
              </span>
              <span className="hidden sm:inline ml-2 px-2 py-0.5 text-xs bg-sky-400/10 border border-sky-400/20 rounded text-sky-400 terminal-text">
                DAUST
              </span>
            </div>

           

            {/* CTA */}
            <div className="flex gap-2">
              <Link href="/auth/login">
                <button className="px-4 py-1.5 text-sm glass hover:bg-white/10 rounded transition-colors font-medium">
                  Sign In
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="px-4 py-1.5 text-sm gradient-primary text-white rounded font-semibold glow hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">

        {/* Label */}
        

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6">
          <span className="text-white">Real Robots.</span>
          <br />
          <span className="gradient-primary bg-clip-text text-transparent">Real AI.</span>
          <br />
         
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Control physical robots remotely, overlay AI vision results live,
          train imitation-learning models in-browser, and compete on the
          global leaderboard — all without touching hardware.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <Link href="/auth/signup">
            <button className="group px-8 py-3.5 gradient-primary text-white rounded-lg font-bold text-base glow hover:opacity-90 transition-all flex items-center gap-2">
              Start Learning Free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/lab">
            <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold text-base transition-all flex items-center gap-2">
              <Play className="w-4 h-4 text-sky-400" />
              Open Lab Demo
            </button>
          </Link>
          <Link href="/leaderboard">
            <button className="px-8 py-3.5 bg-yellow-400/5 hover:bg-yellow-400/10 border border-yellow-400/20 rounded-lg font-semibold text-base text-yellow-400 transition-all flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Leaderboard
            </button>
          </Link>
        </div>

        
      </section>

      {/* ══════════════════════════ TICKER ══════════════════════════ */}
      <div className="relative overflow-hidden border-y border-sky-400/10 bg-sky-400/3 py-2.5">
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerItems.map((item, i) => (
            <span key={i} className={`mx-4 text-xs terminal-text ${item === '///' ? 'text-sky-400/40' : 'text-slate-500'}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

     

      

  

      {/* ══════════════════════════ HOW IT WORKS ══════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs terminal-text text-sky-400 tracking-widest mb-3">GETTING STARTED</p>
          <h2 className="text-4xl font-bold text-white">
            Up and Running in{' '}
            <span className="gradient-primary bg-clip-text text-transparent">4 Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-sky-400/30 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl cyber-card border border-sky-400/20 flex items-center justify-center text-sky-400 neon-border">
                  {s.icon}
                </div>
                <div className="text-xs terminal-text text-sky-400 mb-1">STEP {i + 1}</div>
                <h3 className="font-semibold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    

    </div>
  );
} 
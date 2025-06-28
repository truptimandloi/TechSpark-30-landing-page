import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Code, 
  Users, 
  Zap, 
  Trophy,
  Rocket,
  Brain,
  Gift,
  Wrench,
  MessageCircle,
  Instagram,
  Mail,
  Sparkles,
  Target,
  Heart,
  Menu,
  X,
  Quote,
  Calendar,
  Star,
  Coffee,
  Lightbulb
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const techQuotes = [
    "Creativity is intelligence having fun. — Einstein",
    "Code is poetry written in logic.",
    "Consistent comments spark consistent growth.",
    "Innovation distinguishes between a leader and a follower. — Steve Jobs",
    "The best way to predict the future is to create it.",
    "Every expert was once a beginner."
  ];

  const creativeComments = [
    "💡 Innovation isn't born, it's commented #TechSpark30",
    "🎯 Pixels, purpose, and passion. Day 12 done!",
    "🚀 Building tomorrow, one comment at a time",
    "✨ Creativity flows when consistency shows"
  ];

  const timelineEvents = [
    { day: 1, title: "Challenge Accepted", description: "Joined TechSpark 30", completed: true },
    { day: 10, title: "Consistency Streak", description: "10 days of creative comments", completed: true },
    { day: 20, title: "Bonus Challenge", description: "Created this landing page", completed: true },
    { day: 30, title: "Final Celebration", description: "Challenge completed!", completed: false }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * techQuotes.length);
    setCurrentQuote(randomIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-moving"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)] animate-pulse-slow"></div>
      
      {/* Intro Animation */}
      {!animationComplete && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-glow">
                Welcome to TechSpark 30
              </h1>
              <p className="text-xl text-purple-300 animate-fade-in-up-delay">
                Built with 💜 by Trupti Mandloi
              </p>
              <div className="mt-8 animate-bounce-slow">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md shadow-lg z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  IPS Tech Club
                </span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10">
                  About
                </a>
                <a href="#techspark" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10">
                  TechSpark 30
                </a>
                <a href="#timeline" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10">
                  Timeline
                </a>
                <a href="#why-join" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10">
                  Why Join
                </a>
                <a 
                  href="https://www.instagram.com/ipstechclub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="inline-block w-4 h-4 mr-2" />
                  Join TechSpark 30
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-300 p-2 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-md border-t border-white/10">
              <a href="#about" className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                About
              </a>
              <a href="#techspark" className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                TechSpark 30
              </a>
              <a href="#timeline" className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                Timeline
              </a>
              <a href="#why-join" className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200">
                Why Join
              </a>
              <a 
                href="https://www.instagram.com/ipstechclub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-left bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-2 text-base font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 rounded-lg mx-3 mt-2 block hover:scale-105"
              >
                <Sparkles className="inline-block w-4 h-4 mr-2" />
                Join TechSpark 30
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-purple-200 border border-purple-300/30 mb-6 hover:bg-white/20 transition-all duration-300 animate-float">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  Student-Led Innovation Community
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
                  IPS Tech Club
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                Igniting Innovation. Empowering Tech Leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.instagram.com/ipstechclub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Join TechSpark 30
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={getRandomQuote}
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105 border border-white/20 inline-flex items-center justify-center"
                >
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Get Tech Motivation
                </button>
              </div>

              {/* Quote Display */}
              {currentQuote !== null && (
                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-2xl mx-auto animate-fade-in">
                  <Quote className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <p className="text-lg text-white italic">
                    "{techQuotes[currentQuote]}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Live Comments Showcase */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              💬 My TechSpark 30 Comments
            </h2>
            <p className="text-purple-200">Creative comments that sparked conversations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {creativeComments.map((comment, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <MessageCircle className="w-6 h-6 text-purple-400 mb-3" />
                <p className="text-white italic">"{comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              <Users className="inline-block w-8 h-8 mr-3 text-purple-400" />
              Who We Are
            </h2>
            <div className="text-lg text-purple-100 leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p>
                IPS Tech Club is a student-led community of innovators, creators, and problem solvers. 
                We organize engaging events, challenges, and projects that help students explore the latest tech trends and sharpen their skills.
              </p>
              <p className="text-xl font-medium text-purple-300 bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
                <Heart className="inline-block w-5 h-5 mr-2" />
                Whether you're a coder, designer, or thinker — there's a place for you here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="timeline" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <Calendar className="inline-block w-8 h-8 mr-3 text-blue-400" />
              📅 My TechSpark 30 Journey
            </h2>
            <p className="text-purple-200">Tracking progress through the challenge</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-500 rounded-full"></div>
              
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                        <span className="text-purple-300 font-semibold">Day {event.day}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-purple-100 text-sm">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-purple-500 to-blue-500 z-10 hover:scale-110 transition-transform duration-200">
                    {event.completed && <Star className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TechSpark 30 Highlight */}
      <section id="techspark" className="py-20 bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-bold mb-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Target className="w-6 h-6 mr-2" />
              Featured Challenge
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              🔥 TechSpark 30 — The Creative Comment Challenge
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="text-lg text-purple-100 leading-relaxed space-y-6 mb-8">
                <p>
                  <Rocket className="inline-block w-5 h-5 mr-2 text-orange-400" />
                  TechSpark 30 is a unique 30-day challenge where students drop creative, meaningful comments on our daily reels.
                </p>
                <p>
                  <Brain className="inline-block w-5 h-5 mr-2 text-red-400" />
                  It's not just about engagement — it's about consistency, expression, and creativity. And now, to level up, we're giving you one more task:
                </p>
                <p className="text-xl font-semibold text-orange-300 bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-400">
                  <Gift className="inline-block w-6 h-6 mr-2" />
                  Create a landing page that stands out. Just like this one!
                </p>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://www.instagram.com/ipstechclub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Submit Your Entry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <Sparkles className="inline-block w-8 h-8 mr-3 text-purple-400" />
              Why Join Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Rocket className="h-8 w-8 text-purple-400" />,
                title: "Hands-on Challenges",
                description: "Participate in hackathons and real-world projects that push your boundaries"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-400" />,
                title: "Vibrant Community",
                description: "Connect with like-minded learners and build lasting friendships"
              },
              {
                icon: <Brain className="h-8 w-8 text-indigo-400" />,
                title: "Creative Growth",
                description: "Events like TechSpark 30 help you grow creatively and professionally"
              },
              {
                icon: <Gift className="h-8 w-8 text-green-400" />,
                title: "Recognition & Rewards",
                description: "Earn certificates, recognition, and exciting rewards for your contributions"
              },
              {
                icon: <Wrench className="h-8 w-8 text-orange-400" />,
                title: "Skill Building",
                description: "Master both code and no-code tools through hands-on learning"
              },
              {
                icon: <MessageCircle className="h-8 w-8 text-pink-400" />,
                title: "Engaging Events",
                description: "Regular workshops, talks, and interactive sessions to keep you inspired"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 hover:border-purple-300/50 cursor-pointer">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-800/50 via-blue-800/50 to-indigo-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build With Us?
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed space-y-4 mb-10">
              <p>
                You don't need to be a tech expert — just bring your curiosity and creativity. 
                Join our events, participate in challenges, and grow your skills in a community that cares.
              </p>
              <p className="text-xl font-medium text-white">
                Follow us on Instagram or drop a DM to get started!
              </p>
            </div>
            <a 
              href="https://instagram.com/ipstechclub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow @ipstechclub
              <Rocket className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Easter Egg Section */}
      <div 
        className="fixed bottom-4 right-4 cursor-pointer z-30"
        onClick={() => setShowEasterEgg(!showEasterEgg)}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse hover:scale-125 transition-transform duration-200"></div>
      </div>

      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md text-center border border-white/20">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">🎉 You found the hidden byte!</h3>
            <p className="text-purple-200 mb-6">
              DM this screenshot to @ipstechclub for bonus points! 😉
            </p>
            <button 
              onClick={() => setShowEasterEgg(false)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 border-t border-purple-500/20">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-xl mr-4 hover:scale-110 transition-transform duration-300 shadow-lg">
                <Code className="h-10 w-10 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                IPS Tech Club
              </span>
            </div>
            
            <div className="mb-10 space-y-4">
              <p className="text-gray-300 text-lg flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2 text-red-400 animate-pulse" />
                Made with love, code, and caffeine — Trupti Mandloi 💜
              </p>
              <p className="text-gray-400 flex items-center justify-center">
                <Coffee className="w-4 h-4 mr-2" />
                Created as part of TechSpark 30 Challenge
              </p>
              <div className="flex justify-center space-x-8 mt-6">
                <a 
                  href="https://instagram.com/ipstechclub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 flex items-center hover:scale-110 group"
                >
                  <Instagram className="h-6 w-6 mr-2 group-hover:text-pink-400" />
                  @ipstechclub
                </a>
                <a 
                  href="mailto:ipstechclub@gmail.com" 
                  className="text-gray-400 hover:text-white transition-all duration-300 flex items-center hover:scale-110 group"
                >
                  <Mail className="h-6 w-6 mr-2 group-hover:text-blue-400" />
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 IPS Tech Club. Built with passion for innovation and creativity.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Empowering the next generation of tech leaders ✨
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
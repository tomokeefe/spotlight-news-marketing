import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Smartphone,
  Zap,
  TrendingUp,
  DollarSign,
  PieChart,
  Users,
  BarChart3,
  GraduationCap,
  Building2,
  Globe,
  Shield
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple News inspired clean layout */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          data-object-fit="cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source
            src="https://www.dropbox.com/scl/fi/fdo3go2qmcebnmbxa0rrk/4990232-hd_1920_1080_30fps.mp4?rlkey=vwy1wyw8sibos4mu3lj4tice0&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Tint */}
        <div className="absolute inset-0 bg-midnight-black/60 z-10"></div>

        <div className="relative z-20 text-center max-w-8xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F0b0a31ccf47e48388d0e7b1d2cc829fd?format=webp&width=800"
              alt="Spotlight News"
              className="h-12 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(154deg) brightness(119%) contrast(119%)' }}
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            A world of news.
            <br />
            <span className="text-electric-blue">One trusted feed.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
            Break free from algorithmic echo chambers.
            <br />
            Your feed, your rules.
          </p>

          {/* Primary CTA */}
          <div className="mb-16">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-xl px-12 py-6 rounded-full"
              >
                Try it free*
              </Button>
            </Link>
          </div>

          {/* Promotional Text */}
          <p className="text-base text-soft-gray/60 mb-8">
            Get 3 months of Spotlight News+ free with a new iPhone, iPad, or
            Mac.¹
            <Link
              to="/get-app"
              className="text-electric-blue hover:underline ml-1"
            >
              Learn more
            </Link>
          </p>

          {/* Stats - Simplified */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-soft-gray/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">
                250K+
              </div>
              <div className="text-soft-gray/50 text-sm">Active users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">1M+</div>
              <div className="text-soft-gray/50 text-sm">Stories curated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">500+</div>
              <div className="text-soft-gray/50 text-sm">Campus partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Clean Apple style */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-6">
              News that <span className="text-electric-blue">matters.</span>
            </h2>
            <p className="text-xl text-soft-gray/70 max-w-2xl mx-auto">
              Curate your perfect feed from 300+ trusted sources. No algorithms.
              No noise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-4xl font-display font-bold text-soft-gray mb-6">
                Your feed, <br />
                your <span className="text-electric-blue">choice.</span>
              </h3>
              <p className="text-lg text-soft-gray/70 mb-8">
                Choose your sources, topics, and writers. Create a news
                experience that's uniquely yours. No algorithmic surprises.
              </p>
              <Link to="/students">
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-medium px-8 py-3 rounded-full"
                >
                  Learn more
                </Button>
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F61dcb29404b54e3294abf0a058330ed3?format=webp&width=540&height=320"
                alt="Spotlight News Feed Preview"
                className="w-full h-auto"
                width={540}
                height={320}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-12 h-80 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-soft-gray/60">
                [Stats & Rewards Mockup]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-display font-bold text-soft-gray mb-6">
                Read smart. <br />
                Get <span className="text-neon-green">rewarded.</span>
              </h3>
              <p className="text-lg text-soft-gray/70 mb-8">
                Track your reading with MyStats. Join challenges. Win real
                prizes like AirPods and iPads while staying informed.
              </p>
              <Link to="/challenge">
                <Button
                  variant="outline"
                  className="border-neon-green text-neon-green hover:bg-neon-green hover:text-midnight-black font-medium px-8 py-3 rounded-full"
                >
                  Join challenge
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-display font-bold text-soft-gray mb-6">
                One subscription. <br />
                <span className="text-vibrant-pink">All access.</span>
              </h3>
              <p className="text-lg text-soft-gray/70 mb-8">
                Break through paywalls with a single subscription. Access
                premium content from hundreds of publications.
              </p>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink hover:text-midnight-black font-medium px-8 py-3 rounded-full"
                >
                  View pricing
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-vibrant-pink/20 to-neon-green/20 rounded-3xl p-12 h-80 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                [Publication Logos Grid]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Sections - Clean Apple style */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-midnight-black"></div>
        <div className="absolute top-32 left-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-vibrant-pink/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-4">
              Built for <span className="text-electric-blue">everyone.</span>
            </h2>
            <p className="text-xl text-soft-gray/70 max-w-2xl mx-auto">
              Three distinct experiences, one powerful platform
            </p>
          </div>

          {/* Polished Card Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Students Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/15 to-cyan-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8 h-[480px] flex flex-col hover:border-electric-blue/40 hover:bg-gray-800/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-electric-blue/10">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-electric-blue/15 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-7 h-7 text-electric-blue" />
                    </div>
                    <div className="px-3 py-1.5 bg-electric-blue/15 border border-electric-blue/20 rounded-full">
                      <span className="text-electric-blue text-xs font-semibold uppercase tracking-wide">Students</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-electric-blue mb-4 leading-tight">
                    Custom News Feed
                  </h3>

                  <p className="text-soft-gray/80 mb-6 text-sm leading-relaxed">
                    Build your perfect scroll. Choose sources, topics, and writers.
                    No algorithms, no distractions, just the news you want.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="flex flex-col items-center p-4 bg-electric-blue/10 rounded-xl border border-electric-blue/10 hover:border-electric-blue/20 transition-colors">
                      <Smartphone className="w-6 h-6 text-electric-blue mb-2" />
                      <span className="text-xs text-electric-blue/80 font-medium">Mobile</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-electric-blue/10 rounded-xl border border-electric-blue/10 hover:border-electric-blue/20 transition-colors">
                      <Zap className="w-6 h-6 text-electric-blue mb-2" />
                      <span className="text-xs text-electric-blue/80 font-medium">Fast</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-electric-blue/10 rounded-xl border border-electric-blue/10 hover:border-electric-blue/20 transition-colors">
                      <TrendingUp className="w-6 h-6 text-electric-blue mb-2" />
                      <span className="text-xs text-electric-blue/80 font-medium">Smart</span>
                    </div>
                  </div>
                </div>

                <Link to="/students" className="w-full">
                  <Button className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-sm py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-electric-blue/20 hover:shadow-electric-blue/30">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Publishers Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/15 to-lime-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl border border-neon-green/20 rounded-2xl p-8 h-[480px] flex flex-col hover:border-neon-green/40 hover:bg-gray-800/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-neon-green/10">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-neon-green/15 rounded-2xl flex items-center justify-center">
                      <DollarSign className="w-7 h-7 text-neon-green" />
                    </div>
                    <div className="px-3 py-1.5 bg-neon-green/15 border border-neon-green/20 rounded-full">
                      <span className="text-neon-green text-xs font-semibold uppercase tracking-wide">Publishers</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-neon-green mb-4 leading-tight">
                    Revenue Growth
                  </h3>

                  <p className="text-soft-gray/80 mb-6 text-sm leading-relaxed">
                    70% revenue share with zero tech lift. Connect with engaged
                    readers and build sustainable income streams.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="flex flex-col items-center p-4 bg-neon-green/10 rounded-xl border border-neon-green/10 hover:border-neon-green/20 transition-colors">
                      <PieChart className="w-6 h-6 text-neon-green mb-2" />
                      <span className="text-xs text-neon-green/80 font-medium">Analytics</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-neon-green/10 rounded-xl border border-neon-green/10 hover:border-neon-green/20 transition-colors">
                      <Users className="w-6 h-6 text-neon-green mb-2" />
                      <span className="text-xs text-neon-green/80 font-medium">Audience</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-neon-green/10 rounded-xl border border-neon-green/10 hover:border-neon-green/20 transition-colors">
                      <BarChart3 className="w-6 h-6 text-neon-green mb-2" />
                      <span className="text-xs text-neon-green/80 font-medium">Growth</span>
                    </div>
                  </div>
                </div>

                <Link to="/publishers" className="w-full">
                  <Button className="w-full bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold text-sm py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-neon-green/20 hover:shadow-neon-green/30">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Universities Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/15 to-pink-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl border border-vibrant-pink/20 rounded-2xl p-8 h-[480px] flex flex-col hover:border-vibrant-pink/40 hover:bg-gray-800/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-vibrant-pink/10">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-vibrant-pink/15 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-vibrant-pink" />
                    </div>
                    <div className="px-3 py-1.5 bg-vibrant-pink/15 border border-vibrant-pink/20 rounded-full">
                      <span className="text-vibrant-pink text-xs font-semibold uppercase tracking-wide">Universities</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-vibrant-pink mb-4 leading-tight">
                    Campus Integration
                  </h3>

                  <p className="text-soft-gray/80 mb-6 text-sm leading-relaxed">
                    Bulk subscriptions for thousands of students. Boost access,
                    engagement, and news literacy across your campus.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="flex flex-col items-center p-4 bg-vibrant-pink/10 rounded-xl border border-vibrant-pink/10 hover:border-vibrant-pink/20 transition-colors">
                      <Building2 className="w-6 h-6 text-vibrant-pink mb-2" />
                      <span className="text-xs text-vibrant-pink/80 font-medium">Campus</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-vibrant-pink/10 rounded-xl border border-vibrant-pink/10 hover:border-vibrant-pink/20 transition-colors">
                      <Globe className="w-6 h-6 text-vibrant-pink mb-2" />
                      <span className="text-xs text-vibrant-pink/80 font-medium">Global</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-vibrant-pink/10 rounded-xl border border-vibrant-pink/10 hover:border-vibrant-pink/20 transition-colors">
                      <Shield className="w-6 h-6 text-vibrant-pink mb-2" />
                      <span className="text-xs text-vibrant-pink/80 font-medium">Secure</span>
                    </div>
                  </div>
                </div>

                <Link to="/universities" className="w-full">
                  <Button className="w-full bg-vibrant-pink text-midnight-black hover:bg-pink-400 font-semibold text-sm py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-vibrant-pink/20 hover:shadow-vibrant-pink/30">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Polished Stats Bar */}
          <div className="bg-gray-800/40 backdrop-blur-xl border border-soft-gray/10 rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-electric-blue mb-2 group-hover:scale-110 transition-transform duration-300">250K+</div>
                <div className="text-soft-gray/70 text-sm font-medium">Active Students</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-neon-green mb-2 group-hover:scale-110 transition-transform duration-300">300+</div>
                <div className="text-soft-gray/70 text-sm font-medium">Publisher Partners</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-vibrant-pink mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-soft-gray/70 text-sm font-medium">University Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#008888' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Ready to rebel against <br />
            <span className="text-electric-blue">bad feeds?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join 250,000+ users who've taken control of their news experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-white text-[#008888] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
              >
                Download the app
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#008888] font-semibold text-lg px-10 py-5 rounded-full"
              >
                Try online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

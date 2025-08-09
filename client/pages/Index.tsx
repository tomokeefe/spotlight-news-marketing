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
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Built for <span className="text-electric-blue">everyone.</span>
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-3xl mx-auto leading-relaxed">
              Three distinct experiences, unified by our commitment to quality journalism and user control.
            </p>
          </div>

          {/* Clean Card Layout */}
          <div className="space-y-8">
            {/* Students */}
            <div className="group bg-white/[0.02] backdrop-blur-xl rounded-[24px] border border-white/[0.08] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center bg-electric-blue/10 rounded-full px-4 py-2 mb-8 w-fit">
                    <BookOpen className="w-5 h-5 text-electric-blue mr-2" />
                    <span className="text-electric-blue text-sm font-medium">For Students</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight">
                    Your news, your way
                  </h3>
                  <p className="text-lg text-soft-gray/80 mb-8 leading-relaxed">
                    Curate your perfect feed. Choose your sources, topics, and writers.
                    No algorithms deciding what you see—just the news that matters to you.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center bg-electric-blue/5 rounded-full px-4 py-2">
                      <Smartphone className="w-4 h-4 text-electric-blue mr-2" />
                      <span className="text-electric-blue text-sm">Mobile-first</span>
                    </div>
                    <div className="flex items-center bg-electric-blue/5 rounded-full px-4 py-2">
                      <Zap className="w-4 h-4 text-electric-blue mr-2" />
                      <span className="text-electric-blue text-sm">Lightning fast</span>
                    </div>
                    <div className="flex items-center bg-electric-blue/5 rounded-full px-4 py-2">
                      <TrendingUp className="w-4 h-4 text-electric-blue mr-2" />
                      <span className="text-electric-blue text-sm">Smart insights</span>
                    </div>
                  </div>
                  <Link to="/students">
                    <Button className="bg-electric-blue text-black hover:bg-electric-blue/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-electric-blue/20 transition-all duration-300 hover:scale-105 hover:shadow-electric-blue/30">
                      Get started
                    </Button>
                  </Link>
                </div>
                <div className="relative lg:min-h-[400px] bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 p-12 lg:p-16 flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-electric-blue/20 rounded-full flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-electric-blue" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Custom Feed</div>
                            <div className="text-white/60 text-xs">300+ sources</div>
                          </div>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div className="text-white/80 text-sm">Reading streak: 12 days</div>
                        <div className="bg-electric-blue/20 rounded-lg p-3">
                          <div className="text-electric-blue text-xs font-medium">Challenge: Tech News</div>
                          <div className="text-white/60 text-xs mt-1">7 articles read • 3 to go</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Publishers */}
            <div className="group bg-white/[0.02] backdrop-blur-xl rounded-[24px] border border-white/[0.08] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative lg:min-h-[400px] bg-gradient-to-br from-neon-green/20 to-neon-green/5 p-12 lg:p-16 flex items-center justify-center order-2 lg:order-1">
                  <div className="w-full max-w-sm">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Revenue Share</span>
                          <span className="text-neon-green text-2xl font-bold">70%</span>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-white/60 text-xs">Active readers</span>
                            <span className="text-white text-xs">+23% this month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60 text-xs">Engagement</span>
                            <span className="text-white text-xs">4.2 min avg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
                  <div className="inline-flex items-center bg-neon-green/10 rounded-full px-4 py-2 mb-8 w-fit">
                    <DollarSign className="w-5 h-5 text-neon-green mr-2" />
                    <span className="text-neon-green text-sm font-medium">For Publishers</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight">
                    Sustainable revenue streams
                  </h3>
                  <p className="text-lg text-soft-gray/80 mb-8 leading-relaxed">
                    Connect with engaged readers who value quality journalism.
                    70% revenue share with zero technical integration required.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center bg-neon-green/5 rounded-full px-4 py-2">
                      <PieChart className="w-4 h-4 text-neon-green mr-2" />
                      <span className="text-neon-green text-sm">Real-time analytics</span>
                    </div>
                    <div className="flex items-center bg-neon-green/5 rounded-full px-4 py-2">
                      <Users className="w-4 h-4 text-neon-green mr-2" />
                      <span className="text-neon-green text-sm">Growing audience</span>
                    </div>
                  </div>
                  <Link to="/publishers">
                    <Button className="bg-neon-green text-black hover:bg-neon-green/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-neon-green/20 transition-all duration-300 hover:scale-105 hover:shadow-neon-green/30">
                      Partner with us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Universities */}
            <div className="group bg-white/[0.02] backdrop-blur-xl rounded-[24px] border border-white/[0.08] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center bg-vibrant-pink/10 rounded-full px-4 py-2 mb-8 w-fit">
                    <GraduationCap className="w-5 h-5 text-vibrant-pink mr-2" />
                    <span className="text-vibrant-pink text-sm font-medium">For Universities</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight">
                    Campus-wide news literacy
                  </h3>
                  <p className="text-lg text-soft-gray/80 mb-8 leading-relaxed">
                    Bulk subscriptions for your entire student body.
                    Foster informed discourse and critical thinking on campus.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center bg-vibrant-pink/5 rounded-full px-4 py-2">
                      <Building2 className="w-4 h-4 text-vibrant-pink mr-2" />
                      <span className="text-vibrant-pink text-sm">Campus-wide access</span>
                    </div>
                    <div className="flex items-center bg-vibrant-pink/5 rounded-full px-4 py-2">
                      <Shield className="w-4 h-4 text-vibrant-pink mr-2" />
                      <span className="text-vibrant-pink text-sm">Enterprise security</span>
                    </div>
                  </div>
                  <Link to="/universities">
                    <Button className="bg-vibrant-pink text-black hover:bg-vibrant-pink/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-vibrant-pink/20 transition-all duration-300 hover:scale-105 hover:shadow-vibrant-pink/30">
                      Contact us
                    </Button>
                  </Link>
                </div>
                <div className="relative lg:min-h-[400px] bg-gradient-to-br from-vibrant-pink/20 to-vibrant-pink/5 p-12 lg:p-16 flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-vibrant-pink text-3xl font-bold">5,000+</div>
                          <div className="text-white/60 text-sm">Active students</div>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-white text-lg font-semibold">87%</div>
                            <div className="text-white/60 text-xs">Engagement rate</div>
                          </div>
                          <div>
                            <div className="text-white text-lg font-semibold">12</div>
                            <div className="text-white/60 text-xs">Departments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

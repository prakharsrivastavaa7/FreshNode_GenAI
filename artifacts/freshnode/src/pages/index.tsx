import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  MessageSquare, 
  Percent, 
  Clock, 
  SlidersHorizontal, 
  Users, 
  ClipboardList,
  Check,
  X,
  Smartphone,
  MonitorSmartphone,
  TrendingDown,
  Wrench,
  ChevronRight
} from "lucide-react";

export default function PitchPage() {
  const handleContact = () => {
    window.location.href = "mailto:hello@freshnode.in";
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground selection:bg-primary/30">
      <Navbar />

      <main className="relative">
        {/* Background glow accent */}
        <div className="absolute top-0 left-0 right-0 h-[800px] w-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] opacity-50"></div>
          {/* Fallback generated image if available */}
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-glow.png`} 
            alt="Hero background" 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-screen"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>

        {/* SECTION 1: HERO */}
        <section id="home" className="pt-24 pb-4 md:pt-28 md:pb-6 px-6 max-w-7xl mx-auto flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <FadeIn className="flex flex-col items-start text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-8">
                Pre-Seed | Grocery Operations
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Recover Margin from Fast-Expiring Inventory
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                FreshNode runs a daily clearance workflow for small supermarket chains — identifying at-risk stock, recommending markdowns, and pushing same-day pickup offers to nearby repeat customers on WhatsApp.
              </p>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium transition-all"
                  onClick={handleContact}
                >
                  Request Investor Deck
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-primary hover:text-primary hover:bg-primary/10 rounded-full px-6 py-6 text-base"
                  onClick={() => scrollTo('workflow')}
                >
                  See Workflow <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left" className="relative lg:ml-auto w-full max-w-lg">
              {/* Outer glow ring */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/5 pointer-events-none" />
              {/* Premium dark frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_0_60px_rgba(34,197,94,0.08)] backdrop-blur-sm">
                {/* Top bar chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  <span className="ml-auto text-[10px] text-white/20 font-mono tracking-wider uppercase">FreshNode Workflow</span>
                </div>
                {/* Image */}
                <div className="relative">
                  <img
                    src={`${import.meta.env.BASE_URL}images/freshnode-hero.png`}
                    alt="FreshNode same-day clearance workflow — dynamic pricing reduces food waste in neighborhood grocery stores"
                    className="w-full h-auto object-contain block"
                    style={{ aspectRatio: '2/3' }}
                  />
                  {/* Subtle bottom fade into dark bg */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
                </div>
                {/* Caption */}
                <div className="px-5 py-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-xs text-white/40 font-mono tracking-wide">
                    From at-risk inventory to same-day pickup
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </section>

        {/* SECTION 2: PROBLEM */}
        <section id="problem" className="pt-6 pb-14 px-6 max-w-7xl mx-auto">
          <FadeIn className="mb-8 md:text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Problem</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">A Daily Margin Leak Hiding in Store Operations</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In urban grocery stores, fast-expiring stock is identified too late. Markdowns are inconsistent. Same-day clearance depends entirely on footfall. The result: avoidable waste, eroded margins, and inconsistent execution.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Clock, title: "Late Identification", text: "Perishables are flagged for clearance hours after optimal markdown window. Recovery is partial at best." },
              { icon: SlidersHorizontal, title: "Inconsistent Markdowns", text: "Pricing decisions are made ad hoc, driven by staff judgment rather than category-level data." },
              { icon: Users, title: "Footfall-Dependent Clearance", text: "Without an outbound channel, clearance relies on whoever walks in. Most at-risk stock doesn't move." },
              { icon: ClipboardList, title: "Staff Burden Without System", text: "Store staff manually track expiry, apply stickers, and manage clearance without tooling. Execution varies by shift." }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="bg-card/50 border-white/5 hover:border-white/10 transition-colors p-8 h-full glow-hover">
                  <CardContent className="p-0">
                    <card.icon className="h-8 w-8 text-primary mb-6" />
                    <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{card.text}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 3: WEDGE */}
        <section id="wedge" className="py-16 px-6 max-w-7xl mx-auto border-y border-white/5 bg-white/[0.01]">
          <FadeIn className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Entry Point</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Why This Entry Point Wins First</h3>
            <p className="text-lg text-muted-foreground max-w-3xl">
              FreshNode starts narrow by design. The initial customer is a 5-20 store supermarket chain or premium neighborhood grocer — already running digital billing or POS, with a meaningful perishables mix, in a single city cluster.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card/40 border border-white/10 rounded-3xl p-8 md:p-12">
            <FadeIn delay={0.1}>
              <h4 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Who We Serve First</h4>
              <ul className="space-y-5">
                {[
                  "5 to 20 store supermarket chains",
                  "Premium neighborhood grocers",
                  "Digital billing/POS already in place",
                  "Meaningful perishables volume",
                  "One city cluster at a time"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h4 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Categories We Start With</h4>
              <ul className="space-y-5">
                {[
                  "Dairy",
                  "Bakery",
                  "Packaged fresh",
                  "Cut fruit",
                  "Selected produce SKUs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3} className="mt-8 text-center">
            <p className="text-sm italic text-muted-foreground">Narrow by choice. Complexity expands only after operational proof.</p>
          </FadeIn>
        </section>

        {/* SECTION 4: WORKFLOW */}
        <section id="workflow" className="py-14 px-6 max-w-7xl mx-auto">
          <FadeIn className="mb-10 md:text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Workflow</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">How the Recovery Engine Works</h3>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-6 relative">
            {[
              { step: "01", title: "Daily At-Risk Identification", desc: "Staff or system flags stock approaching expiry within 24-48 hours. OCR is an optional input aid — not the backbone." },
              { step: "02", title: "Manager-Approved Markdown", desc: "Markdown recommendations are surfaced to store managers for approval. Logic starts with rules, not machine learning." },
              { step: "03", title: "Local Clearance Broadcast", desc: "Approved offers are sent via WhatsApp to opted-in repeat customers near the store. Pickup slots are reserved." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="flex-1 relative">
                {/* Arrow connector for desktop */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 z-10 -translate-y-1/2 text-white/20">
                    <ChevronRight className="w-10 h-10" />
                  </div>
                )}
                {/* Arrow connector for mobile */}
                {i < 2 && (
                  <div className="lg:hidden absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/20">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
                
                <div className="bg-[#111] border border-white/5 rounded-2xl p-8 h-full glow-hover relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </section>

        {/* SECTION 5: SCOPE DISCIPLINE */}
        <section id="scope" className="py-16 px-6 bg-card/20 border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-8 md:text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Focused by Design</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">A Store Recovery Tool. Nothing Else — Yet.</h3>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <FadeIn delay={0.1} className="bg-[#0a0a0a] p-10 md:p-12">
                <h4 className="text-xl font-bold text-white/50 mb-8 border-b border-white/5 pb-4">What FreshNode is not</h4>
                <ul className="space-y-6">
                  {[
                    "Not a broad AI inventory platform",
                    "Not a consumer marketplace",
                    "Not auto-pricing for every SKU",
                    "Not built for all store formats on day one"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-muted-foreground">
                      <X className="w-5 h-5 text-red-500/70 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              
              <FadeIn delay={0.2} className="bg-[#0d0d0d] p-10 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <h4 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 relative z-10">What it is</h4>
                <ul className="space-y-6 relative z-10">
                  {[
                    "A daily clearance workflow for store managers",
                    "Same-day pickup offers to repeat buyers on WhatsApp",
                    "Category-level markdown logic with manager approval",
                    "Designed for 5-20 store chains, not hypermarkets"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/90">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SECTION 6: MODEL */}
        <section id="model" className="py-16 px-6 max-w-7xl mx-auto">
          <FadeIn className="mb-8 md:text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Revenue Model</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Revenue Aligned to Store Outcomes</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-[#111] h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                <h4 className="text-2xl font-bold text-white mb-2">Monthly Platform Fee</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Per store, per month</p>
                <p className="text-white/70 leading-relaxed">
                  Flat access fee for the workflow tool, manager dashboard, and WhatsApp broadcast integration. Charged regardless of volume.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 md:p-10 rounded-3xl border border-primary/30 bg-primary/5 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <h4 className="text-2xl font-bold text-white mb-2">Recovery Success Fee</h4>
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-6">On recovered markdown GMV</p>
                <p className="text-white/80 leading-relaxed">
                  A small percentage of gross margin recovered above the store's historical baseline. Charged only when the tool delivers measurable lift.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-base italic text-muted-foreground">
              "Both components align our incentives directly with what matters to the store: less waste, more recovered margin."
            </p>
          </FadeIn>
        </section>

        {/* SECTION 7: METRICS */}
        <section id="metrics" className="py-16 px-6 bg-[#0d0d0d] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-8 md:text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Execution Metrics</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Proof That the Model Is Working</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These are the KPIs that determine whether FreshNode is actually working — not vanity metrics.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { title: "Waste Reduction by Category", text: "% reduction in expired, unsold perishables per SKU group" },
                { title: "Recovered Gross Margin", text: "Gross margin recovered vs. prior baseline. Primary revenue signal." },
                { title: "Sell-Through of Flagged Items", text: "% of at-risk inventory successfully sold before expiry" },
                { title: "Staff Compliance Rate", text: "% of flagged items processed through the workflow vs. handled manually" },
                { title: "Reservation Fulfillment Rate", text: "% of WhatsApp reservations converted to actual pickup" },
                { title: "Repeat Buyer Rate", text: "% of clearance offer recipients who return for a second purchase" }
              ].map((card, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 h-full hover:bg-[#1a1a1a] transition-colors">
                    <div className="w-8 h-1 bg-white/10 rounded-full mb-6"></div>
                    <h4 className="text-lg font-bold text-white mb-3">{card.title}</h4>
                    <p className="text-sm text-muted-foreground">{card.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Highlighted Metric */}
            <FadeIn delay={0.6}>
              <div className="bg-[#1a1a1a] border border-primary/40 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary/20 border-b border-l border-primary/30 text-primary text-xs font-bold uppercase tracking-wider rounded-bl-lg">
                  Critical Signal
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 pr-32">Incremental Labor Minutes Per Store Per Day</h4>
                <p className="text-lg text-white/70 max-w-3xl">
                  If this number rises significantly, the tool is creating burden rather than reducing it. Labor efficiency is a primary adoption gate. We track it weekly.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 8: MOAT */}
        <section id="moat" className="py-16 px-6 max-w-7xl mx-auto">
          <FadeIn className="mb-8 md:text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Defensibility</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Where the Moat Actually Comes From</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moat is not assumed. It's earned through repeated execution at the store level.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Workflow Integration", text: "When FreshNode becomes part of the daily store routine, switching cost rises. Not because of lock-in, but because alternatives require retraining." },
              { title: "Category-Level Data", text: "Markdown timing and sell-through data by category and city cluster compounds over time. Generic tools don't have it." },
              { title: "City-Level Density", text: "Concentration in similar store formats within a city creates recovery benchmarks no outside player can replicate quickly." },
              { title: "Trusted Recovery Benchmarks", text: "Chains benchmark themselves against each other. Once FreshNode owns that data layer, the network value is structural." }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 border-t border-white/10 h-full hover:border-primary/50 transition-colors">
                  <div className="text-primary font-mono text-sm mb-4 opacity-50">0{i + 1}</div>
                  <h4 className="text-lg font-bold text-white mb-4">{card.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION: OPERATOR MESSAGE */}
        <section id="partners" className="py-14 px-6 max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl border border-white/8 bg-[#111] overflow-hidden">
              {/* Subtle green gradient corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative p-10 md:p-14">
                {/* Label */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Message to Grocery Operators</span>
                </div>
                {/* Post body */}
                <div className="space-y-5 text-[1.08rem] leading-relaxed text-white/75 max-w-2xl">
                  <p>Every day, grocery stores throw away food that could still be sold.</p>
                  <p>Not because no one wants it — but because stores identify slow-moving perishables too late and markdowns happen after the selling window has already shrunk.</p>
                  <p className="text-white font-medium">FreshNode helps fix that.</p>
                  <p>It identifies which items are unlikely to sell in time, surfaces markdown recommendations as freshness drops, and pushes those offers to nearby customers who are ready to buy. Instead of waiting for waste, stores can act earlier and recover value.</p>
                  <p>That means fewer write-offs, lower disposal costs, and better sell-through on perishable inventory. Customers get quality groceries at lower prices. Stores move stock before it becomes dead loss.</p>
                  <p className="text-white/90 font-medium border-t border-white/8 pt-5">We are now live and onboarding early grocery partners.</p>
                  <p>If you run a store and still manage perishable markdowns manually, reach out. We would love to show you how FreshNode works.</p>
                </div>
                {/* CTA */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => window.location.href = "mailto:hello@freshnode.in?subject=Interested in FreshNode for my store"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    Send a message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-white/30">hello@freshnode.in</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 9: ROADMAP */}
        <section id="roadmap" className="py-16 px-6 bg-[#0a0a0a] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-8 md:text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Scale Path</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">From Narrow Wedge to Scaled Platform</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Venture scale is earned after operational proof. Not claimed upfront.
              </p>
            </FadeIn>

            <div className="relative">
              <div className="hidden lg:block absolute top-[45px] left-0 w-full h-px bg-white/10 z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
                {[
                  { title: "Dominate One City, One Format", desc: "Own same-day clearance in one city cluster. Prove sell-through rates and labor efficiency. Build the baseline." },
                  { title: "Expand Category Coverage", desc: "Add categories beyond dairy and bakery. Refine markdown logic with real sell-through data. Deepen WhatsApp demand channels." },
                  { title: "Build Recovery Benchmarks", desc: "Aggregate clearance data across stores. Create trusted category-level benchmarks. This is the data layer moat." },
                  { title: "Layer Broader Inventory Insights", desc: "Supplier visibility, replenishment signals, broader perishables intelligence. Built on top of operational proof." }
                ].map((phase, i) => (
                  <FadeIn key={i} delay={i * 0.15}>
                    <div className="flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-[#111] border-2 border-[#1a1a1a] flex items-center justify-center font-mono text-sm text-primary mb-6 z-10 shadow-[0_0_0_8px_#0a0a0a]">
                        P{i + 1}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 pr-4">{phase.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: MARKET */}
        <section id="market" className="py-16 px-6 max-w-4xl mx-auto">
          <FadeIn className="mb-8 md:text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Market</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">A Large Market Entered Through a Specific Pain</h3>
            <p className="text-lg text-muted-foreground">
              The addressable opportunity is large. Our entry point is deliberately narrow.
            </p>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.1}>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 flex-shrink-0 text-sm font-mono text-white/40 uppercase mt-1">TAM</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Urban Indian Grocery Retail</h4>
                  <p className="text-muted-foreground">Organized and semi-organized grocery in Tier 1 and Tier 2 Indian cities. Large, underpenetrated by operational tooling.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start ml-0 md:ml-8">
                <div className="w-24 flex-shrink-0 text-sm font-mono text-white/60 uppercase mt-1">SAM</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Small Supermarket Chains + Premium Grocers</h4>
                  <p className="text-muted-foreground">5-20 store chains and neighborhood premium grocers with digital POS — the segment with a meaningful perishables mix and a willingness to adopt store tooling.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-[#1a1a1a] border border-primary/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start ml-0 md:ml-16 shadow-[0_0_30px_rgba(34,197,94,0.05)]">
                <div className="w-24 flex-shrink-0 text-sm font-mono text-primary font-bold uppercase mt-1">Wedge</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Fast-Expiring SKUs, Single City Cluster</h4>
                  <p className="text-white/80">Dairy, bakery, packaged fresh, cut fruit. One city at a time. Where the workflow is operational and the pain is most acute.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <p className="text-sm font-mono text-muted-foreground">We do not inflate the TAM. We earn the market from the inside out.</p>
          </FadeIn>
        </section>

        {/* SECTION 11: TIMING */}
        <section id="timing" className="py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-8 md:text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Why Now</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">The Conditions Are Right</h3>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                { icon: Smartphone, title: "WhatsApp as a Native Commerce Layer", text: "Stores already use WhatsApp for customer communication. Clearance via WhatsApp is a workflow extension, not a new behavior." },
                { icon: MonitorSmartphone, title: "Digital POS Adoption", text: "More small chains now run digital billing. Expiry data exists. The gap is a workflow to act on it." },
                { icon: TrendingDown, title: "Margin Pressure Is Acute", text: "Operating margins in grocery are thin and thinning. Waste reduction tools have a direct and measurable ROI case." },
                { icon: Wrench, title: "Recovery Tools, Not More Dashboards", text: "Stores are drowning in data but understaffed for action. FreshNode is operational, not analytical." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12: FINAL CTA */}
        <section id="contact" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111811] z-0"></div>
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Back a More Credible Retail Recovery Layer
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                We're raising pre-seed capital to prove the clearance workflow in one city cluster and one store format before expanding.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  onClick={handleContact}
                >
                  Request Deck
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-full px-8 py-6 text-base font-medium"
                  onClick={() => window.location.href = "mailto:hello@freshnode.in?subject=Intro Call Request"}
                >
                  Book Intro Call
                </Button>
              </div>

              <p className="text-sm font-serif italic text-white/50">
                Built for operational recovery first. Scale comes later.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <span className="text-2xl font-bold tracking-tight text-white flex items-center mb-4">
                FreshNode
                <span className="w-2 h-2 rounded-full bg-primary ml-1 translate-y-[2px]"></span>
              </span>
              <p className="text-muted-foreground text-sm max-w-xs">
                Same-day clearance. Recovered margin.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold mb-2">Sections</h4>
              <button onClick={() => scrollTo('problem')} className="text-left text-sm text-muted-foreground hover:text-white transition-colors w-fit">Problem</button>
              <button onClick={() => scrollTo('workflow')} className="text-left text-sm text-muted-foreground hover:text-white transition-colors w-fit">Workflow</button>
              <button onClick={() => scrollTo('model')} className="text-left text-sm text-muted-foreground hover:text-white transition-colors w-fit">Model</button>
              <button onClick={() => scrollTo('metrics')} className="text-left text-sm text-muted-foreground hover:text-white transition-colors w-fit">Metrics</button>
              <button onClick={() => scrollTo('roadmap')} className="text-left text-sm text-muted-foreground hover:text-white transition-colors w-fit">Path</button>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <a href="mailto:hello@freshnode.in" className="text-primary hover:text-primary/80 transition-colors mb-6 block">
                hello@freshnode.in
              </a>
              <div className="flex gap-2 max-w-sm">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 w-full"
                />
                <Button className="bg-white/10 text-white hover:bg-white/20 rounded-lg" onClick={() => {}}>
                  Updates
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} FreshNode. Built for operational recovery.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

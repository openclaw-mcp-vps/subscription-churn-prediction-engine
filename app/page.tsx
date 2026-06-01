export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For SaaS Founders &amp; Customer Success
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Customers Will{" "}
          <span className="text-[#58a6ff]">Churn Next</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnGuard analyzes usage patterns, support tickets, and billing data to surface at-risk accounts before they cancel — and tells you exactly what to do about it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting Churn — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">87%</p>
            <p className="text-xs text-[#8b949e] mt-1">Churn prediction accuracy</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">14 days</p>
            <p className="text-xs text-[#8b949e] mt-1">Avg. early warning lead time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">3x</p>
            <p className="text-xs text-[#8b949e] mt-1">Retention improvement</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-sm text-[#8b949e] mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited customer profiles",
              "Real-time churn risk scores",
              "Usage + billing + support analysis",
              "AI-powered retention playbooks",
              "Slack &amp; email alerts",
              "CSV &amp; API data import"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does ChurnGuard predict churn?",
              a: "ChurnGuard connects to your existing data sources — product analytics, billing systems, and support tools — and runs ML models trained on SaaS churn patterns to score each customer's cancellation risk daily."
            },
            {
              q: "What data sources does it support?",
              a: "We support CSV uploads and REST API integrations with popular tools like Stripe, Intercom, Mixpanel, and Segment. More integrations are added regularly."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. There are no long-term contracts. You can cancel your $19/mo subscription at any time from your account dashboard and you won't be charged again."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  );
}

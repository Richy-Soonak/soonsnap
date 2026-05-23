import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SoonSnap Privacy Policy — how we collect, use, and protect your data.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-void text-[#F8F9FC]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-2 sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
          Privacy Policy
        </h1>
        <p className="text-[#555] text-sm mb-10">Last updated: May 2026</p>

        <div className="space-y-8 text-[#999] leading-relaxed text-[15px]">
          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              1. Information We Collect
            </h2>

            <h3 className="text-[#ccc] font-medium mb-2 mt-4">Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-[#F8F9FC]">Email address</span> — required for account creation</li>
              <li><span className="text-[#F8F9FC]">Solana wallet address</span> — optional, required for Tier 2 (SOONAK Holder) verification</li>
              <li><span className="text-[#F8F9FC]">URLs submitted</span> — website addresses you enter for video generation</li>
              <li><span className="text-[#F8F9FC]">Edit prompts</span> — text instructions you write for video edits</li>
            </ul>

            <h3 className="text-[#ccc] font-medium mb-2 mt-4">Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-[#F8F9FC]">Usage data</span> — number of videos rendered, edits made, tiers used</li>
              <li><span className="text-[#F8F9FC]">Device data</span> — browser type, screen resolution (for optimising video output)</li>
              <li><span className="text-[#F8F9FC]">Log data</span> — IP address, access times, error logs (retained 30 days)</li>
            </ul>

            <h3 className="text-[#ccc] font-medium mb-2 mt-4">Information From Third Parties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-[#F8F9FC]">Stripe</span> — payment processing for credit purchases (we do not see or store card details)</li>
              <li><span className="text-[#F8F9FC]">Google AdSense</span> (Tier 1 only) — ad delivery may involve cookies; see Section 6</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide, maintain, and improve the Service</li>
              <li>Verify SOONAK token balances for Tier 2 access</li>
              <li>Process credit purchases via Stripe</li>
              <li>Deliver rendered videos and version history</li>
              <li>Send service notifications (render complete, account updates)</li>
              <li>Display advertisements to Tier 1 users</li>
              <li>Prevent abuse and enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              3. Data Storage &amp; Retention
            </h2>
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="space-y-3 text-sm">
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Account info (email, tier)</span>
                  <span>Duration of account</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Solana wallet address</span>
                  <span>Duration of account (hashed)</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Rendered videos (MP4)</span>
                  <span>7 days, then auto-deleted</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Captured site assets</span>
                  <span>30 days, then auto-deleted</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Version thumbnails</span>
                  <span>30 days, then auto-deleted</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Usage logs</span>
                  <span>30 days</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Payment records</span>
                  <span>Per Stripe&apos;s retention policy</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              4. Wallet Data
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We read your Solana wallet balance via public RPC to verify $SOONAK holdings.</li>
              <li>We <span className="text-gold font-medium">never</span> request wallet signatures, spending authority, or on-chain transactions.</li>
              <li>Your wallet address is stored in hashed form for privacy.</li>
              <li>We do not track your wallet activity beyond checking $SOONAK balance.</li>
              <li>Token balance is cached for 24 hours and re-verified on next login.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              5. Third-Party Services
            </h2>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="text-[#F8F9FC] font-medium mb-2">Stripe</h3>
                <p className="text-sm">Used for processing credit purchases (Tier 3). We do not collect, store, or have access to your full card number.</p>
                <p className="text-xs text-[#555] mt-2">Stripe&apos;s privacy policy: stripe.com/privacy</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="text-[#F8F9FC] font-medium mb-2">Google AdSense (Tier 1 only)</h3>
                <p className="text-sm">Used to display advertisements to free-tier users. AdSense may use cookies to serve personalised ads. Ads are sandboxed and cannot access your SoonSnap account data. Ads are not displayed during video playback.</p>
                <p className="text-xs text-[#555] mt-2">Opt out of personalised advertising via Google Ad Settings</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="text-[#F8F9FC] font-medium mb-2">Solana RPC</h3>
                <p className="text-sm">Used for read-only balance verification (Tier 2). Your wallet address is sent to the Solana blockchain via RPC — this is public information.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              6. Cookies
            </h2>
            <div className="bg-card border border-border rounded-2xl p-6 text-sm">
              <div className="space-y-3">
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Session token</span>
                  <span>Authentication — Until logout or 30 days</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">Preferences</span>
                  <span>Theme, settings — 1 year</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-0">
                  <span className="text-[#F8F9FC]">AdSense cookies</span>
                  <span>Ad delivery (Tier 1 only) — Per Google&apos;s policy</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm">You may disable cookies in your browser. Some features may not work without session cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              7. Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="text-gold font-medium">Access</span> — request a copy of your personal data</li>
              <li><span className="text-gold font-medium">Delete</span> — request deletion of your account and associated data</li>
              <li><span className="text-gold font-medium">Export</span> — download your rendered videos before account deletion</li>
              <li><span className="text-gold font-medium">Rectify</span> — correct inaccurate information</li>
              <li><span className="text-gold font-medium">Opt out</span> — disable personalised advertising (Tier 1)</li>
            </ul>
            <p className="mt-3">To exercise any right, contact: <span className="text-gold">soonsnap@richysoonak.com</span></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              8. Data Security
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Encrypted data transmission (TLS/HTTPS)</li>
              <li>Row-level security on all database tables</li>
              <li>Signed URLs for video downloads (24-hour expiry)</li>
              <li>Wallet addresses stored hashed, not plaintext</li>
              <li>Sandboxed rendering environment (no cross-user data access)</li>
              <li>Rate limiting to prevent automated data harvesting</li>
            </ul>
            <p className="mt-3 text-sm">No system is perfectly secure. We cannot guarantee absolute security of your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              9. Children&apos;s Privacy
            </h2>
            <p>The Service is not intended for anyone under 18. We do not knowingly collect data from children. If we become aware that a child under 18 has provided personal information, we will delete it.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              10. International Users
            </h2>
            <p>The Service is operated from the United Kingdom. If you access the Service from outside the UK, your data will be transferred to and processed in the UK. By using the Service, you consent to this transfer.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              11. Changes to This Policy
            </h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or a notice on the Service. Continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F9FC] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              12. Contact
            </h2>
            <p>For privacy questions or data requests:</p>
            <p className="mt-2">Email: <span className="text-gold">soonsnap@richysoonak.com</span></p>
            <p className="text-sm">Response time: within 30 days</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a href="/soonsnap/" className="text-teal hover:text-gold transition-colors text-sm">← Back to SoonSnap</a>
        </div>
      </div>
    </main>
  );
}

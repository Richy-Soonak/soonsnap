# Privacy Policy

**Last updated: May 2026**

This Privacy Policy describes how SoonSnap ("we", "our", "us"), a product of SOONAK, collects, uses, and protects your information when you use soonsnap.richysoonak.com ("the Service").

---

## 1. Information We Collect

### Information You Provide
- **Email address** — required for account creation
- **Solana wallet address** — optional, required for Tier 2 (SOONAK Holder) verification
- **URLs submitted** — website addresses you enter for video generation
- **Edit prompts** — text instructions you write for video edits

### Information Collected Automatically
- **Usage data** — number of videos rendered, edits made, tiers used
- **Device data** — browser type, screen resolution (for optimising video output)
- **Log data** — IP address, access times, error logs (retained 30 days)

### Information From Third Parties
- **Stripe** — payment processing for credit purchases (we do not see or store card details)
- **Google AdSense** (Tier 1 only) — ad delivery may involve cookies; see Section 6

## 2. How We Use Your Information

We use collected information to:
- Provide, maintain, and improve the Service
- Verify SOONAK token balances for Tier 2 access
- Process credit purchases via Stripe
- Deliver rendered videos and version history
- Send service notifications (render complete, account updates)
- Display advertisements to Tier 1 users
- Prevent abuse and enforce our Terms of Service

## 3. Data Storage & Retention

| Data Type | Storage Location | Retention |
|-----------|-----------------|-----------|
| Account info (email, tier) | Supabase (hosted) | Duration of account |
| Solana wallet address | Supabase (hashed) | Duration of account |
| Rendered videos (MP4) | Cloudflare R2 or local | 7 days, then auto-deleted |
| Captured site assets | Cloudflare R2 or local | 30 days, then auto-deleted |
| Version thumbnails | Cloudflare R2 or local | 30 days, then auto-deleted |
| Usage logs | Server logs | 30 days |
| Payment records | Stripe (we store reference only) | Per Stripe's retention policy |

## 4. Wallet Data

- We read your Solana wallet balance via public RPC to verify $SOONAK holdings.
- We **never** request wallet signatures, spending authority, or on-chain transactions.
- Your wallet address is stored in hashed form for privacy.
- We do not track your wallet activity beyond checking $SOONAK balance.
- Token balance is cached for 24 hours and re-verified on next login.

## 5. Third-Party Services

### Stripe
- Used for processing credit purchases (Tier 3).
- We do not collect, store, or have access to your full card number.
- Stripe's privacy policy: https://stripe.com/privacy

### Google AdSense (Tier 1 only)
- Used to display advertisements to free-tier users.
- AdSense may use cookies to serve personalised ads.
- You can opt out of personalised advertising via [Google Ad Settings](https://adssettings.google.com).
- Ads are sandboxed and cannot access your SoonSnap account data.
- Ads are not displayed during video playback.

### Solana RPC
- Used for read-only balance verification (Tier 2).
- Your wallet address is sent to the Solana blockchain via RPC — this is public information.

## 6. Cookies

| Cookie | Purpose | Duration |
|--------|---------|----------|
| Session token | Authentication | Until logout or 30 days |
| Preferences | Theme, settings | 1 year |
| AdSense cookies | Ad delivery (Tier 1 only) | Per Google's policy |

You may disable cookies in your browser. Some features may not work without session cookies.

## 7. Your Rights

You have the right to:
- **Access** — request a copy of your personal data
- **Delete** — request deletion of your account and associated data
- **Export** — download your rendered videos before account deletion
- **Rectify** — correct inaccurate information
- **Opt out** — disable personalised advertising (Tier 1)

To exercise any right, contact: soonsnap@richysoonak.com

## 8. Data Security

We implement reasonable security measures including:
- Encrypted data transmission (TLS/HTTPS)
- Row-level security on all database tables
- Signed URLs for video downloads (24-hour expiry)
- Wallet addresses stored hashed, not plaintext
- Sandboxed rendering environment (no cross-user data access)
- Rate limiting to prevent automated data harvesting

No system is perfectly secure. We cannot guarantee absolute security of your data.

## 9. Children's Privacy

The Service is not intended for anyone under 18. We do not knowingly collect data from children. If we become aware that a child under 18 has provided personal information, we will delete it.

## 10. International Users

The Service is operated from the United Kingdom. If you access the Service from outside the UK, your data will be transferred to and processed in the UK. By using the Service, you consent to this transfer.

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of material changes via email or a notice on the Service. Continued use after changes constitutes acceptance.

## 12. Contact

For privacy questions or data requests:
- Email: soonsnap@richysoonak.com
- Response time: within 30 days

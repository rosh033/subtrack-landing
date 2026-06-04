import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal | SubParse",
  description: "SubParse privacy policy and terms of service.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <header className="border-b border-[var(--color-border)] py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
          >
            &larr; Back to SubParse
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <section id="privacy" className="mb-20">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mb-8">
            Last updated: June 4, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-[var(--color-foreground)]">
            <div>
              <h2 className="text-base font-semibold mb-2">Who we are</h2>
              <p>
                SubParse is a subscription tracking app (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;, &ldquo;our&rdquo;). You can reach us at{" "}
                <a
                  href="mailto:hello@subparse.com"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  hello@subparse.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">What we collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Account information:</strong> your email address and
                  name when you sign up
                </li>
                <li>
                  <strong>Subscription data:</strong> details you enter or
                  upload screenshots of
                </li>
                <li>
                  <strong>Usage data:</strong> basic analytics on how you use the
                  app
                </li>
                <li>
                  <strong>Payment information:</strong> processed securely by
                  Stripe; we never store card details
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">How we use it</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To provide and improve SubParse</li>
                <li>
                  To send transactional emails (magic links, receipts) via Resend
                </li>
                <li>To process payments via Stripe</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Third parties</h2>
              <p>
                We share data only with the services needed to operate SubParse:
                Supabase (database and auth), Stripe (payments), Resend (email),
                Vercel (hosting), and OpenAI (AI screenshot parsing). We do not
                sell your data.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Your rights</h2>
              <p>
                You can request deletion of your account and data at any time by
                emailing{" "}
                <a
                  href="mailto:hello@subparse.com"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  hello@subparse.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Cookies</h2>
              <p>
                We use only essential cookies required for authentication.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Changes</h2>
              <p>
                We may update this policy and will note the date above when we
                do.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-[var(--color-border)] mb-20" />

        <section id="terms">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mb-8">
            Last updated: June 4, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-[var(--color-foreground)]">
            <div>
              <h2 className="text-base font-semibold mb-2">Acceptance</h2>
              <p>
                By using SubParse, you agree to these terms. If you don&apos;t
                agree, don&apos;t use the service.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">
                What SubParse does
              </h2>
              <p>
                SubParse helps you track and manage your recurring
                subscriptions. It is provided as-is and is not a financial
                advisory service.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Your account</h2>
              <p>
                You are responsible for maintaining the security of your account
                and for all activity under it.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Acceptable use</h2>
              <p>
                You agree not to misuse SubParse, attempt to reverse-engineer
                it, or use it for any unlawful purpose.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Payments</h2>
              <p>
                Pro plan subscriptions are billed annually via Stripe.
                Founders tier is a one-time payment. Refunds are handled on a
                case-by-case basis after contacting{" "}
                <a
                  href="mailto:hello@subparse.com"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  hello@subparse.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate these terms.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Liability</h2>
              <p>
                SubParse is provided without warranties of any kind. To the
                fullest extent permitted by law, we are not liable for any
                indirect or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Governing law</h2>
              <p>
                These terms are governed by the laws of Australia.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Contact</h2>
              <p>
                <a
                  href="mailto:hello@subparse.com"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  hello@subparse.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

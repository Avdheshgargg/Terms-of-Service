import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</CardTitle>
            <p className="text-lg text-gray-600">
              <strong>Effective Date:</strong> 30, June, 2025
            </p>
          </CardHeader>

          <CardContent className="prose prose-gray max-w-none px-8 pb-8">
            <div className="space-y-8">
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Welcome to bubbleit ("we", "our", or "us"). These Terms of Service govern your use of our website and
                  platform, including any services, tools, or digital content related to AI-generated images and
                  creative tools.
                </p>
                <p className="mt-4">
                  By accessing or using our service, you agree to be bound by these Terms. If you do not agree, please
                  do not use our platform.
                </p>
              </div>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Use of the Service</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• You may use our platform to generate images for personal, commercial, or marketing use.</li>
                  <li>• You are responsible for ensuring that your use complies with local laws.</li>
                  <li>
                    • We reserve the right to suspend or terminate accounts that abuse, spam, or misuse the service.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Accounts</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• You must create an account to access image generation features.</li>
                  <li>• You are responsible for securing your login credentials.</li>
                  <li>• We are not liable for any unauthorized access to your account.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• All images generated using our tool are owned by you, the user.</li>
                  <li>• We do not claim ownership of your generated content.</li>
                  <li>• However, we may use non-identifiable data to improve our AI model.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payments and Plans</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• We offer free trial plans and paid monthly/yearly subscriptions.</li>
                  <li>
                    • Credits are deducted per generation. When your credits run out, you must upgrade to continue.
                  </li>
                  <li>• Prices and features may change. We will notify users of changes when possible.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Policy</h2>
                <div className="text-gray-700 space-y-4">
                  <p>We offer a 7-day money-back guarantee on paid plans.</p>
                  <p>
                    To request a refund, please email us at <strong>support@bubbleit.in</strong> within 7 days of
                    purchase.
                  </p>
                  <p>
                    Refunds are <strong>not guaranteed</strong> after 7 days, but we may review requests case-by-case
                    if:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• The service was unavailable for extended periods</li>
                    <li>• You were charged incorrectly</li>
                  </ul>
                  <p>We do not offer refunds for unused image credits.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
                <div className="text-gray-700">
                  <p>We reserve the right to suspend or terminate accounts that:</p>
                  <ul className="space-y-2 mt-2 ml-4">
                    <li>• Violate our terms</li>
                    <li>• Attempt to manipulate or abuse the platform</li>
                    <li>• Upload harmful or illegal content</li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to These Terms</h2>
                <p className="text-gray-700">
                  We may update these Terms of Service at any time. Changes will be posted on this page, and continued
                  use after changes means you accept the updated terms.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-700">
                  For questions or support, please contact us at <strong>support@bubbleit.in</strong>
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

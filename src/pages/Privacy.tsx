import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Privacy Policy Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-8 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 text-center">
            Your privacy is important to us. This policy outlines how Viby collects, uses, and protects your data.
          </p>
          
          <div className="prose prose-lg max-w-none mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-6">
              We may collect personal information such as your email address for early access sign-ups, as well as non-personal data like images or text inputs for caption generation. All data is processed securely.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. How We Use Your Data
            </h2>
            <p className="text-muted-foreground mb-6">
              Your data is used to provide and improve Viby's services, including generating captions, sending updates, and personalizing your experience. We do not sell your data to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Data Security
            </h2>
            <p className="text-muted-foreground mb-6">
              We implement industry-standard security measures to protect your data. However, no online service is 100% secure, and we encourage you to use strong passwords and secure connections.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Your Rights
            </h2>
            <p className="text-muted-foreground mb-6">
              You have the right to access, update, or delete your personal information. Contact us at{" "}
              <a 
                href="mailto:support@viby.site" 
                className="text-primary hover:text-primary/80 underline"
              >
                support@viby.site
              </a>{" "}
              to exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Changes to This Policy
            </h2>
            <p className="text-muted-foreground mb-6">
              We may update this policy periodically. Changes will be posted on this page with an updated effective date.
            </p>

            <p className="mt-10 text-base text-foreground">
              <strong>Effective Date:</strong> June 23, 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
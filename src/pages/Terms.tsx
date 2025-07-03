import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Terms of Service Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-8 text-center">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 text-center">
            By using Viby, you agree to these terms. Please read them carefully.
          </p>
          
          <div className="prose prose-lg max-w-none mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using Viby, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Use of Services
            </h2>
            <p className="text-muted-foreground mb-6">
              You may use Viby to generate captions for personal or commercial social media posts. You are responsible for ensuring your use complies with applicable laws and platform guidelines.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Credit System
            </h2>
            <p className="text-muted-foreground mb-6">
              Viby operates on a credit-based system ($1 = 10 captions). Credits are non-refundable and non-transferable. Payments are processed securely via MPESA with PayHero or Crypto with NowPayments.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. User Content
            </h2>
            <p className="text-muted-foreground mb-6">
              You retain ownership of any images or text you submit to Viby. By uploading content, you grant us a non-exclusive license to process it for caption generation.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Termination
            </h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to suspend or terminate your access to Viby for violations of these terms or misuse of the service.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">
              6. Contact Us
            </h2>
            <p className="text-muted-foreground mb-6">
              For questions about these terms, reach out at{" "}
              <a 
                href="mailto:support@viby.site" 
                className="text-primary hover:text-primary/80 underline"
              >
                support@viby.site
              </a>
              .
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

export default Terms;
import { Helmet } from "react-helmet-async";
import AboutUsHero from "../components/AboutUsHero";


const AboutUs = () => {
  return (
    <main className="relative">
      <Helmet>
        {/* Core SEO */}
        <title>Σχετικά με εμάς | Κάτω Απ' το Αυλάκι</title>
        <meta name="description" content="Γνωρίστε τη φιλοσοφία μας και τον φυσικό τρόπο καλλιέργειας των προϊόντων μας στην Κορινθία." />
        <link rel="canonical" href="https://www.downthegap.gr/AboutUs" />

        {/* Open Graph (Facebook/WhatsApp/LinkedIn) */}
        <meta property="og:title" content="Σχετικά με εμάς | Κάτω Απ' το Αυλάκι" />
        <meta property="og:description" content="Φυσικά προϊόντα από τη γη της Κορινθίας. Μάθετε ποιοι είμαστε." />
        <meta property="og:image" content="https://www.downthegap.com/assets/fill3.avif" />
        <meta property="og:url" content="https://www.downthegap.gr/AboutUs" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (Simplified - uses OG if these are missing) */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data (JSON-LD) - Fixed syntax for Vite/CRA */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Σχετικά με Εμάς - Κάτω Απ’ το Αυλάκι",
              "url": "https://www.downthegap.gr/AboutUs"
            }
          `}
        </script>
      </Helmet>
      <AboutUsHero />
    </main>
  );
};

export default AboutUs;
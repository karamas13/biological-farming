import { Helmet } from "react-helmet-async";
import MinInfo from "../components/MinInfo";
import Hero from "../components/Hero";
import FarmsSection from "../components/FarmsSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomePage = () => {
  // We define the Schema as a constant to keep the JSX clean
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://downthegap.gr/#website",
        "url": "https://downthegap.gr/",
        "name": "Κάτω Απ’ το Αυλάκι",
        "publisher": { "@id": "https://downthegap.gr/#organization" }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://downthegap.gr/#organization",
        "name": "Κάτω Απ’ το Αυλάκι",
        "image": "https://downthegap.gr/assets/logo.png",
        "url": "https://downthegap.gr/",
        "address": {
          "@type": "20100",
          "addressLocality": "Corinth",
          "addressRegion": "Peloponnese",
          "addressCountry": "GR"
        },
        "description": "Αυθεντικά βιολογικά προϊόντα από την καρδιά της Κορινθίας."
      }
    ]
  };

  return (
    <div className="font-serif scrollbar-thin scrollbar-track-green-950 scrollbar-thumb-lime-700 min-h-screen selection:bg-lime-700 selection:text-white">
      
      <Helmet>
        <title>Αρχική | Κάτω απ' το αυλάκι – Βιολογικά Προϊόντα Κορινθίας</title>
        <meta name="description" content="Καλώς ήρθατε στη Φάρμα μας. Παράγουμε αυθεντικά βιολογικά προϊόντα με σεβασμό στη φύση της Κορινθίας. Ανακαλύψτε τις καλλιέργειές μας." />
        <link rel="canonical" href="downthegap.gr" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Κάτω απ' το αυλάκι | Βιολογικά Ελληνικά Προϊόντα" />
        <meta property="og:description" content="Ανακαλύψτε τη φιλοσοφία πίσω από την παραγωγή βιολογικών προϊόντων υψηλής ποιότητας στην Ελλάδα." />
        <meta property="og:url" content="https://downthegap.gr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://downthegap.gr/images/og-image.jpg" />
        <meta property="og:locale" content="el_GR" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Main tag is essential for Accessibility scores */}
      <main id="main-content" className="overflow-x-hidden">
        <NavBar />
        <Hero/>
        <MinInfo/>
        <FarmsSection />
      </main>

      <Footer color="#020617" />
    </div>
  );
};

export default HomePage;
import FarmsSection from "../components/FarmsSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HomeButton from "../components/HomeButton";
import { Helmet } from "react-helmet-async";

const Farms = () => {
  return (
    <div className="overflow-hidden max-wscreen">
      <Helmet>
        {/* Page Title */}
        <title>Βιολογικές Φάρμες | Κάτω Απ’ το Αυλάκι</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Συλλογή από τις φάρμες και τα προϊόντα του δικτύου μας που καλλιεργούντε με φυσικές και βιολογικές μεθόδους."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="βιολογικές φάρμες, φυσική καλλιέργεια, ελληνικές φάρμες, οικολογική γεωργία, Κάτω Απ’ το Αυλάκι"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Βιολογικές Φάρμες | Κάτω Απ’ το Αυλάκι" />
        <meta
          property="og:description"
          content="Συλλογή από τις φάρμες και τα προϊόντα του δικτύου μας που καλλιεργούντε με φυσικές και βιολογικές μεθόδους."
        />
        <meta property="og:image" content="https://example.com/photos/og-farms-image.jpg" />
        <meta property="og:url" content="https://example.com/Farms" />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://example.com/Farms" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Βιολογικές Φάρμες",
            "description":
              "Συλλογή από τις φάρμες και τα προϊόντα του δικτύου μας που καλλιεργούντε με φυσικές και βιολογικές μεθόδους.",
            "url": "https://example.com/Farms",
            "publisher": {
              "@type": "Organization",
              "name": "Κάτω Απ’ το Αυλάκι",
              "url": "https://example.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/photos/logonew2.avif"
              }
            }
          })}
        </script>
      </Helmet>

      <NavBar />
      <FarmsSection />
      <Footer color={"#020617"} />
      <HomeButton />
    </div>
  );
};

export default Farms;

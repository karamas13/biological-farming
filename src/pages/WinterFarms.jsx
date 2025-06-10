import { SmoothScrollLenis } from "../components/SmoothScrollLenis";
import { Helmet } from "react-helmet-async";

const WinterFarms = () => {
  return (
    <div className="font-serif scrollbar-thin scrollbar-track-green-950 scrollbar-thumb-lime-700 h-32 min-h-screen">
      <Helmet>
        {/* Page Title */}
        <title>Χειμερινές Βιολογικές Καλλιέργειες | Κάτω Απ’ το Αυλάκι</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Γνωρίστε τις χειμερινές βιολογικές καλλιέργειες του δικτύου μας. Καλλιέργειες που σέβονται τη γη και την εποχικότητα με βάση την αειφορία."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="χειμερινές καλλιέργειες, βιολογική γεωργία, βιώσιμες καλλιέργειες, ελληνικά προϊόντα, χειμερινά λαχανικά"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Χειμερινές Βιολογικές Καλλιέργειες | Κάτω Απ’ το Αυλάκι" />
        <meta
          property="og:description"
          content="Μάθετε περισσότερα για τις χειμερινές καλλιέργειες μας και τις μεθόδους καλλιέργειας που σέβονται το περιβάλλον."
        />
        <meta property="og:image" content="https://example.com/photos/winter-farm-cover.jpg" />
        <meta property="og:url" content="https://example.com/WinterFarms" />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://example.com/WinterFarms" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Χειμερινές Βιολογικές καλλιέργειες",
            "description":
              "Σελίδα για τις χειμερινές βιολογικές καλλιέργειες του οργανισμού ‘Κάτω Απ’ το Αυλάκι’. Αειφόρες γεωργικές πρακτικές και εποχική παραγωγή.",
            "url": "https://example.com/WinterFarms",
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

      <SmoothScrollLenis />
    </div>
  );
};

export default WinterFarms;

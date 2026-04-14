import { Helmet } from "react-helmet-async";
import { SmoothScrollLenis } from "../components/SmoothScrollLenis";

const WinterFarms = () => {
  return (
    <div className="font-serif">
      <Helmet>
        <title>Χειμερινές Βιολογικές Καλλιέργειες | Κάτω Απ’ το Αυλάκι</title>
        <meta name="description" content="Ανακαλύψτε τις χειμερινές βιολογικές καλλιέργειες μας. Από μπρόκολο και λάχανο μέχρι φρέσκα λεμόνια, καλλιεργούμε με σεβασμό στην αειφορία και την εποχικότητα." />
        <link rel="canonical" href="https://downthegap.gr/WinterFarms" />

        {/* Social Media (Open Graph) */}
        <meta property="og:title" content="Χειμερινές Βιολογικές Καλλιέργειες | Κάτω Απ’ το Αυλάκι" />
        <meta property="og:description" content="Ανακαλύψτε τα φρέσκα χειμερινά λαχανικά μας, καλλιεργημένα με βιολογικές πρακτικές." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://downthegap.gr/photos/laxano1.avif" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Χειμερινές Βιολογικές Καλλιέργειες",
            "description": "Φρέσκα χειμερινά λαχανικά και καρποί από το δίκτυο ‘Κάτω Απ’ το Αυλάκι’.",
            "url": "https://downthegap.gr/WinterFarms",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Γογγυλοκράμβη" },
                { "@type": "ListItem", "position": 2, "name": "Ελιά" },
                { "@type": "ListItem", "position": 3, "name": "Μπρόκολο" },
                { "@type": "ListItem", "position": 4, "name": "Λεμόνι" },
                { "@type": "ListItem", "position": 5, "name": "Λαχανάκια Βρυξελλών" },
                { "@type": "ListItem", "position": 6, "name": "Κρεμμυδάκι Φρέσκο" },
                { "@type": "ListItem", "position": 7, "name": "Λάχανο" },
                { "@type": "ListItem", "position": 8, "name": "Κουνουπίδι" },
                { "@type": "ListItem", "position": 9, "name": "Μαρούλι" }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Κάτω Απ’ το Αυλάκι",
              "logo": "https://downthegap.gr/photos/logonew2.avif"
            }
          })}
        </script>
      </Helmet>
      <SmoothScrollLenis />
    </div>
  );
};

export default WinterFarms;
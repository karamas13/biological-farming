import { Helmet } from "react-helmet-async";
import { SmoothScrollLenis2 } from "../components/SmoothScrollLenis2";

const SummerFarms = () => {
  return (
    <div className="font-serif">
      <Helmet>
        <title>Θερινές Βιολογικές Καλλιέργειες | Κάτω Απ’ το Αυλάκι</title>
        <meta name="description" content="Ανακαλύψτε τις θερινές βιολογικές καλλιέργειες μας. Από κολοκύθια και καλαμπόκι μέχρι τομάτες, καλλιεργούμε με σεβασμό στην αειφορία και την εποχικότητα." />
        <link rel="canonical" href="https://yourdomain.gr/SummerFarms" />

        {/* Social Media (Open Graph) */}
        <meta property="og:title" content="Θερινές Βιολογικές Καλλιέργειες | Κάτω Απ’ το Αυλάκι" />
        <meta property="og:description" content="Ανακαλύψτε τα φρέσκα καλοκαιρινά λαχανικά μας, καλλιεργημένα με βιολογικές πρακτικές." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://downthegap.gr/photos/kolokythi6.avif" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Θερινές Βιολογικές Καλλιέργειες",
            "description": "Φρέσκα καλοκαιρινά λαχανικά και καρποί από το δίκτυο ‘Κάτω Απ’ το Αυλάκι’.",
            "url": "https://downthegap.gr/SummerFarms",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Κολοκύθι" },
                { "@type": "ListItem", "position": 2, "name": "Καλαμπόκι" },
                { "@type": "ListItem", "position": 3, "name": "Πιπεριές" },
                { "@type": "ListItem", "position": 4, "name": "Τομάτες" },
                { "@type": "ListItem", "position": 5, "name": "Μελιτζάνες" },
                { "@type": "ListItem", "position": 6, "name": "Κρεμμυδάκι Φρέσκο" },
                { "@type": "ListItem", "position": 7, "name": "Μαρούλι" }
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
      <SmoothScrollLenis2 />
    </div>
  );
};

export default SummerFarms;
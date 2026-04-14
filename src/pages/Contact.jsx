import ContactUs from "../components/Contact";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const domain = "https://downthegap.gr"; 

  return (
    <div>
      <Helmet>
        {/* 1. THE BIG TWO: Title and Description. 
            Google uses these to build your search result 'snippet'.
        */}
        <title>Επικοινωνία | Κάτω Απ' το Αυλάκι - Βιολογικά Προϊόντα Κόρινθος</title>
        <meta
          name="description"
          content="Επικοινωνήστε με το αγρόκτημα 'Κάτω Απ' το Αυλάκι'. Βρείτε μας στην Κόρινθο για φρέσκα βιολογικά προϊόντα και τοπικές καλλιέργειες στην Πελοπόννησο."
        />

        {/* 2. CANONICAL: Prevents duplicate content issues */}
        <link rel="canonical" href={`${domain}/Contact`} />

        {/* 3. OPEN GRAPH: How the link looks when shared on Viber, Facebook, or WhatsApp */}
        <meta property="og:title" content="Επικοινωνία | Κάτω Απ' το Αυλάκι" />
        <meta
          property="og:description"
          content="Ελάτε σε επαφή μαζί μας για τα βιολογικά προϊόντα και την παραγωγή μας στην Κόρινθο."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/Contact`} />
        <meta property="og:image" content={`${domain}/assets/og-image.avif`} />
        <meta property="og:locale" content="el_GR" />

        {/* 4. TECHNICALS */}
        <meta charSet="utf-8" />
        <html lang="el" />

        {/* 5. STRUCTURED DATA: The actual 'Backdoor' to Google's ranking logic */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Κάτω Απ' το Αυλάκι",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Κόρινθος",
                "addressRegion": "Πελοπόννησος",
                "addressCountry": "GR"
              }
            }
          })}
        </script>
      </Helmet>
      <ContactUs />
    </div>
  );
};

export default Contact;
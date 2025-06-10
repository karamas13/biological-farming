import ContactUs from "../components/Contact";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Επικοινωνία | Κάτω Απ' το Αυλάκι</title>
        <meta
          name="description"
          content="Επικοινωνήστε μαζί μας για ερωτήσεις ή πληροφορίες σχετικά με τις βιολογικές μας καλλιέργειες στην Πελοπόννησο."
        />
        <meta
          name="keywords"
          content="επικοινωνία, κάτω απ' το αυλάκι, ελληνική καλλιέργεια, βιολογικές καλλιέργειες, Πελοπόννησος, τοπική γεωργία, αγρόκτημα, βιολογικά προϊόντα, κορινθία, Κόρινθος"
        />
        <link rel="canonical" href="https://yourdomain.gr/Contact" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Επικοινωνία | Κάτω Απ' το Αυλάκι" />
        <meta
          property="og:description"
          content="Επικοινωνήστε μαζί μας για οποιαδήποτε απορία γύρω από τις βιολογικές καλλιέργειές μας."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.gr/Contact" />
        <meta
          property="og:image"
          content="https://yourdomain.gr/assets/og-contact.jpg"
        />
        <meta property="og:locale" content="el_GR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Επικοινωνία | Κάτω Απ' το Αυλάκι" />
        <meta
          name="twitter:description"
          content="Ελάτε σε επαφή μαζί μας για περισσότερες πληροφορίες."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.gr/assets/og-contact.jpg"
        />
        
        {/* Language and charset */}
        <meta charSet="utf-8" />
        <html lang="el" />

        {/* Structured Data with JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Επικοινωνία - Κάτω Απ' το Αυλάκι",
            "description":
              "Επικοινωνήστε μαζί μας για οποιαδήποτε απορία.",
            "url": "https://yourdomain.gr/Contact",
            "publisher": {
              "@type": "Organization",
              "name": "Κάτω Απ' το Αυλάκι",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.gr/assets/logo.png"
              }
            },
            "inLanguage": "el"
          })}
        </script>
      </Helmet>

      <ContactUs />
    </div>
  );
};

export default Contact;

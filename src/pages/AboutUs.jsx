import { Helmet } from "react-helmet-async";
import AboutUsHero from "../components/AboutUsHero";

const AboutUs = () => {
  return (
    <div className="">
      <Helmet>
        {/* Page Title */}
        <title>Σχετικά με εμάς | Κάτω Απ' το Αυλάκι</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Μάθετε περισσότερα για τη φιλοσοφία μας και τον τρόπο που καλλιεργούμε φυσικά, φρέσκα προϊόντα στις λαϊκές αγορές της Κορινθίας και πέραν αυτής."
        />
        <meta
          name="keywords"
          content="σχετικά με εμάς, ελληνικές φάρμες, βιολογικές καλλιέργειες, τοπική γεωργία, παραδοσιακή γεωργία, βιολογικά προϊόντα, Πελοπόννησος, βιώσιμη καλλιέργεια, οικολογική γεωργία, φυσικά τρόφιμα, Κόρινθος, Κορινθία"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourdomain.gr/about-us" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Σχετικά με εμάς | Κάτω Απ' το Αυλάκι" />
        <meta
          property="og:description"
          content="Η οικογένειά μας προσφέρει φυσικά προϊόντα σε λαϊκές αγορές εντός και εκτός Κορινθίας. Μάθετε ποιοι είμαστε."
        />
        <meta property="og:url" content="https://www.yourdomain.gr/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourdomain.gr/assets/about-us-cover.jpg" />
        <meta property="og:locale" content="el_GR" />
        

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Σχετικά με εμάς | Κάτω Απ' το Αυλάκι" />
        <meta
          name="twitter:description"
          content="Φυσικά προϊόντα από τη γη μας για το τραπέζι σας. Γνωρίστε μας καλύτερα."
        />
        <meta name="twitter:image" content="https://www.yourdomain.gr/assets/about-us-cover.jpg" />

        {/* Language and charset */}
        <meta charSet="utf-8" />
        <html lang="el" />

         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Σχετικά με Εμάς - Κάτω Απ’ το Αυλάκι",
            "description": "Γνωρίστε την ιδιοσυγκρασία πίσω από το 'Κάτω Απ’ το Αυλάκι'. Προωθούμε τη βιώσιμη γεωργία και τις ελληνικές βιολογικές καλλιέργειες.",
            "url": "https://yourdomain.gr/AboutUs",
            "publisher": {
              "@type": "Organization",
              "name": "Κάτω Απ’ το Αυλάκι",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.gr/assets/logo.png"
              }
            },
            "inLanguage": "el"
          })}
         </script>

      </Helmet>

      <AboutUsHero />
    </div>
  );
};

export default AboutUs;

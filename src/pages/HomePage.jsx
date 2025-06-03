import { Helmet } from "react-helmet";
import MinInfo from "../components/MinInfo";
import Hero from "../components/Hero";
import FarmsSection from "../components/FarmsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden font-serif scrollbar-thin scrollbar-track-green-950 scrollbar-thumb-lime-700 min-h-screen">
      
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Αρχική | Κάτω απ' το αυλάκι – Ελληνικά Βιολογικά Προϊόντα</title>
        <meta
          name="description"
          content="Καλώς ήρθατε στη Φάρμα μας! Παράγουμε αυθεντικά βιολογικά προϊόντα, με αγάπη και σεβασμό στη φύση. Δείτε τις καλλιέργειές μας και μάθετε την ιστορία μας."
        />
         <meta
           name="keywords"
           content="βιολογικές φάρμες, ελληνικές καλλιέργειες, τοπικά προϊόντα, αυθεντική γεωργία, βιολογικά τρόφιμα, κόρινθος, λαϊκή αγορά, Κάτω απ' το αυλάκι, Κάτω από το αυλάκι, βιολογικά προϊόντα, κορινθία, βιολογικά προϊόντα Πελοπόννησος "
         />
        <link rel="canonical" href="https://yourdomain.gr/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Η Φάρμα Μας | Βιολογικά Ελληνικά Προϊόντα" />
        <meta
          property="og:description"
          content="Ανακαλύψτε τις φάρμες μας και τη φιλοσοφία πίσω από την παραγωγή βιολογικών προϊόντων υψηλής ποιότητας στην Ελλάδα."
        />
        <meta property="og:url" content="https://yourdomain.gr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.gr/images/og-image.jpg" />
        <meta property="og:locale" content="el_GR" />

        {/* Language and charset */}
        <meta charSet="utf-8" />
        <html lang="el" />
      </Helmet>

      <main>
        <Hero />
        <MinInfo />
        <FarmsSection />
      </main>

      <Footer color={"#020617"} />
    </div>
  );
};

export default HomePage;

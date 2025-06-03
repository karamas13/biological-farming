import { Helmet } from "react-helmet";
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

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourdomain.gr/about-us" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Σχετικά με εμάς | Κάτω Απ' το Αυλάκι" />
        <meta
          property="og:description"
          content="Η ομάδα μας προσφέρει φυσικά προϊόντα σε λαϊκές αγορές εντός και εκτός Κορινθίας. Μάθετε ποιοι είμαστε."
        />
        <meta property="og:url" content="https://www.yourdomain.gr/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourdomain.gr/assets/about-us-cover.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Σχετικά με εμάς | Κάτω Απ' το Αυλάκι" />
        <meta
          name="twitter:description"
          content="Φυσικά προϊόντα από τη γη μας για το τραπέζι σας. Γνωρίστε μας καλύτερα."
        />
        <meta name="twitter:image" content="https://www.yourdomain.gr/assets/about-us-cover.jpg" />
      </Helmet>

      <AboutUsHero />
    </div>
  );
};

export default AboutUs;

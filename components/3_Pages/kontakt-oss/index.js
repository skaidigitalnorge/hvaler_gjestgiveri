import { Grid, Layout } from "../../1_Small/Base";
import { Footer } from "../../2_Big/Navigation/Footer";
import { Navbar } from "../../2_Big/Navigation/Navbar";
import { GoogleMapsEmbedded } from "../../features/GoogleMaps/GoogleMapsEmbedded";
import { Map } from "../../features/GoogleMaps/Map";
import { ContactForm } from "./ContactForm";
import { HeroContactPage } from "./HeroContactPage";

export const KontaktOss = ({ content }) => {
  return (
    <>
      <Navbar />
      <HeroContactPage content={content} />
      <Layout>
        <ContactForm />
        <GoogleMapsEmbedded c="h-400" />
      </Layout>

      <Footer />
    </>
  );
};

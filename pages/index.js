import { NextSeo } from "next-seo";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";

export default function Home() {
  return (
    <>
      <NextSeo
        title=""
        description=""
        openGraph={{
          title: "",
          description: "",
          images: [
            {
              url: "",
              width: "",
              height: "",
              alt: "",
            },
          ],
        }}
        twitter={{
          handle: "@skai_digital",
          site: "@skaidigital",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <div className="rowToColLg border hover">
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <a className="button">Test</a>
      </div>
      <Footer />
    </>
  );
}

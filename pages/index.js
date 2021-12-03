import { NextSeo, SocialProfileJsonLd } from "next-seo";
import { FourEightSix, FourEightTwelve, FourFourThree, Grid, Layout } from "../components/1_Small/Base";
import { PrimaryButton, PrimaryButtonHref, SecondaryButton, SecondaryButtonHref } from "../components/1_Small/Buttons";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { fetchContent } from "../components/1_Small/contentfulFetch";
import { HorizontalCardCTA } from "../components/1_Small/HorizontalCardCTA";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "../components/1_Small/ContentfulOptions";
import { Hero } from "../components/1_Small/Hero";
import { SocialProofBanner } from "../components/1_Small/SocialProofBanner";
import { InfoNAPSection } from "../components/1_Small/InfoNAPSection";

export default function Home({ content, nap }) {
  !content && RedirectPage();
  console.log(content);
  console.log(nap);

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
      <Hero SEOHeading={content.seoTittel} heading="Heading" imageSource={content.bildeMat.url} imageAlt="alt" />
      <SocialProofBanner />
      <Layout>
        <Grid>
          <FourEightSix>
            <HorizontalCardCTA SEOHeading={content.seoTittelMat} heading={content.tittelMat}>
              {documentToReactComponents(content.brdtekstMat.json, options)}
              <PrimaryButtonHref href="mat-og-og" text="Les mer om restauranten" />
            </HorizontalCardCTA>
          </FourEightSix>

          <FourEightSix>
            <div className="relative">
              <Image
                src={`/${content.bildeMat.url.slice(36)}`}
                alt={content.bildeMat.description}
                layout="fill"
                className="object-cover"
              />
            </div>
          </FourEightSix>

          <FourEightSix>
            <div className="relative">
              <Image
                src={`${content.bildeMat.url.slice(41)}`}
                alt={content.bildeMat.description}
                layout="fill"
                className="object-cover"
              />
            </div>
          </FourEightSix>
          <FourEightSix c="lg:col-start-7">
            <HorizontalCardCTA SEOHeading={content.seoTittelOvernatting} heading={content.tittelOvernatting}>
              {documentToReactComponents(content.innholdOvernatting.json, options)}
              <PrimaryButtonHref href="mat-og-og" text="Les mer om restauranten" />
            </HorizontalCardCTA>
          </FourEightSix>

          <FourEightSix>
            <HorizontalCardCTA SEOHeading={content.seoTittelBryllup} heading={content.tittelBryllup}>
              {documentToReactComponents(content.innholdBryllup.json, options)}
              <PrimaryButtonHref href="mat-og-og" text="Les mer om restauranten" />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix>
            <div className="relative">
              <Image
                src={`/${content.bildeMat.url.slice(36)}`}
                alt={content.bildeMat.description}
                layout="fill"
                className="object-cover"
              />
            </div>
          </FourEightSix>

          <FourEightSix c="">
            <div className="relative">
              <Image
                src={`/${content.bildeMat.url.slice(36)}`}
                alt={content.bildeMat.description}
                layout="fill"
                className="object-cover"
              />
            </div>
          </FourEightSix>
          <FourEightSix c="lg:col-start-7">
            <HorizontalCardCTA SEOHeading={content.seoKursOgKonferanser} heading={content.tittelKursOgKonferanser}>
              {documentToReactComponents(content.innholdKursOgKonferanser.json, options)}
              <PrimaryButtonHref href="mat-og-og" text="Les mer om restauranten" />
            </HorizontalCardCTA>
          </FourEightSix>

          <FourEightSix>
            <HorizontalCardCTA SEOHeading={content.seoSelskap} heading={content.tittelSelskap}>
              {documentToReactComponents(content.innholdSelskap.json, options)}
              <PrimaryButtonHref href="mat-og-og" text="Les mer om restauranten" />
            </HorizontalCardCTA>
          </FourEightSix>
          <FourEightSix c="">
            <div className="relative">
              <Image
                src={`/${content.bildeMat.url.slice(36)}`}
                alt={content.bildeMat.description}
                layout="fill"
                className="object-cover"
              />
            </div>
          </FourEightSix>
          <InfoNAPSection email={nap.epost} phone_number={nap.telefonnummer} adress={nap.adresse} />
        </Grid>
      </Layout>
      <Footer />
    </>
  );
}

//
// Redirect til 404-page hvis siden ikke greier å loade
//
function RedirectPage() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/404");
  }
}

export async function getStaticProps() {
  const response = await fetchContent(`
  {
    forsideCollection{
      items{
        seoTittel
        seoTittelMat
        seoTittelBryllup
        seoTittelSelskap
        seoTittelOvernatting
        seoTittelKursOgKonferanser
        tittelMat
        tittelBryllup
        tittelSelskap
        tittelOvernatting
        tittelArrangement
        tittelKursOgKonferanser
        brdtekstMat{
          json
        }
        innholdBryllup{
          json
        }
        innholdSelskap{
          json
        }
        innholdOvernatting{
          json
        }
        innholdKursOgKonferanser{
          json
        }
        bildeMat {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeBryllup {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeSelskap {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeOvernatting {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        bildeKursOgKonferanser{
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
    contactInfoCollection{
      items{
        epost
        telefonnummer
        adresse
      }
    }
  }
    `);
  return {
    props: {
      content: response.forsideCollection.items[0],
      nap: response.contactInfoCollection.items[0],
    },
    revalidate: 60,
  };
}

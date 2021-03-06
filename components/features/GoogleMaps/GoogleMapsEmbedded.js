export const GoogleMapsEmbedded = ({ c }) => {
  return (
    <iframe
      title="Google Maps som viser hvor Hvaler Gjestgiveri er."
      className={`${c} w-100 mb-56 md:mb-96 lg:mb-160 grid justify-items-stretch`}
      style={{ border: "0" }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgSPrT_wYREYRlVowZrUXFfE&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}
    />
  );
};

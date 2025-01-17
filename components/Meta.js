import Head from "next/head";

const Meta = ({title, keywords, description, siteLink, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />


      <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteLink} />
    <meta
      property="og:image"
      content={image}
    />
    <meta
      property="og:description"
      content={description}
    />

    <meta property="twitter:card" content={title}/>
    <meta
      property="twitter:url"
      content={siteLink}
    />
    <meta property="twitter:title" content={title} />
    <meta
      property="twitter:description"
      content={description}
    />
    <meta
      property="twitter:image"
      content={image}
    />


{/* <!-- Favicons --> */}
  <link href="assets/img/favicon.png" rel="icon"/>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

  {/* <!-- Google Fonts --> */}
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,600,600i,700,700i|Satisfy|Comic+Neue:300,300i,400,400i,700,700i" rel="stylesheet"/>

  {/* <!-- Vendor CSS Files --> */}
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  {/* <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/> */}
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

  {/* <!-- Template Main CSS File --> */}
  <link href="assets/css/style.css" rel="stylesheet"/>


      {/* CUSTOM */}
      <script defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></script>


{/* <!-- Vendor JS Files --> */}
  <script defer src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script defer src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script defer src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>

  {/* <!-- Template Main JS File --> */}
  <script src="assets/js/main.js"></script>


      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Food seller",
  keywords: "Resturant",
  description: "Delicious foods",
  image:"https://stellacenter.vercel.app/assets/img/logo/Foodii.png",
  siteLink:"https://food-seller-resturant.vercel.app/"
};

export default Meta;

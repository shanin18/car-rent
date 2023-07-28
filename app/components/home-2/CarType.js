import Image from "next/image";
import Link from "next/link";

const CarType = () => {
  const listings = [
    {
      imgSrc: "/images/car-types/hatchback.webp",
      title: "HatchBack",
      numListings: "59 Listings",
      colClasses: "col-md-6",
      delay: "100",
    },
    {
      imgSrc: "/images/car-types/suv.webp",
      title: "Suv",
      numListings: "8912 Listings",
      colClasses: "col-md-6",
      delay: "200",
    },
    {
      imgSrc: "/images/car-types/sedan2.webp",
      title: "Sedan",
      numListings: "775 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "300",
    },
    {
      imgSrc: "/images/car-types/fullCompact.webp",
      title: "Full MPV",
      numListings: "45 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "500",
    },
    {
      imgSrc: "/images/car-types/compact.webp",
      title: "Compact MPV",
      numListings: "12 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "400",
    },
  ];

  return (
    <>
      {listings.map((listing, index) => (
        <div
          key={index}
          className={listing.colClasses}
          data-aos="fade"
          data-aos-delay={listing.delay}
        >
          <div className="explore_city">
            <div className="thumb">
              <Image
                width={450}
                height={303}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                priority
                src={listing.imgSrc}
                alt={listing.title}
              />
            </div>
            <div className="details">
              <h4 className="title">
                <Link href="/listing-v1">{listing.title}</Link>
              </h4>
              <p>{listing.numListings}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarType;

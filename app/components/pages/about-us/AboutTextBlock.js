import Image from "next/image";
import Link from "next/link";

const AboutTextBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="about_thumb mb30-md">
          <Image
            width={650}
            height={400}
            priority
            style={{ objectFit: "cover" }}
            className="thumb1"
            src="/images/about/2.webp"
            alt="1.jpg"
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-5 offset-lg-1">
        <div className="">
          <h2 className="title mb30">Welcome To The Niljyoti</h2>
          <p className="mb20">
            Niljyoti Car Rentals is your trusted partner for car rental
            services. We provide top-quality vehicles for your travel needs,
            whether its a short trip within the city or a long journey across
            the country. With a wide range of cars and flexible rental options,
            we ensure a smooth and comfortable travel experience for our
            customers..
          </p>
          <p className="mb20">
            Our team of dedicated professionals is committed to offering
            exceptional customer service and support. We take pride in
            maintaining our fleet in top condition, ensuring that you get a
            reliable and safe vehicle for your journey.
          </p>
          <p>
            Choose Niljyoti Car Rentals for a hassle-free and enjoyable travel
            experience. Book your next car rental with us and experience the joy
            of exploring new destinations at your pace.
          </p>
          <Link className="btn btn-thm" href="/our-cars">
            Learn More
          </Link>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default AboutTextBlock;

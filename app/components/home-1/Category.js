import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    imgSrc:
      "https://i.ibb.co/s54Vmb5/txbt6ra-1421852.webp",
    title: "Minivan (MPV)",
    delay: 100,
  },
  {
    imgSrc: "https://i.ibb.co/RPh7hF4/106.jpg",
    title: "Sedan",
    delay: 200,
  },
  {
    imgSrc: "https://i.ibb.co/KjsRqHk/image-285x185.png",
    title: "SUV",
    delay: 300,
  },
  {
    imgSrc:
      "https://i.ibb.co/Tb2Zn21/ertiga-hybrid2.jpg",
    title: "Minivan (MPV)",
    delay: 100,
  },
];

const Category = () => {
  return (
    <>
      {categories.map((category, index) => (
        <div
          key={index}
          className={`col-6 col-sm-6 col-md-4 col-lg col-xl`}
          data-aos="fade-up"
          data-aos-delay={category.delay}
        >
          <div className="category_item">
            <div className="thumb">
              <Image
                width={150}
                height={58}
                style={{ objectFit: "cover" }}
                src={category.imgSrc}
                alt={`${index + 1}.png`}
              />
            </div>
            <div className="details">
              <p className="title">
                <Link href="/listing-v4">{category.title}</Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;

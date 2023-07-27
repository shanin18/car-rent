import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    imgSrc:
      "https://i.ibb.co/xggF8KS/desktop-wallpaper-sedan-netcarshow-netcar-car-car-2011-perodua-myvi-elegance-land-vehicle-automobile.jpg",
    // imgSrc: "/images/category-item/1.png",
    title: "Compact",
    delay: 100,
  },
  {
    imgSrc: "https://i.ibb.co/jfkgHMp/360-F-63599499-bu-BFc-Ag3sh-Fsqn-Q8-Hrd68ag-B8-N5-WOsuq.jpg",
    // imgSrc: "/images/category-item/2.png",
    title: "Sedan",
    delay: 200,
  },
  {
    imgSrc: "https://i.ibb.co/Yc4qq6M/istockphoto-185257478-612x612.jpg",
    // imgSrc: "/images/category-item/3.png",
    title: "SUV",
    delay: 300,
  },
  {
    imgSrc: "https://i.ibb.co/gvrLSD2/istockphoto-516463389-612x612.jpg",
    // imgSrc: "/images/category-item/4.png",
    title: "Convertible",
    delay: 400,
  },
  {
    imgSrc: "https://i.ibb.co/nsRBjZK/istockphoto-1191094307-612x612.jpg",
    // imgSrc: "/images/category-item/5.png",
    title: "Coupe",
    delay: 500,
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

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

const teamMembers = [
  {
    id: 1,
    name: "Dianne Russell",
    title: "Dog Trainer",
    imageSrc: "/images/members/1.jpg",
  },
  {
    id: 2,
    name: "Devon Lane",
    title: "Nursing Assistant",
    imageSrc: "/images/members/2.jpg",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    title: "President of Sales",
    imageSrc: "/images/members/3.jpg",
  },
  {
    id: 4,
    name: "Esther Howard",
    title: "Marketing Coordinator",
    imageSrc: "/images/members/4.jpg",
  },
  {
    id: 5,
    name: "Dianne Russell",
    title: "Dog Trainer",
    imageSrc: "/images/members/5.jpg",
  },
];

const Team = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        speed={1000}
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".team-arrow-next",
          prevEl: ".team-arrow-prev",
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <div className="team_member">
                <div className="thumb">
                  <Image
                    width={313}
                    height={375}
                    style={{ objectFit: "cover" }}
                    className="img-fluid"
                    src={member.imageSrc}
                    alt={member.name}
                  />
                </div>
                <div className="details">
                  <h5 className="title">{member.name}</h5>
                  <p className="para">{member.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Team;

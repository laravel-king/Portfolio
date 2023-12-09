"use client"

import Image from "next/image"

import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import {Pagination} from "swiper/modules";

const reviewsData=[
    {
        avatar : "/reviews/avatar-1.png",
        name:"Julee Cummerata",
        job: "Chef",
        review: "Viderer iuvaret faucibus in aperiri id. Placerat consul penatibus maluisset duis voluptatibus."
    },
    {
        avatar : "/reviews/avatar-6.png",
        name:"Corrina Zboncak",
        job: "Manager",
        review: "Viderer iuvaret faucibus in aperiri id. Placerat consul penatibus maluisset duis voluptatibus."
    },
    {
        avatar : "/reviews/avatar-2.png",
        name:"Dylan Murazik",
        job: "Front End Leader",
        review: "Viderer iuvaret faucibus in aperiri id. Placerat consul penatibus maluisset duis voluptatibus."
    },
    {
        avatar : "/reviews/avatar-3.png",
        name:"Graham Klein",
        job: "Player",
        review: "Viderer iuvaret faucibus in aperiri id. Placerat consul penatibus maluisset duis voluptatibus."
    },
    {
        avatar : "/reviews/avatar-4.png",
        name:"Napoleon Cummings",
        job: "Head Manager",
        review: "Viderer iuvaret faucibus in aperiri id. Placerat consul penatibus maluisset duis voluptatibus."
    },
    {
        avatar : "/reviews/avatar-5.png",
        name:"Tatyana Schuster",
        job: "Lead Engineer",
        review: "Viderer iuvaret faucibus in aperiri id. Placerat consul penatibus maluisset duis voluptatibus."
    },

]
const Reviews = () => {
  return (
      <section className="pt-24 mb-12 lg:mb-32">
          <div className="container mx-auto">
              <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            <Swiper slidesPerView={1} breakpoints={{
                640: {slidesPerView:2},
                1200: {slidesPerView: 3}
            }}
            spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{clickable:true}}
                    className="h-[350px] "
            >
                {reviewsData.map((review, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                <CardHeader className="p-0 mb-10">
                                    <div className="flex items-center gap-x-4">
                                        <Image src={review.avatar} alt={review.name} height={70} width={70} priority />
                                        <div className="flex flex-col">
                                            <CardTitle>{review.name}</CardTitle>
                                            <p>{review.job}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className="text-lg text-muted-foreground">
                                    {review.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
          </div>
      </section>
  )
}

export default Reviews;
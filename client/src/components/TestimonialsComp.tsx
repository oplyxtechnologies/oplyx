import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    id: 1,
    text: "Oplyx Technologies exceeded our expectations with their innovative solutions.",
    rating: "⭐⭐⭐⭐⭐",
    name: "John Doe",
    position: "CTO, TechCorp",
    image: "/pp1.jpg",
  },
  {
    id: 2,
    text: "A game-changer for our business! The team is highly skilled and professional.",
    rating: "⭐⭐⭐⭐⭐",
    name: "Jane Smith",
    position: "Founder, StartupX",
    image: "/pp1.jpg",
  },
  {
    id: 3,
    text: "Their digital expertise helped us scale efficiently. Highly recommended!",
    rating: "⭐⭐⭐⭐⭐",
    name: "Alice Brown",
    position: "CMO, MarketingPro",
    image: "/pp1.jpg",
  },
  {
    id: 4,
    text: "Amazing service and support! We saw instant improvements in our workflow.",
    rating: "⭐⭐⭐⭐⭐",
    name: "David Wilson",
    position: "CEO, Innovate Inc.",
    image: "/pp1.jpg",
  },
];

const profileImages = [
  "/pp1.jpg",
  "/pp1.jpg",
  "/pp1.jpg",
  "/pp1.jpg",
  "/pp1.jpg",
  "/pp1.jpg",
];

const TestimonialsComp: React.FC = () => {
  return (
    <div className="bg-white my-10 text-primary ">
      <div className="flex flex-col lg:flex-row mx-auto p-10 max-w-7xl justify-between items-center gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold tracking-tighter">
            Why our customers love Oplyx
          </h1>
          <p className="my-2">3000+ Users rated us 4.85 out of 5.</p>
          <div className="flex flex-wrap gap-2">
            {profileImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full border-2 -mr-8"
              />
            ))}
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="w-full p-4 lg:w-1/2">
          <Carousel>
            <CarouselContent>
              {testimonialsData.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="items-center  justify-center"
                >
                  <div className="p-6 bg-primary rounded-lg text-white shadow-lg">
                    <Image
                      className="bg-primary rounded-xl mb-5 bg-opacity-30 text-primary p-4"
                      alt="quote"
                      src="/quot.svg"
                      width={70}
                      height={24}
                    />
                    <h1 className="text-2xl mb-4">{testimonial.text}</h1>
                    <p className="my-2">{testimonial.rating}</p>
                    <div className="flex gap-4 items-center">
                      <Image
                        className="rounded-full"
                        src={testimonial.image}
                        alt="avatar"
                        width={48}
                        height={48}
                      />
                      <div>
                        <h1 className="font-semibold">{testimonial.name}</h1>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary hover:scale-105 transition-all duration-300" />
            <CarouselNext className="text-primary hover:scale-105 transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComp;

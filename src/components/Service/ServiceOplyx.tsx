import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSrc,
  title,
  description,
}) => (
  <div className="max-w-full lg:max-w-72 mt-4 rounded-lg bg-secondary text-justify p-6">
    <Image src={imageSrc} alt={title} width={60} height={24} />
    <h1 className="text-xl font-semibold my-2">{title}</h1>
    <p>{description}</p>
  </div>
);

const AboutOplyx: React.FC = () => {
  return (
    <div className="max-w-7xl mt-10 lg:mt-36 block lg:flex p-4 mx-auto">
      <div className="items-center mx-auto block sm:flex gap-4 justify-center">
        <div className="block mt-32">
          <InfoCard
            imageSrc="/About1.svg"
            title="Innovation-driven"
            description="Elevate your digital presence with our innovation-driven approach."
          />
          <InfoCard
            imageSrc="/About2.svg"
            title="Accessible technology"
            description="Celebrate Inclusivity with Accessible Technology."
          />
        </div>
        <div className="block">
          <InfoCard
            imageSrc="/About4.svg"
            title="Collaborative teamwork"
            description="We believe that the best results are born from the synergy of diverse minds."
          />
          <InfoCard
            imageSrc="/About3.svg"
            title="Transparent approach"
            description="At our digital agency, transparency isn't just a buzzword."
          />
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center p-10">
        <div>
          <h1 className="text-4xl lg:text-5xl my-4 font-bold tracking-tighter">
            Know About Oplyx
          </h1>
          <p className="text-lg text-gray-500">
            At Oplyx, we&#39;re not just in the business of digital
            solutions&semi; We&#39;re in the business of crafting digital
            success stories. Founded on a passion for innovation and a
            commitment to excellence, we&#39;ve been at the forefront of the
            digital landscape, helping businesses thrive in the digital age.
            <br />
            <br />
            Our story begins with a vision – a vision to transform the digital
            experience for businesses of all sizes. Over the years, we&#39;ve
            evolved from a small startup to a dynamic digital agency with a
            global footprint. We believe the digital realm offers boundless
            opportunities for growth and connection, and we&#39;re here to guide
            you through this transformative journey.
          </p>
          <div className="my-4 flex gap-4">
            <Button>Service Explore!</Button>
            <Button variant="ghost" className="group">
              Get a Quote
              <MoveRight className="group-hover:translate-x-1 duration-150 transition-all ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOplyx;

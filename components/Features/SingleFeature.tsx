import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp items-center justify-center text-center"
        data-wow-delay=".15s"
      >
        <div className="mx-auto mb-10 flex h-[100px] w-[100px] rounded-md  bg-opacity-10 text-primary">
          <Image alt={title} src={icon} width={200} height={150} />
        </div>
        <h3 className="mb-5 text-xl font-bold text-[#2b1faf] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-[#38364d]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;

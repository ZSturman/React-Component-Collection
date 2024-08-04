import Link from "next/link";
import Image from "next/image";

type ComponentItemProps = {
  componentsToDisplay: ComponentsToDisplay;
};

const ComponentItem: React.FC<ComponentItemProps> = ({
  componentsToDisplay,
}) => {
  return (
    <div className="flex flex-col text-center relative group max-w-min min-w-[400px]">
      <Link href={componentsToDisplay.comingSoon ? "#" : componentsToDisplay.link} className="relative">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform group-hover:scale-105">
          <div className="p-4 text-center">
            <h3 className="font-semibold">{componentsToDisplay.name}</h3>
          </div>
          <div className={`relative w-full h-64 ${componentsToDisplay.comingSoon && "saturate-0 opacity-50" }`}>
            <Image
              src={componentsToDisplay.thumbnail}
              alt="thumbnail"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 text-wrap mt-1">
            {componentsToDisplay.description}
          </p>
        </div>
        {componentsToDisplay.comingSoon && (
          <div className="absolute top-0 left-0 w-full h-full  text-white flex items-center justify-center">
            <p className="text-5xl font-semibold text-slate-200 shadow-sm rounded-sm shadow-black px-6 py-3 bg-black rotate-12">Coming Soon</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ComponentItem;

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
    <Link href={componentsToDisplay.link} >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform group-hover:scale-105">
        <div className="p-4 text-center">
          <h3 className="font-semibold">{componentsToDisplay.name}</h3>
        </div>
        <div className="relative w-full h-64">
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
        <p className="text-sm text-gray-500 text-wrap mt-1">{componentsToDisplay.description}</p>
      </div>
    </Link>

    </div>
  );
};

export default ComponentItem;

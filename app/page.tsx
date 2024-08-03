import ComponentItem from "@/components/ComponentItem";

const components: ComponentsToDisplay[] = [
  {
    name: "Form Wizard",
    link: "/form-wizard",
    thumbnail: "/form-wizard/FormWizardThumbnail.png",
  },
];

export default function Home() {
  return (
    <div className="p-4 h-full flex items-center justify-center">
      <div className="flex flex-row flex-wrap  h-full max-w-screen-2xl w-full">
        {components.map((component, index) => (
          <ComponentItem key={index} componentsToDisplay={component} />
        ))}
      </div>
    </div>
  );
}

import ComponentItem from "@/components/ComponentItem";

const components: ComponentsToDisplay[] = [
  {
    name: "Form Wizard",
    link: "/form-wizard",
    thumbnail: "/form-wizard/FormWizardThumbnail.png",
    description:
      "The Form Wizard component simplifies complex form completion with a structured, multi-step interface that includes navigation, progress tracking, and submission management.",
  },
  {
    name: "State Management",
    link: "/state-management",
    thumbnail: "/state-management/StateManagementThumbnail.png",
    description:
      "The State Management component demonstrates how to use React's Context API to manage global state in a React application.",
      comingSoon: true,
  },
];

export default function Home() {
  return (
    <div className="p-4 h-full flex items-start justify-center">
      <div className="flex flex-row flex-wrap max-w-screen-2xl w-full gap-4">
        {components.map((component, index) => (
          <ComponentItem key={index} componentsToDisplay={component} />
        ))}
      </div>
    </div>
  );
}

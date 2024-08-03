import { Metadata } from "next";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("../../../components/FormWizard/Wizard"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Wizard for Guided Processes",
  description: "A step-by-step guide for complex processes",
};

export default function Page() {
  return (
    <div className="flex flex-col p-10 ">

        <Wizard />

    </div>
  );
}

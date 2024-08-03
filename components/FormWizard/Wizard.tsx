"use client";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Review from "./Review";
import PrevValues from "./PrevValues";

const Wizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const setFieldValue = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const [prevValues, setPrevValues] = useState<SavedData[]>([]);

  const onSubmit = () => {
    const dateCreated = new Date().toLocaleString();
    const SavedFormData: SavedData = { ...formData, dateCreated };

    setPrevValues([...prevValues, SavedFormData]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            values={formData}
            setFieldValue={setFieldValue}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            values={formData}
            setFieldValue={setFieldValue}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            values={formData}
            setFieldValue={setFieldValue}
          />
        );
      case 4:
        return (
          <Review prevStep={prevStep} values={formData} onSubmit={onSubmit} />
        );
      default:
        return null;
    }
  };

  const renderProgress = () => {
    return (
      <div className="flex flex-col justify-center items-center gap-4 mr-5 h-full">
        <div
          className={`w-4 h-4 rounded-full ${
            step >= 1 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full ${
            step >= 2 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full ${
            step >= 3 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full ${
            step >= 4 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="flex flex-row h-full">
        <div className="h-full items-center justify-center my-auto">
          {renderProgress()}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          {renderStep()}
        </div>
      </div>
      <PrevValues prevInputs={prevValues} />
    </div>
  );
};

export default Wizard;

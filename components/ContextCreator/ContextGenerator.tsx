"use client"
import { useState } from 'react';
import Page0 from './Page0';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import generateContextFile from './generateContextFile';

const MainComponent: React.FC = () => {
  const [contextData, setContextData] = useState<Partial<ContextData>>({});
  const [step, setStep] = useState(0);

  const handleNext = (data: Partial<ContextData>, nextStep: number) => {
    const updatedContextData = { ...contextData, ...data };
    setContextData(updatedContextData);
    setStep(nextStep);
  };

  const handleGenerate = (contextData: Partial<ContextData>) => {
    generateContextFile(contextData as ContextData);
  };

  return (
    <div>
      {step === 0 && <Page0 onNext={(dataName: string) => handleNext({ dataName }, 1)} />}
      {step === 1 && <Page1 onNext={(data: Field[]) => handleNext({ fields: data }, 2)} />}
      {step === 2 && <Page2 fields={contextData.fields!} onNext={(data: FieldWithDefault[]) => handleNext({ fieldDefaults: data }, 3)} />}
      {step === 3 && <Page3 dataName={contextData.dataName!} fields={contextData.fields!} onNext={(data: Dependency) => handleNext({ dependencies: data }, 4)} />}
      {step === 4 && <Page4 dataName={contextData.dataName!} onNext={(data: AdditionalFunctions) => handleNext({ additionalFunctions: data }, 5)} />}
      {step === 5 && <Page5 contextData={contextData as ContextData} onGenerate={handleGenerate} />}
    </div>
  );
};

export default MainComponent;
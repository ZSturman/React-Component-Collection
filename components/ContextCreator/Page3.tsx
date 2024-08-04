"use client"
import React, { useState } from 'react';

type Page3Props = {
  dataName: string;
  fields: Field[];
  onNext: (dependencies: Dependency) => void;
};

const Page3: React.FC<Page3Props> = ({ dataName, fields, onNext }) => {
  const [useExisting, setUseExisting] = useState(false);
  const [existingData, setExistingData] = useState<any | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setExistingData((prevData: any) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Page 3: State Dependencies for {dataName}</h1>
      <label>
        <input
          type="checkbox"
          checked={useExisting}
          onChange={(e) => setUseExisting(e.target.checked)}
        />
        Use existing {dataName}
      </label>
      {useExisting && (
        <div>
          {fields.map((field) => (
            <div key={field.name}>
              <label>{field.name}</label>
              <input
                type={field.type === 'string' ? 'text' : field.type === 'number' ? 'number' : 'checkbox'}
                placeholder={field.name}
                value={existingData?.[field.name] || ''}
                onChange={(e) =>
                  handleFieldChange(field.name, field.type === 'boolean' ? e.target.checked : e.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}
      <button onClick={() => onNext({ useExisting, existingData })}>Next</button>
    </div>
  );
};

export default Page3;
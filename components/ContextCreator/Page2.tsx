"use client"
import { useState } from 'react';

type Page2Props = {
  fields: Field[];
  onNext: (fieldDefaults: FieldWithDefault[]) => void;
};

const Page2: React.FC<Page2Props> = ({ fields, onNext }) => {
  const [fieldDefaults, setFieldDefaults] = useState<FieldWithDefault[]>(fields.map(field => ({
    ...field,
    defaultValue: field.type === 'boolean' ? false : '',
    constraint: { required: false }
  })));

  const updateField = (index: number, key: string, value: any) => {
    const updatedFields = [...fieldDefaults];
    updatedFields[index] = { ...updatedFields[index], [key]: value };
    setFieldDefaults(updatedFields);
  };

  return (
    <div>
      <h1>Defaults and Constraints</h1>
      {fieldDefaults.map((field, index) => (
        <div key={index}>
          <h3>{field.name} ({field.type})</h3>
          <input
            type={field.type === 'string' ? 'text' : field.type === 'number' ? 'number' : 'checkbox'}
            placeholder="Default Value"
            value={field.defaultValue as any}
            onChange={(e) => updateField(index, 'defaultValue', field.type === 'string' ? e.target.value : field.type === 'number' ? Number(e.target.value) : e.target.checked)}
          />
          {field.type === 'number' && (
            <>
              <input
                type="number"
                placeholder="Min"
                value={field.constraint.min}
                onChange={(e) => updateField(index, 'constraint', { ...field.constraint, min: Number(e.target.value) })}
              />
              <input
                type="number"
                placeholder="Max"
                value={field.constraint.max}
                onChange={(e) => updateField(index, 'constraint', { ...field.constraint, max: Number(e.target.value) })}
              />
            </>
          )}
          <input
            type="checkbox"
            checked={field.constraint.required}
            onChange={(e) => updateField(index, 'constraint', { ...field.constraint, required: e.target.checked })}
          />
          Required
        </div>
      ))}
      <button onClick={() => onNext(fieldDefaults)}>Next</button>
    </div>
  );
};

export default Page2;
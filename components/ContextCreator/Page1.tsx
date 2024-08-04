"use client"
import { useState } from 'react';


type Page1Props = {
  onNext: (fields: Field[]) => void;
};

const Page1: React.FC<Page1Props> = ({ onNext }) => {
  const [fields, setFields] = useState<Field[]>([]);
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState<'string' | 'number' | 'boolean'>('string');

  const addField = () => {
    setFields([...fields, { name: fieldName, type: fieldType }]);
    setFieldName('');
    setFieldType('string');
  };

  return (
    <div>
      <h1>Define Fields</h1>
      <input
        type="text"
        placeholder="Field Name"
        value={fieldName}
        onChange={(e) => setFieldName(e.target.value)}
      />
      <select value={fieldType} onChange={(e) => setFieldType(e.target.value as 'string' | 'number' | 'boolean')}>
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
      </select>
      <button onClick={addField}>Add Field</button>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            {field.name}: {field.type}
          </li>
        ))}
      </ul>
      <button onClick={() => onNext(fields)}>Next</button>
    </div>
  );
};

export default Page1;
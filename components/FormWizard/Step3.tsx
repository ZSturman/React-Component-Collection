import React from 'react';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';

interface Step3Props {
  prevStep: () => void;
  nextStep: () => void;
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const Step3: React.FC<Step3Props> = ({ prevStep, nextStep, values, setFieldValue }) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: () => {
      nextStep();
    },
  });

  const renderError = (message: string | FormikErrors<any> | string[] | FormikErrors<any>[]) => {
    if (typeof message === 'string') return message;
    if (Array.isArray(message)) return message.join(', ');
    return 'Invalid input';
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) => {
            formik.handleChange(e);
            setFieldValue('email', e.target.value);
          }}
          value={formik.values.email}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 mt-1">{renderError(formik.errors.email)}</div>
        ) : null}
      </div>
      <div className="mt-4 flex flex-row gap-4">
        <button type="button" onClick={prevStep} className="mt-4 p-2 bg-gray-500 text-white rounded">
          Back
        </button>
        <button      
          type="submit"
         className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Review
        </button>
      </div>
    </form>
  );
};

export default Step3;
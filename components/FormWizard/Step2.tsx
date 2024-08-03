import React from 'react';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const Step2: React.FC<Step2Props> = ({
  nextStep,
  prevStep,
  values,
  setFieldValue,
}) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      lastName: Yup.string().required('Required'),
    }),
    onSubmit: () => {
      nextStep();
    },
  });

  const renderError = (
    message: string | FormikErrors<any> | string[] | FormikErrors<any>[]
  ) => {
    if (typeof message === 'string') return message;
    if (Array.isArray(message)) return message.join(', ');
    return 'Invalid input';
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={(e) => {
            formik.handleChange(e);
            setFieldValue('lastName', e.target.value);
          }}
          value={formik.values.lastName}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 mt-1">
            {renderError(formik.errors.lastName)}
          </div>
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
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
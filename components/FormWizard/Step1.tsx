import React from 'react';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';

interface Step1Props {
  nextStep: () => void;
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep, values, setFieldValue }) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
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
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={(e) => {
            formik.handleChange(e);
            setFieldValue('firstName', e.target.value);
          }}
          value={formik.values.firstName}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 mt-1">{renderError(formik.errors.firstName)}</div>
        ) : null}
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Next
      </button>
    </form>
  );
};

export default Step1;
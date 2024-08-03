import React from 'react';

interface ReviewProps {
  prevStep: () => void;
  values: any;
  onSubmit: () => void;
}

const Review: React.FC<ReviewProps> = ({ prevStep, values, onSubmit }) => {


  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Review Your Information</h2>
      <div className="mb-4">
        <strong>First Name:</strong> {values.firstName}
      </div>
      <div className="mb-4">
        <strong>Last Name:</strong> {values.lastName}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {values.email}
      </div>
      <div className="mt-4">
        <button type="button" onClick={prevStep} className="p-2 bg-gray-500 text-white rounded">
          Back
        </button>
        <button type="button" onClick={onSubmit} className="ml-4 p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
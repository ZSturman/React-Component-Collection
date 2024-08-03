import React from "react";

const Explained = () => {
  return (
    <div className="prose">
      <h2>Form Wizard</h2>
      <p>
        The Form Wizard is a user-friendly tool designed to guide you through
        filling out a multi-step form. Here’s how it works:
      </p>

      <h3>Multi-Step Process</h3>
      <ul>
        <li>
          <strong>Step-by-Step Guidance:</strong> The form is divided into
          multiple steps, making it easier to complete. Each step can contain
          any type of field, such as text fields, dropdowns, or checkboxes,
          depending on the specific requirements.
        </li>
        <li>

          <strong>Navigation:</strong> You can move between steps using &quot;Back&quot;
          and  &rdquo;Next&rdquo; buttons, allowing you to easily navigate through the form
          and review or correct your entries.
        </li>
      </ul>

      <h3>Progress Indicators</h3>
      <ul>
        <li>
          <strong>Visual Feedback:</strong> On the side, there are visual
          indicators showing your progress through the steps. Each step is
          represented by a dot:
        </li>
        <ul>
          <li>A blue dot means the step is completed.</li>
          <li>A gray dot means the step is yet to be completed.</li>
        </ul>
      </ul>

      <h3>Submission</h3>
      <ul>
        <li>
          <strong>Final Review:</strong> Before submitting, you have the
          opportunity to review all your entered information in the final step,
          ensuring everything is correct.
        </li>
        <li>
          <strong>Save and Reset:</strong> Upon submission, your information is
          saved along with the current date and time. The form fields are then
          cleared, and you are taken back to the first step to start a new form
          if needed.
        </li>
      </ul>

      <h3>Previous Entries</h3>
      <ul>
        <li>
          <strong>Record Keeping:</strong> Below the form, there is a table
          displaying all previously submitted information. This table shows each
          entry’s data and the date and time when the form was submitted.
        </li>
      </ul>

      <p>
        The Form Wizard is designed to make filling out complex forms easier by
        breaking them down into smaller, manageable steps, ensuring that you can
        review and correct your information before submitting. This flexibility
        allows it to be used for any type of form, regardless of the specific
        fields required.
      </p>
    </div>
  );
};

export default Explained;

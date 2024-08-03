# Form Wizard Component

The `Form Wizard` component provides a user-friendly, step-by-step guide for completing complex forms. It's designed to make the process of filling out forms easier and more organized.

## Multi-Step Process

- **Step-by-Step Guidance**: The form is divided into multiple steps, making it easier to complete. Each step can contain any type of field, such as text fields, dropdowns, or checkboxes, depending on the specific requirements.
- **Navigation**: You can move between steps using "Back" and "Next" buttons, allowing you to easily navigate through the form and review or correct your entries.

## Progress Indicators

- **Visual Feedback**: On the side, there are visual indicators showing your progress through the steps. Each step is represented by a dot:
  - A blue dot means the step is completed.
  - A gray dot means the step is yet to be completed.

## Submission

- **Final Review**: Before submitting, you have the opportunity to review all your entered information in the final step, ensuring everything is correct.
- **Save and Reset**: Upon submission, your information is saved along with the current date and time. The form fields are then cleared, and you are taken back to the first step to start a new form if needed.

## Previous Entries

- **Record Keeping**: Below the form, there is a table displaying all previously submitted information. This table shows each entry’s data and the date and time when the form was submitted.

## Getting Started

To integrate the Form Wizard into your project, you can use the following example:

```
import Wizard from '@/components/FormWizard/Wizard';

function App() {
  return (
    <div className="App">
      <Wizard />
    </div>
  );
}

export default App;
```

By including the Form Wizard component, you provide users with a structured and intuitive way to complete multi-step forms, ensuring better data accuracy and user experience.

Feel free to explore, use, and contribute to this component. 

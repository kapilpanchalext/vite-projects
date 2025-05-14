import { useFormStatus } from 'react-dom';
import { submitForm } from './actions.ts';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <>
      <h1>User Details Form</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  )
};

type FormProps = {
  actions: React.FormHTMLAttributes<HTMLFormElement>['action'];
};

function Form({ actions }: FormProps) {
  return (
    <form action={actions}>
      <Submit />
    </form>
  );
};

function UserDetailsForm() {
  return <Form actions={submitForm} />;
};

export default UserDetailsForm;
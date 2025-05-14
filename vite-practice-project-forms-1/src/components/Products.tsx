import { useActionState, useState } from 'react';
import { redirect } from 'react-router';
import type { UserDetails } from '../model/UserDetails';

async function updateNameAPI(name: UserDetails): Promise<UserDetails | null> {
  const response = await fetch("http://localhost:9001/api/v1/update-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });

  if (!response.ok) {
    const data = await response.json();
    return data.message || "Something went wrong";
  }

  return null;
}

const Products = () => {
  const [name, setName] = useState<UserDetails>({
    userId: "12345",
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
  });

  const [error, submitAction, isPending] = useActionState(
    async (_prevError: UserDetails | null, newName: UserDetails) => {
      const error = await updateNameAPI(newName);
      if (error) return error;
      redirect("/");
      return null;
    },
    null // initial error state
  );

  const handleSubmit = () => {
    submitAction(name);
  };

  return (
    <div>
      <input
        value={name?.firstName || ""}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Updating..." : "Update"}
      </button>
      {error && <p style={{ color: "red" }}>{typeof error === "string" ? error : JSON.stringify(error)}</p>}
    </div>
  )
};

export default Products;
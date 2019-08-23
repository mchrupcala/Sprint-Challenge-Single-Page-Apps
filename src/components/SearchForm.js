import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data

  const [newValue, setNewValue] = useState(null);

function handleInputChange() {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  return (
    setNewValue(value)
  )

}

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>

        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />

        <button type="submit">Search</button>
      </form>
    </section>
  );
}

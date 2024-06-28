import React from "react";
import { Form } from "../form/form";

export const Card = ({ name, id, setData }) => {
  const [show, setShow] = React.useState(false);

  const deleteItem = () => {
    setData((data) => {
      return data.filter((item) => item.id !== id);
    });
  };

  const editItem = () => {
    setShow(!show);
  };

  const editedItem = (newValue) => {
    setData((data) => {
      return data.map((item) =>
        item.id === id ? { name: newValue, id } : item
      );
    });
    setShow(false);
  };

  return (
    <div className="p-4 border rounded shadow-lg mb-4">
      {show ? (
        <div className="mt-8 mb-8">
          <Form editedItem={editedItem} defaultValue={name} />
        </div>
      ) : (
        <h1 className="text-xl font-semibold">{name}</h1>
      )}
      <div className="mt-4">
        <button
          className="border border-red-500 text-red-500 px-4 py-2 rounded mr-2"
          onClick={deleteItem}
        >
          Delete
        </button>
        <button
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded"
          onClick={editItem}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

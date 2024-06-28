import React from "react";

export const Form = ({ setData, defaultValue, editedItem }) => {
  const [userName, setUserName] = React.useState(
    defaultValue ? defaultValue : ""
  );

  const submit = (e) => {
    e.preventDefault();
    if (defaultValue) {
      editedItem(userName);
      return;
    }
    setData((state) => {
      return [...state, { name: userName, id: Date.now() }];
    });
    setUserName("");
  };

  return (
    <div className="">
      <form onSubmit={submit} className="p-4 bg-white shadow-md">
        <label
          htmlFor="userName"
          className="block text-sm font-medium text-gray-700"
        >
          note
        </label>
        <input
          className="border-dotted border-2 border-indigo-600 mt-1 block w-full p-2"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter your note"
        />
        <button
          className="border-dotted border-2 border-indigo-600 mt-3 ml-5 px-4 py-2 bg-indigo-500 text-white"
          type="submit"
        >
          {defaultValue ? "Edit" : "Send"}
        </button>
      </form>
    </div>
  );
};

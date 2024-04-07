import { useState } from "react";

interface FieldProps {
  label: string;
  placeholder: string;
  labelClassName?: string;
}

const Field: React.FC<FieldProps> = ({ label }) => {
  const style: string = "w-1/2 h-20 rounded-md border-2 border-gray-300";
  const deleteField = () => {
    console.log("delete");
  };

  return (
    <div className="w-full mb-2 ">
      <div className="flex justify-between items-center h-14 rounded-md border-2 border-gray-300 pl-4 pr-4 mb-1">
        <h1>{label}</h1>
        <p
          onClick={() => deleteField()}
          className=" w-6 h-6 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300"
        >
          X
        </p>
      </div>
      {/* <label className={`block ${style} ${labelClassName}`} htmlFor={label}>
        {label}
      </label> */}
      <div className="w-full">
        <input className={style} type="text" placeholder="Enter terms" />
        <input className={style} type="text" placeholder="Enter definition" />
      </div>
    </div>
  );
};

function Create() {
  const [count, setCount] = useState(5);

  return (
    <div className="w-screen h-screen flex flex-row justify-center mt-24">
      <div className="w-full pr-28 pl-28 flex flex-col flex-1 items-center gap-4">
        <h1>Create your study set</h1>
        {Array.from({ length: count }).map((_, index) => (
          <Field key={index} label={index.toString()} placeholder="Title" />
        ))}
        <button
          className="w-full h-14 rounded-md border-2 border-gray-300"
          onClick={() => setCount(count + 1)}
        >
          Add Field
        </button>
        <button className="w-full h-14 rounded-md border-2 border-gray-300 hover:bg-slate-200 transition duration-300 ease-in-out">
          Create
        </button>

        {/* <Field label="Title" placeholder="Title" />
        <Field label="Description" placeholder="Description" />
        <Field label="Tags" placeholder="Tags" />
        <Field label="Language" placeholder="Language" />
        <Field label="Category" placeholder="Category" />
        <Field label="Difficulty" placeholder="Difficulty" />
        <Field label="Visibility" placeholder="Visibility" /> */}
      </div>
    </div>
  );
}

export default Create;

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/create");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg px-4 lg:gap-8">
        <img
          className="h-40 w-40  lg:h-80 lg:w-80 mb-4 lg:mb-0"
          src="/chungus.webp"
          alt="Chungus"
        ></img>
        <div className="w-full lg:w-1/2 flex items-center justify-center font-medium flex-col gap-4 ">
          <h1 className="text-center lg:text-left text-3xl">
            Welcome to chunglingo
          </h1>
          <p className="text-center ">
            Create Flashcards and study them effectively with the{" "}
            <b>Pomodoro Technique </b>implemented to effectively manage your
            study time
          </p>
          <button
            className=" lg:ml-0 mt-4 w-64 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={(e) => handleClick(e)}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import Button from "../../utilities/Button/Button";
import Karim from "../../assets/images/karim.webp";

const Cards = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={Karim} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Karim Benzema
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Karim is very pro
          </p>
          <Button text={"read more"}>
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

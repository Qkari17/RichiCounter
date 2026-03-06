import { Button } from "../ui/Button/Button";

export const TypeMenu = () => {
  return (
    <>
      <section
        className={`absolute top-0 left-0 flex w-full h-full justify-center items-center `}
      >
        <div className="bg-blue-400 w-1/2 h-1/2 rounded-2xl flex flex-col justify-around p-10">
          <Button label={"Ron"} className={"bg-red-400"}></Button>
          <Button label={"Tsumo"} className={"bg-red-400"}></Button>
          <Button label={"Tie"} className={"bg-red-400"}></Button>
        </div>
      </section>
    </>
  );
};

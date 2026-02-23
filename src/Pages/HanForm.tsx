import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Button/Input";

export const HanForm = () => {
  return (
    <div className="bg-yellow-300 flex-col flex h-screen w-screen ">
      <header className="h-10 bg-green-400 flex justify-center">
        <h1 className="font-bold text-2xl ">Richi Counter</h1>
      </header>
      <main className="p-4">
        <section className="flex flex-col p-4 bg-blue-600 rounded-2xl items-center gap-6">
          <h1 className="text-gray-50 text-4xl">Players</h1>
          <form className="flex flex-col gap- items-center gap-5">
        <Input label={"East"} id={"east"}/>    
                  </form>
          <Button className={"bg-red-400"} label="Next" type="submit"  />
        </section>
      </main>
    </div>
  );
};

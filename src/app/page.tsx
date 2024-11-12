import Image from "next/image";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="p-4 h-screen flex flex-col justify-between sm:mx-auto sm:w-96">
      <Header />
      <main className="">
        Hello World
      </main>
      <footer className="text-center">
        By JC Smiley
      </footer>
    </div>
  );
}

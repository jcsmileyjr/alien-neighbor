import Header from "./components/Header/Header";
import SignUpForm from "./layout/SignUpForm/SignUpForm";
import SubmitButton from "./components/SubmitButton/SubmitButton";

export default function Home() {
  return (
    <div className="p-4 h-screen flex flex-col justify-between sm:mx-auto md:w-2/3 lg:w-1/2 2xl:w-1/3">
      <div className="flex flex-col gap-4">
        <Header />
        <main className="flex flex-col gap-4">
          <section className="text-center text-base">
            <h2 className="font-extrabold text-xl">We Live Everywhere, even <span className="whitespace-nowrap">Dark Places</span></h2>
            <p className="font-bold">Visit the stars and touch aliens</p>
            <p className="">Join the Colony Settlers</p>
          </section>
          <SignUpForm />          
        </main>
      </div>
      <footer className="text-center">
        By JC Smiley
      </footer>
    </div>
  );
}

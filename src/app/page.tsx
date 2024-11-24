import Header from "./components/Header/Header";
import SignUpForm from "./layout/SignUpForm/SignUpForm";

export default function Home() {
  return (
    <div className="p-4 h-screen flex flex-col justify-between sm:mx-auto md:w-2/3 lg:w-1/2 2xl:w-1/3">
      <div className="flex flex-col gap-4">
        <Header />
        <main className="flex flex-col gap-4">
          <section className="text-center text-base mb-4">
            <h2 className="font-extrabold text-xl">Visit the stars and touch aliens</h2>
            <p className="">Join the Colony Settlers</p>
          </section>
          <SignUpForm />          
        </main>
      </div>
      <footer className="text-center mt-4">
        By JC Smiley
      </footer>
    </div>
  );
}

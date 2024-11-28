import Header from "../components/Header/Header";

export default function Settlement() {  
    return (
        <div className="p-4 h-screen flex flex-col justify-between sm:mx-auto md:w-2/3 lg:w-1/2 2xl:w-1/3">
            <Header />
            <main className="flex flex-col gap-4 text-blueBlack">
                Settlement
            </main>
            <footer className="text-center mt-4">
                By JC Smiley
            </footer>
        </div>
    )
}
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="p-8 flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center">
        {/* Introduction Section */}
        <section className="text-center mt-5">
          <h1 className="text-3xl font-bold">Bernt Johansen her</h1>
          <h2 className="text-xl mt-2">
            Fullstack-utvikler med fokus på backend. Har sett mest da på Javascript, C#
            og Next.js. Liker å prøve å forstå helhet forståelsen av systemene.
          </h2>
        </section>

        {/* Content Boxes in Grid Layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <section className="p-4 border rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Om meg</h3>
            <p>Lær mer om min bakgrunn</p>
          </section>

          <section className="p-4 border rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Prosjekter</h3>
            <p>Se mine prosjekter som jeg har jobbet med</p>
          </section>

          <section className="p-4 border rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Ferdigheter</h3>
            <p>Teknologier og verktøy jeg bruker</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


// <aBOUT/> legg den til i components mappen som en tsx fil
// <pROJECTS/> legg den til i components mappen som en tsx fil
// <cONTACT/> legg den til i components mappen som en tsx fil
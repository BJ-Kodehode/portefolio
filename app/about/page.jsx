
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => {
  return (
    <div className="p-8 flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-center mb-8">Hvem er jeg</h1>
        <p className="mb-6">
          Er en utvikler med lidenskap for faget med en variert bakgrunn innen IKT
          hvor man har jobbet med support, med konfigurering av switcher og
          skrivere. Har også jobbet med litt med personvern, arkivering og
          vedlikehold av møtesenter. I dag er fokusert på fullstack utvikling som
          benytter seg av JavaScript, Next.js og C# som sitt verktøy og VS Code
          som editor.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Min utviklerreise</h2>
        <section className="mb-6">
          <h3 className="text-xl font-semibold">Fra lærling til Fagskole</h3>
          <p>
            Startet som IKT-Servicelærling og jobbet med flere forskjellige ting.
            Jobbet deretter som innleid i 1 år etter lærlingetiden før jeg
            startet på Fagskolen Innlandet innen IT drift og sikkerhet hvor jeg
            blant annet var innom C#.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Jobberfaring</h3>
          <p>
            Jobbet i forskjellige stillinger etter endt skolegang som en blanding
            av IKT-Rådgiver, førstekonsulent og IKT-Supportmedarbeider. Jobbet da
            med drift av servere med vedlikehold. Deretter som en blanding av
            førstekonsulent hvor jeg drev med support ut mot sykehjem og
            administrasjon i tillegg til koordinering og oppfølging av saker og
            problemer. Til slutt jobbet jeg som IKT-Konsulent og drev da med
            support, drift av møtesenter, GDPR og i et prosjekt med innføring av
            nytt krisehåndteringsverktøy hvor jeg lagde opplæringsmateriell.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold">Veien til utvikling</h3>
          <p>
            Kom da inn på et kurs hvor vi lærer gjennom undervisning og praksis
            og da kom interessen for utvikling. Har da fått behov for det som man
            har jobbet med tidligere og kombinert erfaringen for å få en
            forståelse av hvordan man vil at ting skal fungere.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
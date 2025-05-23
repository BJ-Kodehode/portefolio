const Projects = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Mine Prosjekter</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Backend-prosjekter</h2>
        <p className="mb-2">Mitt hovedfokus er backend-utvikling med C# og .NET-økosystemet.</p>
        <ul className="list-disc list-inside">
          <li>Web API-utvikling med ASP.NET Core</li>
          <li>Databasespørringer og design med SQL</li>
          <li>Konsollapplikasjoner og backend-logikk</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frontend-prosjekter</h2>
        <p className="mb-2">Grunnleggende ferdigheter som støtter mitt fokus på backend-utvikling.</p>
        <ul className="list-disc list-inside">
          <li>Nettsidestrukturering med HTML</li>
          <li>Styling og layout med CSS og Tailwind CSS</li>
          <li>Komponentutvikling med React og Next.js</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Verktøy & Teknologier</h2>
        <p className="mb-2">Verktøy og teknologier jeg bruker i min utviklingsflyt.</p>
        <ul className="list-disc list-inside">
          <li>Versjonskontroll med Git</li>
          <li>Containere med Docker og Kubernetes</li>
          <li>Primær IDE: Visual Studio</li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
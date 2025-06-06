import About from "@components/about";
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => {
  return (
    <div className="p-8 flex flex-col min-h-screen">
      <Header />

      <About/>
      {/* Main Content */}  

      <Footer />
    </div>
  );
};

export default About;
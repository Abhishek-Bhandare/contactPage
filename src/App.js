import Button from "./components/Button/Button";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Navbar from "./components/Navbar/Navbar";
import './index.css'

function App() {
  return (
    <>
      <Navbar/>
      <main className="main_container">
      <Contact/>
      <ContactForm/>
      </main>
    </>
  );
}

export default App;

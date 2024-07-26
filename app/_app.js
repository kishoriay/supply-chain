import "./globals.css";

//INTERNAL IMPORT
import { TrackingProvider } from "./context/TrackingContext";
import { NavBar, Footer } from "../app/Components/index";
//import { Fot1, Fot2 } from "../app/Components";

export default function App ({ Component, pageProps}) {
    return (
        <>
           <TrackingProvider>
              <NavBar />
              <Component { ...pageProps} />
              <Footer />
           </TrackingProvider>
           
        </>
    );
}
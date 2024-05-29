import ThemeContextDefaultProvider from "@/context/ThemeContextProvider";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";



export default function Home() {
  return (
    <ThemeContextDefaultProvider>
      <main className="mx-2 my-2">
         <Navbar/>
         <HomeSection/>
      </main>
    </ThemeContextDefaultProvider>
    
  );
}

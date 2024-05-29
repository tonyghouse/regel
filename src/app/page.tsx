import ThemeContextDefaultProvider from "@/context/ThemeContextProvider";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <ThemeContextDefaultProvider>
      <main>
      <Navbar/>
      </main>
    </ThemeContextDefaultProvider>
    
  );
}

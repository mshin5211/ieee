import AboutUs from "@/components/AboutUs";
import Announcement from "@/components/Announcement";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip dark:bg-dark'>
      <Hero />
      <AboutUs  />
      <Divider />
      <Announcement />
      
      
    </main>
  );
}

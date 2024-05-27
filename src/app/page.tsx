import Branch from "@/components/Branch";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip gap-y-5 dark:bg-dark'>
      <Hero />
      <Overview />
      <Branch />
      <Mission />
      <Footer />
    </main>
  );
}

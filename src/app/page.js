import Hero from "@/components/home/Hero";
import Form from "@/components/tools/Form";
import { chakra_Petch } from "./layout";



export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container bg-white mx-auto p-5 shadow-md rounded-md my-5 shadow-gray-600">
       <Hero />
       <Form domain={process.env.DOMAIN} font={chakra_Petch.className} />
      </div>
    </main>
  );
}

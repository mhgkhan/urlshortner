import ContactusContainer from "@/components/contactus/ContactusContainer";
import React from "react";
import { chakra_Petch } from "../layout";

const page = () => {
  return (
    <main className="min-h-screen">
      <ContactusContainer
        domain={process.env.DOMAIN}
        font={chakra_Petch.className}
      />
    </main>
  );
};

export default page;

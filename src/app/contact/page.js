import ContactusContainer from "@/components/contactus/ContactusContainer";
import React from "react";
import { NewRoker } from "../layout";

const page = () => {
  return (
    <main className="min-h-screen">
      <ContactusContainer
        domain={process.env.DOMAIN}
        font={NewRoker.className}
      />
    </main>
  );
};

export default page;

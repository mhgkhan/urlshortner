import Loading from "@/components/Loading";
import UrlStr from "@/db/models/Urls";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";

const page = async ({ params }) => {
  try {
    // console.log(params)
    const { url } = params;
    if (url !== null && url !== undefined) {
      const checkUrlId = await UrlStr.findOne({ urlId: url[0] });
      if (checkUrlId && checkUrlId !== null) {
        console.log(checkUrlId);
        redirect(checkUrlId.originalUrl);
      } else {
        redirect("/");
      }
    } else {
      redirect("/");
    }
  } catch (error) {
    return (
      <main>
        <div className="container mx-auto">
          <Loading />
        </div>
      </main>
    );
  }

  // console.log(url[0])
  // const URL = process.env.DOMAIN + url + "/";
  // // console.log(URL)
  // console.log(URL)

  // try {
  //   const reqAndRes = await (
  //     await fetch(`${process.env.DOMAIN}api/urls/redirect/${URL}`, {
  //       method: "GET",
  //       headers: { "content-type": "application/json" },
  //     })
  //   ).json();
  //   console.log(reqAndRes);
  // } catch (error) {
  //   return;
  // }

  // return (
  //   <main>
  //     <div className="container mx-auto">
  //       <Loading />
  //     </div>
  //   </main>
  // );
};

export default page;

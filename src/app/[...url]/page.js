"use server";

import Loading from "@/components/Loading";
import RedirectToPath from "@/components/tools/RedirectToPath";
import ClicksStr from "@/db/models/Clicks";
import UrlStr from "@/db/models/Urls";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { url } = params;

  try {
    if (url !== null && url !== undefined) {
      const checkUrlId = await UrlStr.findOne({ urlId: url });

      if (checkUrlId == undefined || checkUrlId == null)
        return (
          <main className="min-h-screen">
            <div className="container mx-auto flex items-center justify-center gap-3 flex-col py-10 ">
              <h2 className="text-3xl text-blue-950">Your Url Not Found.</h2>
              <Link href={'/'} className=" p-2 my-2 mx-auto block rounded-md border-none bg-blue-800 text-yellow-400 text-xl ">Back</Link>
            </div>
          </main>
        );
      else {

        // adding this click to the click model 
        const clicked = new ClicksStr({id: checkUrlId._id});
        await clicked.save();
        return <RedirectToPath path={checkUrlId.originalUrl} />
      }
      // console.log(checkUrlId)
    } else {
      return <RedirectToPath path={"/"} />
    }
  } catch (error) {
    // console.log(error);

    return (
      <main className=" min-h-screen flex items-center justify-center gap-3 flex-col">
        <div className="container mx-auto">
          <Loading />
          <h2 className="text-center text-3xl text-blue-950">
            Some Error Occured.
          </h2>
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

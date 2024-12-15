import React, { useEffect, useState } from "react";
import { Button, Header, Pie } from "../components";
import { ecomPieChartData } from "../data/dummy";
import Bar from "./Charts/Bar";
import { useStateContext } from "../contexts/ContextProvider";
import {
  fetch,
  getDefaultSession,
  handleIncomingRedirect,
  login,
} from "@inrupt/solid-client-authn-browser";
import { getPodUrlAll, getSolidDataset } from "@inrupt/solid-client";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

const ActivityAnalytics = () => {
  const { currentColor } = useStateContext();
  const [code, setCode] = useState("");
  const [visibility, setDialogVisibility] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    const urlParams = new URLSearchParams(window.location.search);
    const redirectCode = urlParams.get("code");
    setCode(redirectCode);

    const handleRedirect = async () => {
      // Handle the authentication response
      await handleIncomingRedirect();

      // Check if the session is authenticated
      const session = getDefaultSession();
      console.log("session", session.info);
      if (session.info.isLoggedIn) {
        console.log("User is logged in!");
        //webID: localhost:3000/jwongsyy
        // "http://localhost:3000/jwongsyy/profile/card#me"
        const podUrl = await getPodUrlAll(session.info.webId, {
          fetch: fetch,
        });
        console.log("podUrl", podUrl);
        const myDataset = await getSolidDataset(
          "http://localhost:3000/jwongsyy/26-aug-test",
          { fetch: fetch }
        );
        console.log("myDataset", myDataset);

        console.log("User's profile dataset:", profileDataset);
      } else {
        console.log("User is not logged in!");
      }
    };
    handleRedirect();
  }, []);

  const getPodAccess = async () => {
    if (!getDefaultSession().info.isLoggedIn) {
      await login({
        oidcIssuer: "http://localhost:3000", //https://server1.sgpod.co //https://login.inrupt.com //http://localhost:3000
        redirectUrl: new URL(
          "/activity-analytics",
          window.location.href
        ).toString(),
        clientName: "My application",
      });
    }
  };

  const dialogClose = () => {
    setDialogVisibility(false);
  };

  const openDialog = async () => {
    setDialogVisibility(true);
  };

  return (
    <>
      <div className="App" id="dialog-target">
        <DialogComponent
          width="400px"
          target="#dialog-target"
          isModal={true}
          visible={visibility}
          close={dialogClose}
          overlayClick={dialogClose}
          showCloseIcon={true}
          closeOnEscape={true}
        >
          {/* Modal Header */}
          <div className="bg-blue-500 text-white text-lg font-semibold p-4 rounded-t-lg">
            Add New Promotion
          </div>

          {/* Modal Content */}
          <div className="p-6 text-gray-800">
            <p>Enter the details for your promotion below.</p>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end space-x-4 p-4 border-t">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              onClick={dialogClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={dialogClose}
            >
              Save
            </button>
          </div>
        </DialogComponent>
      </div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        {/*flex justify-center items-center h-screen*/}
        <Header category="Fitbit" title="Activity Analytics" />
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
          <div>
            <p className="text-2xl font-semibold ">10,876 people</p>
            <p className="text-gray-400">BMI Percentages</p>
          </div>
          <div className="w-40">
            <Pie
              id="pie-chart"
              data={ecomPieChartData}
              legendVisiblity={true}
              height="300px"
            />
          </div>
        </div>
      </div>
      <div>
        <Bar />
        <div className="flex justify-end pr-10  mb-4">
          <Button
            color="white"
            bgColor={currentColor}
            text="Create Promo"
            borderRadius="10px"
            onClick={openDialog}
          />
        </div>
        <div className="flex justify-end pr-10">
          <Button
            color="white"
            bgColor={currentColor}
            text="Get Updated Fitbit Activity Analytics"
            borderRadius="10px"
            onClick={getPodAccess}
          />
        </div>
      </div>
    </>
  );
};

export default ActivityAnalytics;

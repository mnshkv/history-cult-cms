import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";
import { schoolsCollection } from "./models/schools";
import { storiesCollection } from "./models/stories";
import { interviewCollection } from "./models/interview";
import { testsCollection } from "./models/tests";
import Logo from "./logo2.png";
import { mshiCollection } from "./models/mshi";
import { schoolTagCollection } from "./models/school-tag";
import { videoCollection } from "./models/video";

// TODO: Replace with your config
const firebaseConfig = {
  apiKey: "AIzaSyDVxZyFntC5_9vSoBkMr8HVtOl15FsuKPI",
  authDomain: "culturehistory-74fa1.firebaseapp.com",
  projectId: "culturehistory-74fa1",
  storageBucket: "culturehistory-74fa1.appspot.com",
  messagingSenderId: "134283937840",
  appId: "1:134283937840:web:c96b62b4f02b834e0845f5",
};

const App: React.FC = () => {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("flanders")) {
        throw Error("Stupid Flanders!");
      }

      console.log("Allowing access to", user?.email);
      // This is an example of retrieving async data related to the user
      // and storing it in the controller's extra field.
      const sampleUserRoles = await Promise.resolve(["admin"]);
      authController.setExtra(sampleUserRoles);

      return true;
    },
    []
  );

  return (
    <FirebaseCMSApp
      name={"History Cult"}
      primaryColor="#a4ce57"
      secondaryColor="#4e3760"
      logo={Logo}
      authentication={myAuthenticator}
      collections={[
        schoolsCollection,
        storiesCollection,
        interviewCollection,
        testsCollection,
        mshiCollection,
        schoolTagCollection,
        videoCollection,
      ]}
      firebaseConfig={firebaseConfig}
    />
  );
};

export default App;

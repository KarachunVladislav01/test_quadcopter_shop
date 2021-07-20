import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import Navigation from "./src/components/Navigation/Navigation";
import AppLoading from "expo-app-loading";

export default function App() {
    let [fontsLoaded] = useFonts({
        "Lato-Regular": require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
        "Lato-Bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
        "Lato-Semibold": require("./src/assets/fonts/Lato/Lato-Semibold.ttf"),
        "Lato-Heavy": require("./src/assets/fonts/Lato/Lato-Heavy.ttf"),
    });

    return <>{fontsLoaded ? <Navigation /> : <AppLoading />}</>;
}

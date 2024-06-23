"use client";

import React, { useContext, useEffect } from "react";
import { webAppContext } from "../context";
import { retrieveLaunchParams } from "@tma.js/sdk";
import axios from "axios";

export default function Book() {
  const app = useContext(webAppContext).appRef.current;
  const [initDataRaw, setInitDataRaw] = "";

  useEffect(() => {
    try {
      // достаем данные, которые отправляются при открытии мини эппа, для авторизации юзера
      const { initDataRaw } = retrieveLaunchParams();
      setInitDataRaw(initDataRaw);
    } catch (error) {
      console.error("Error retrieving launch parameters:", error);
    }
  }, [app]);

  //здесь логика отправки запроса для регистрации нового юзера
  const handleNewUser = async () => {
    console.log("handling new user");
    const response = await axios("http://dog.ignorelist.com/", {
      method: "GET",
      headers: {
        Authorization: `tma ${initDataRaw}`,
      },
    });
    if (response) {
      app.showAlert("yes");
      console.log(response);
    } else {
      app.showAlert("error");
      console.log("error");
    }
  };


  return (
    <div className="h-screen w-full text-center pt-4 flex items-center justify-center flex-col">
      <h1>your first time here?</h1>
      <h1>{initDataRaw}</h1>
      <button className="myBtn" onClick={handleNewUser}>
        yes
      </button>
    </div>
  );
}

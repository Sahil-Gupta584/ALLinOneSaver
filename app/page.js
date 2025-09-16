'use client';
import MainPage from "./components/mainPage";

export default function Home(params) {
  console.log(params)
  return (
    <MainPage defaultChecked={'from main page'} />
  )
}  

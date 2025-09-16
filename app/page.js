'use client';
import MainPage from "./components/mainPage";

export default function Home(params) {
  console.log('abc')
  return (
    <MainPage defaultChecked={'from main page'} />
  )
}  

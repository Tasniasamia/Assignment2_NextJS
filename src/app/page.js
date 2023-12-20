import dynamic from "next/dynamic";
const ResisterForm=dynamic(()=>import ("@/Components/ResisterForm"))
export default function Home() {
  return (
   <div>
    <ResisterForm/>
   </div>
  )
}

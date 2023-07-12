import Image from "next/image";


export default function Loading() {
  return (
    <div className="flex justify-center w-full">
    <Image src="loading.svg" width={250} height={250} alt="loader"/>
    </div>
  )
}

import { TfiMenu } from "react-icons/tfi";
import Link from 'next/link'
import { DotGothic16 } from "next/font/google";

const DotFont =  DotGothic16({
  weight: "400",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <>
      <header className='text-gray-700 border-b-2 border-gray-700'>
        <div className='container flex mx-auto p-2'>
          <Link href="/">
            <div className="text-xl ml-3 font-bold">
              <span className={DotFont.className} >PIXCEED</span>
            </div>
          </Link>
  
          <nav className='flex flex-col items-center ml-auto'>
            <div className="m-auto">
            <Link className= "mr-4" href="/">
              <span className={DotFont.className}>HOME</span>
            </Link>
            <Link className="mr-4" href="/">
              <span className={DotFont.className}>MEMO</span>
            </Link>
            <Link className="mr-4" href="/">
              <span className={DotFont.className}>GALLERY</span>
            </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

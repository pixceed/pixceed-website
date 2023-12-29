import Link from 'next/link'
import { DotGothic16 } from "next/font/google";

const DotFont =  DotGothic16({
  weight: "400",
  subsets: ["latin"],
});


export default function Header() {
  return (
    <>
      <header className='text-gray-600 border-b-2 border-gray-600'>
        <div className='container flex mx-auto p-2'>
          <Link href="/">
            <div className="text-4xl ml-3 font-bold">
              <span className={DotFont.className} >PIXCEED</span>
            </div>
          </Link>
  
          <nav className='flex flex-col items-center ml-auto'>
            <div className="m-auto">
            <Link className= "text-xl mr-4" href="/">
              <span className={DotFont.className}>HOME</span>
            </Link>
            <Link className="text-xl mr-4" href="/memo">
              <span className={DotFont.className}>MEMO</span>
            </Link>
            <Link className="text-xl mr-4" href="/gallery">
              <span className={DotFont.className}>GALLERY</span>
            </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

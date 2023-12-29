import Header from "../header";

export default function Gallery() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container mx-auto lg:max-w-screen-lg">
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 p-4 ">
               <div className="px-8 py-16 border-2 border-gray-600">
               コンテン
               </div>
            </div>
            <div className="w-1/2 md:w-1/3 p-4 ">
               <div className="px-8 py-16 border-2 border-gray-600">
               コンテン
               </div>
            </div>
            <div className="w-1/2 md:w-1/3 p-4 ">
               <div className="px-8 py-16 border-2 border-gray-600">
               コンテン
               </div>
            </div>
            <div className="w-1/2 md:w-1/3 p-4 ">
               <div className="px-8 py-16 border-2 border-gray-600">
               コンテン
               </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

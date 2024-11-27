export default function Home() {
  return (
    <>
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>algo tals</p>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          <div className="flex-center bg-indigo-500"> AA </div>
          <div className="flex-center bg-indigo-500"> bb </div>
          <div className="flex-center bg-indigo-500"> cc </div>
          <div className="flex-center bg-indigo-500"> dd </div>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8  flex gap-4 flex-col">
            <div className="flex gap-4 bg-blue-800 rounded-md overflow-hidden">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="image description"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum titulo</h2>
                <p className="flex-grow">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  ullam rem asperiores debitis quae dolores voluptates maiores,
                  mollitia voluptate, accusamus dolorum ea laborum! Hic nesciunt
                  deleniti minima exercitationem! Fuga, maiores?
                </p>
                <button>Ler mais</button>
              </div>
            </div>

            <div className="flex gap-4 bg-blue-800 rounded-md overflow-hidden">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="image description"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum titulo</h2>
                <p className="flex-grow">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  ullam rem asperiores debitis quae dolores voluptates maiores,
                  mollitia voluptate, accusamus dolorum ea laborum! Hic nesciunt
                  deleniti minima exercitationem! Fuga, maiores?
                </p>
                <button>Ler mais</button>
              </div>
            </div>

            <div className="flex gap-4 bg-blue-800 rounded-md overflow-hidden">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="image description"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum titulo</h2>
                <p className="flex-grow">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  ullam rem asperiores debitis quae dolores voluptates maiores,
                  mollitia voluptate, accusamus dolorum ea laborum! Hic nesciunt
                  deleniti minima exercitationem! Fuga, maiores?
                </p>
                <button>Ler mais</button>
              </div>
            </div>
          </div>
          <div className="col-span-4"> bb </div>
        </div>
      </div>
    </>
  );
}

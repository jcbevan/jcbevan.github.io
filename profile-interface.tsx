import Image from "next/image"

export default function ProfileInterface() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-300 to-gray-500">
      <div className="w-full max-w-md bg-gray-700 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-4">
          <Image
            src="/placeholder.svg?height=300&width=500"
            width={500}
            height={300}
            alt="Profile image"
            className="w-full rounded-lg"
          />

          <div className="text-center mt-4 mb-6">
            <h1 className="text-2xl font-semibold text-white">Test Studio™</h1>
            <p className="text-gray-300 text-sm mt-1">Quisque ut Interdum Nunc Deus</p>
            <p className="text-gray-300 text-sm">Eleifend Ligu</p>
          </div>

          <div className="space-y-3 px-4 pb-8">
            <button className="w-full bg-black text-white py-2 px-4 rounded-full flex items-center">
              <span className="mr-2">🍄</span>
              <span className="text-lg">Lorem Ipsum Do</span>
            </button>

            <button className="w-full bg-black text-white py-2 px-4 rounded-full flex items-center">
              <span className="mr-2">🧩</span>
              <span className="text-lg">Quise Maximus Rex</span>
            </button>

            <button className="w-full bg-black text-white py-2 px-4 rounded-full flex items-center">
              <span className="mr-2">🥵</span>
              <span className="text-lg">Fermento 3</span>
            </button>

            <button className="w-full bg-black text-white py-2 px-4 rounded-full flex items-center">
              <span className="mr-2">👄</span>
              <span className="text-lg">Dolor Sit Amet</span>
            </button>

            <button className="w-full bg-black text-white py-2 px-4 rounded-full flex items-center">
              <span className="mr-2">✅</span>
              <span className="text-lg">Hac Habitas Platea 2</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


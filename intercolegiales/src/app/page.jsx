'use client'

const Page = () => {
  return (
    <>
      <div className="container mx-auto flex h-screen flex-col bg-white">
        <div className="p-2">
          <img src="/logo.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="flex flex-grow items-center justify-center">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
            <div className="px-6 py-4">
              <div className="mx-auto flex justify-center">
                <img className="h-12 w-auto sm:h-12" src="/sun.png" alt="" />
              </div>
              <h3 className="mt-3 text-center text-xl font-medium text-gray-600">
                Intercolegiales Gestión
              </h3>
              <p className="mt-1 text-center text-gray-500">
                Inicia sesión para acceder a tu cuenta
              </p>
              <form>
                <div className="mt-4 w-full">
                  <input
                    type="text"
                    placeholder="Identificación o usuario"
                    className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4 w-full">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
                    ¿Olvidaste tu contraseña?
                  </a>
                  <input
                    type="submit"
                    value=" Iniciar sesión"
                    className="transform rounded-lg bg-orange-500 px-6 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

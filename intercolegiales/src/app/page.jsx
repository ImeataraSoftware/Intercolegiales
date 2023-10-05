const Page = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex h-screen justify-center">
          <div className="hidden bg-cover lg:block lg:w-2/3">
            <div className="flex h-full items-center bg-orange-500 bg-opacity-50 px-20">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Intercolegiales Gestión
                </h2>

                <p className="mt-3 max-w-xl text-white">
                  Explora y administra los torneos intercolegiales de una manera sencilla y
                  emocionante. Mantente al tanto de cada partido, resultados y estadísticas en
                  tiempo real. ¡Únete a la emoción de los juegos entre colegios¡
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="mx-auto flex justify-center">
                  <img className=" h-14 w-auto sm:h-14" src="/sun.png" alt="" />
                </div>
                <p className="mt-3 text-gray-500">Inicia sesión para acceder a tu cuenta</p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-gray-600">
                      Usuario
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Usuario"
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="mb-2 flex justify-between">
                      <label htmlFor="password" className="text-sm text-gray-600">
                        Contraseña
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-orange-500 hover:underline focus:text-orange-500"
                      >
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Contraseña"
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <input
                      type="submit"
                      value="Iniciar sesión"
                      className="w-full transform rounded-lg bg-orange-500 px-4 py-2 tracking-wide text-white transition-colors duration-300 hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

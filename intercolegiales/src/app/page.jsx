const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-between bg-red-500 p-24">
        <h1>¡Bienvenido!</h1>
        <form>
          <input type="text" placeholder="Ingrese el usuario" />
          <input type="password" placeholder="Ingrese la contraseña" />
          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

export default Home

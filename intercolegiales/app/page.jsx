export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>¡Bienvenido!</h1>
                <form>
                    <input type="text" placeholder="Ingrese el usuario" />
                    <input
                        type="password"
                        placeholder="Ingrese la contraseña"
                    />
                    <button>Entrar</button>
                </form>
            </main>
        </>
    );
}

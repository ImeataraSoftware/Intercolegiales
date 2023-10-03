import Menu from "@/app/components/Menu";

export default function Page() {
    let options = [
        {
            title: "Configuración general",
            link: "/admin-sesion/general-config",
        },
        {
            title: "Administrar deportes",
            link: "/admin-sesion/admin-sports",
        },
        {
            title: "Administrar delegados",
            link: "/admin-sesion/admin-delegates",
        },
        {
            title: "Administrar escuelas",
            link: "/admin-sesion/admin-schools",
        },
        {
            title: "Ver datos globales",
            link: "/admin-sesion/global-data",
        },
    ];

    return (
        <>
            <Menu title={"Menu Admin "} options={options} />
        </>
    );
}

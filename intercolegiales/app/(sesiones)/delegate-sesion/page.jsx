import Menu from "@/app/Components/Menu";

export default function Page() {
    let options = [
        {
            title: "Administrar escuelas",
            link: "/delegate-sesion/admin-schools",
        },
        {
            title: "Ver datos globales",
            link: "/delegate-sesion/global-data",
        },
    ];

    return (
        <>
            <Menu title={"Menu Delegado"} options={options} />
        </>
    );
}

import Menu from "@/app/Components/Menu";

export default function Page() {
    let options = [
        {
            title: "Completar tabla de alumnos escolar",
            link: "/professor-sesion/scholar-table",
        },
        {
            title: "Inscribir alumnos",
            link: "/professor-sesion/enroll-students",
        },
        {
            title: "Modificar planillas",
            link: "/professor-sesion/modify-sheets",
        },
    ];

    return (
        <>
            <Menu title={"Menu Profesor"} options={options} />
        </>
    );
}

import Menu from "@/app/Components/Menu";

export default function Page() {
    let options = [
        "Completar tabla de alumnos escolar",
        "Inscribir alumnos",
        "Modificar planillas",
    ];

    return (
        <>
            <Menu title={"Menu ultramegapiola"} options={options} />
        </>
    );
}

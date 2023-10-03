import Menu from "@/app/Components/Menu";

export default function Page() {
    let options = ["Administrar escuelas", "Ver datos globales"];

    return (
        <>
            <Menu title={"Menu ultramegapiola"} options={options} />
        </>
    );
}

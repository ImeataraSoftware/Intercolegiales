import Link from "next/link";

export default function Menu({ title, options }) {
    return (
        <div>
            <h2>{title}</h2>
            {options.map((opt) => (
                <Link href={opt.link} key={opt.title}>
                    {opt.title}
                </Link>
            ))}
        </div>
    );
}

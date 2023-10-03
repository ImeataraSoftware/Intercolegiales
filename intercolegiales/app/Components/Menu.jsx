export default function Menu({ title, options }) {
    return (
        <div>
            <h2>{title}</h2>
            {options.map((opt) => (
                <button key={opt}>{opt}</button>
            ))}
        </div>
    );
}

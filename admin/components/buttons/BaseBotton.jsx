export default function BaseBotton({ children, onClick, className }) {
    return (
        <button onClick={onClick} className={`bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 ${className}`}>{children}</button>
    )
}



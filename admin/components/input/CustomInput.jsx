export default function CustomInput({ label, type, placeholder, value, onChange, className }) {
    return (
        <div className={`flex gap-2 ${className}`}>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`w-full border border-neutral-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary `} />
        </div>
    );
}

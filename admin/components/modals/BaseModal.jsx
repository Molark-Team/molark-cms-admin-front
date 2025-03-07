export default function BaseModal({ children, title, open, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[500px] bg-white rounded-md p-4">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-200 pb-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <button onClick={onClose}>
                        <i className="fi fi-rr-circle-xmark flex items-center justify-center text-neutral2 text-2xl"></i>
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

"use client"
import { useState, useMemo } from "react";
import CustomInput from "../input/CustomInput";

export default function CustomTable({ data, columns, sort = false, search = false }) {
    const [searchItem, setSearchItem] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");
    const [show, setShow] = useState(10);

    const sortedAndFilteredData = useMemo(() => {
        let processedData = [...data];

        if (searchItem) {
            processedData = processedData.filter(item =>
                columns.some(column =>
                    String(item[column.id])
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                )
            );
        }

        if (sortColumn) {
            processedData.sort((a, b) => {
                const aValue = a[sortColumn];
                const bValue = b[sortColumn];

                if (typeof aValue === 'string') {
                    return sortDirection === 'asc'
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue);
                }

                return sortDirection === 'asc'
                    ? aValue - bValue
                    : bValue - aValue;
            });
        }

        return processedData.slice(0, parseInt(show));
    }, [data, sortColumn, sortDirection, searchItem, show, columns]);

    const handleSort = (columnId) => {
        setSortColumn(columnId);
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    }
    const handleShow = (e) => {
        setShow(e.target.value);
    }
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="w-full flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <span>نمایش</span>
                    <select className="w-12 border border-neutral-200 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary" onChange={(e) => handleShow(e)}>
                        <option value="10">10</option>
                        <option value="25">20</option>
                        <option value="50">50</option>
                    </select>
                    <span>رکورد</span>
                </div>
                <div>
                    {search && data.length > 0 && <CustomInput label="" type="text" placeholder="جستجو ..." value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className="w-[250px]" />}
                </div>
            </div>
            <table className="w-full border-collapse border border-neutral-200 rounded-md">
                <thead className="w-full">
                    <tr className="w-full">
                        {columns.map((column) => (
                            <th key={column.id} className="text-center p-3 border border-neutral-200 cursor-pointer"
                                onClick={() => handleSort(column.id)}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm text-neutral-500">{column.label}</span>
                                    {sort && (
                                        <i className={`fi fi-rr-sort-alt text-primary flex items-center justify-center`}></i>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedAndFilteredData.map((row) => (
                        <tr key={row.id}>
                            {columns.map((column) => (
                                <td key={column.id} className="text-center text-neutral2 p-3 border border-neutral-200">{row[column.id]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    )
}   

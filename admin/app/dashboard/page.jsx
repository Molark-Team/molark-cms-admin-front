"use client"
import BaseBotton from "@/components/buttons/BaseBotton";
import MainLayout from "@/components/mainLayout/MainLayout";
import BaseModal from "@/components/modals/BaseModal";
import CustomTable from "@/components/table/CustomTable";
import { useState } from "react";
export default function Dashboard() {
    const [openModal, setOpenModal] = useState(false);
    const data = [
        { id: 1, name: "John", family: "Doe", request: "Request 1", project: "Project 1", date: "2021-01-01", status: "Pending" },
        { id: 2, name: "Jane", family: "Smith", request: "Request 2", project: "Project 2", date: "2021-01-02", status: "Completed" },
        { id: 3, name: "Jim", family: "Beam", request: "Request 3", project: "Project 3", date: "2021-01-03", status: "Cancelled" },
    ]
    const columns = [
        { id: "name", label: "نام" },
        { id: "family", label: "نام خانوادگی" },
        { id: "request", label: "درخواست" },
        { id: "project", label: "پروژه" },
        { id: "date", label: "تاریخ درخواست" },
        { id: "status", label: "وضعیت" },
    ]
    return (
        <main className="flex flex-col items-center justify-center">
            <MainLayout>
                <h1 className="text-2xl font-bold my-8">داشبورد</h1>
                <BaseBotton onClick={() => setOpenModal(true)}>
                    نمونه مدال
                </BaseBotton>

                <CustomTable data={data} columns={columns} sort={true} search={true} />
            </MainLayout>
            {
                openModal && (
                    <BaseModal title="نمونه مدال" open={openModal} onClose={() => setOpenModal(false)} >
                        <p>
                            این یک مدال است
                        </p>
                    </BaseModal>
                )
            }
        </main>
    );
}

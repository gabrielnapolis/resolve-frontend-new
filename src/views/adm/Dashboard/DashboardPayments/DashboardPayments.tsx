import React, { useState } from "react";

type Payment = {
    id: number;
    payer: string;
    amount: number;
    type: "pix" | "credit card";
};

const initialPayments: Payment[] = [
    { id: 1, payer: "Alice", amount: 100, type: "pix" },
    { id: 2, payer: "Bob", amount: 200, type: "credit card" },
    { id: 3, payer: "Carol", amount: 150, type: "pix" },
];

const DashboardPayments = () => {
    const [payments, setPayments] = useState<Payment[]>(initialPayments);

    const handleEdit = (id: number) => {
        alert(`Edit payment with ID: ${id}`);
        // Implement your edit logic here
    };

    return (
        <div>
            <h1>Admin Payments</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Payer</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Amount</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Type</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{payment.id}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{payment.payer}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{payment.amount}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{payment.type}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <button onClick={() => handleEdit(payment.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardPayments;
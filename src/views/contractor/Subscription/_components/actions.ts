import { authFetch } from "@/lib/authFetch";

export async function validatePayment(id: string): Promise<any> {
    const res = await authFetch(
        `http://localhost:3001/payment/subscription/pix/${id}/capture`,
        { method: "GET" }
    );

    return res;
}

export async function cancelSubscription(): Promise<any> {
    const res = await authFetch(
        "http://localhost:3001/payment/subscription/cancel",
        { method: "POST" }
    );
    return res;
}

export async function getSubscription(): Promise<any> {
    const res = await authFetch(
        "http://localhost:3001/payment/subscription/me",
        {
            method: "GET",
        }
    );

    return res;
}

export async function generateQrCode(): Promise<any> {
    const res = await authFetch(
        "http://localhost:3001/payment/subscription/pix",
        {
            method: "POST",
        }
    );

    return res;
}

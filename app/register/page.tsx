import { EventRegistrationForm } from "@/components/event-payment";
import { MainNav } from "@/components/main-nav";
import { MpesaDonationForm } from "@/components/mpesa-donation-form";
import Image from "next/image";



export default function RegistrationPage(){
    return(
        <div className="flex flex-col min-h-screen">
            <MainNav />
            <div className="bg-muted/30 p-8 rounded-xl">
                <div className="flex items-center justify-center gap-10 mb-6">
                    <h2 className="text-2xl font-bold text-ubuntu-dark-brown">Event Registration Form</h2>
                    <div className="bg-white p-2 rounded-md shadow-sm">
                        <Image
                            src="/images/mpesa-logo.png"
                            alt="M-Pesa logo"
                            width={60}
                            height={36}
                            className="object-contain"
                        />
                    </div>
                </div>
            <EventRegistrationForm />
            </div>
        </div>

    )
}
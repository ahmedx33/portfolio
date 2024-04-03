import Caption from "@/components/ui/caption";
import Form from "./components/form";

export default function Contact() {
    return <section className="w-full min-h-[60vh] pb-6 mt-20 px-6 md:px-12 flex lg:flex-row flex-col-reverse" id="contact">
        <Form />
        <div className="lg:w-2/4 w-full h-full flex flex-col justify-start items-start p-4">
            <Caption className="mb-6">Let&apos;s work together!</Caption>
            <p className="text-gray-500 w-[70%]">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            <ul className="text-xl mt-12">
                <li>email: <span className="select-text">ahmedx3.business@gmail.com</span></li>
                <li>phone: <span className="select-text">01033579442</span></li>
            </ul>
        </div>
    </section>
}

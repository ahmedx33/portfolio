"use client";
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { FormEvent, useState } from "react";
import { validateBody, validateEmail, validateName, validateSubject } from "../utils/validations";

export default function Form() {
    const [isSending, setIsSending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const nameErrors = validateName(name);
    const emailErrors = validateEmail(email);
    const subjectErrors = validateSubject(subject);
    const bodyErrors = validateBody(body);
    async function contactFormSubmit(e: FormEvent) {
        e.preventDefault();
        if (nameErrors.some((e) => !e.success) || emailErrors.some((e) => !e.success) || subjectErrors.some((e) => !e.success) || bodyErrors.some((e) => !e.success)) {
            setIsError(true);
            return;
        }
        setIsSending(true);
        setIsError(false);
        const res = await axios.post("https://formspree.io/f/mgegorre", { name, email, subject, body });
        setSuccess(res.status === 200);
        setIsSending(false);
    }
    return (
        <form onSubmit={contactFormSubmit} className="lg:w-2/4 w-full h-full flex flex-col gap-1.5 items-center p-6">
            <Input value={name} onChange={(e) => setName(e.target.value)} validations={nameErrors} placeholder="Your name" type="text" name="name" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} validations={emailErrors} placeholder="Your Email" type="email" name="email" />
            <Input value={subject} onChange={(e) => setSubject(e.target.value)} validations={subjectErrors} placeholder="Subject" type="string" name="subject" />
            <Textarea value={body} onChange={(e) => setBody(e.target.value)} validations={bodyErrors} placeholder="How can I help?" name="body" className="min-h-36 max-h-72 mb-2.5" />
            <div className="flex gap-4 md:gap-1 w-full md:flex-row flex-col items-center">
                <Button
                    disabled={
                        isSending ||
                        isSuccess ||
                        isError ||
                        nameErrors.some((error) => !error.success) ||
                        emailErrors.some((error) => !error.success) ||
                        subjectErrors.some((error) => !error.success) ||
                        bodyErrors.some((error) => !error.success)
                    }
                    type="submit"
                    className="w-full"
                >
                    {!isSuccess ? (!isError ? (!isSending ? "Let's get in touch" : "Sending...") : "error! try again") : "Thank you, email sent!"}{" "}
                </Button>
                <SocialLinks />
            </div>
        </form>
    );
}

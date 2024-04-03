import Logo from "@/components/logo";
import SocialLinks from "@/components/social-links";

export function Footer() {
    return <footer className="w-full h-[104px] py-[24px] px-[40px] md:px-[90px] flex items-center justify-between border-t-2">
        <div className="flex gap-[0.7rem]">
            <Logo />
        </div>
        <h3 className="hidden md:block">Made with ❤️</h3>
        <SocialLinks />
    </footer>
}

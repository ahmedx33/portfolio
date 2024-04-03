import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Discord from "./discord";

export default function SocialLinks() {
	return (
		<div className="social-links w-fit flex gap-1">
			<Button className="w-10 p-0" title="github" asChild>
				<a target="_blank" href="https://github.com/ahmedx33">
					<Github className="w-6" />
				</a>
			</Button>
			<Button className="w-10 p-0" title="discord" asChild>
				<a
					target="_blank"
					href="https://discord.com/users/722141370177028157"
				>
					<Discord />
				</a>
			</Button>
			<Button className="w-10 p-0" title="twitter" asChild>
				<a target="_blank" href="https://twitter.com/ElmhqqB1">
					<Twitter className="w-6" />
				</a>
			</Button>
		</div>
	);
}

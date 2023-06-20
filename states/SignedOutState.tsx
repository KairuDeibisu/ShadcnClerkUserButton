import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SignedOut, useClerk } from "@clerk/nextjs";
import { FC } from "react";

interface SignedOutStateProps {
}

const SignedOutState: FC<SignedOutStateProps> = () => {
    const { openSignIn } = useClerk();

    return <SignedOut>
        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => openSignIn()}>
                <span>Sign In</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </SignedOut>;
}

export default SignedOutState;
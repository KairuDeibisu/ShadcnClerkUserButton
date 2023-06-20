import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { SignOutButton, SignedIn, useClerk } from "@clerk/nextjs";
import MultiAccountState from "./MultiAccountState";
import { LogOut, LucideUser } from "lucide-react";

import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import DropdownMenuItemWithIcon from "../utils/DropdownMenuItemWithIcon";

const SignedInState = () => {
    const { session, openUserProfile } = useClerk();
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    
    return <SignedIn>
        <DropdownMenuContent>
            <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItemWithIcon Icon={LucideUser} onClick={() => openUserProfile({ appearance: { baseTheme: isDark ? dark : undefined } })}>
                    <span>Profile</span>
                </DropdownMenuItemWithIcon>
                <SignOutButton signOutOptions={{ sessionId: session?.id }}>
                    <DropdownMenuItemWithIcon Icon={LogOut}>
                        <span>Sign Out</span>
                    </DropdownMenuItemWithIcon>
                </SignOutButton>
                <MultiAccountState />
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </SignedIn>;
}

export default SignedInState;
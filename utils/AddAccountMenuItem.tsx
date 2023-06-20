import { SignInButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import DropdownMenuItemWithIcon from "./DropdownMenuItemWithIcon";

const AddAccountMenuItem = () => {
    return <SignInButton>
      <DropdownMenuItemWithIcon Icon={Plus}>
        <span>Add Account</span>
      </DropdownMenuItemWithIcon>
    </SignInButton>;
}

export { AddAccountMenuItem }
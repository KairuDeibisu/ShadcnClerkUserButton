import { DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { ArrowLeftRight, LogOut } from 'lucide-react';
import { SignOutButton, useSession, useSessionList } from '@clerk/nextjs';
import { AddAccountMenuItem } from '../utils/AddAccountMenuItem';
const MultiAccountState = () => {
  
  const { sessions, setSession, } = useSessionList();
  const { session } = useSession();

  const multiAccount = sessions && sessions.length >= 2;

  return multiAccount ?
    <>
      <DropdownMenuSeparator />
      {sessions?.map((res, index) =>
        session && res?.id != session.id ? (
          <DropdownMenuItem key={index} onClick={() => setSession(res.id)}>
            <span>{res?.user?.primaryEmailAddress?.emailAddress}</span>
            <ArrowLeftRight className="ml-2 h-4 w-4 hover:animate-pulse " />
          </DropdownMenuItem>
        ) : null,
      )}
      <AddAccountMenuItem/>
      <DropdownMenuSeparator />

      <SignOutButton>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out of all accounts</span>
        </DropdownMenuItem>
      </SignOutButton>
    </>
    : <>
      <DropdownMenuSeparator />
      <AddAccountMenuItem/>
    </>;
}

export default MultiAccountState;
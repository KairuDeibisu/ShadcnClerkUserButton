'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading} from '@clerk/nextjs';
import SignedInState from './states/SignedInState';
import SignedOutState from './states/SignedOutState';
import { Loader2 } from 'lucide-react';

const MenuButton = () => {

  return (
    <div className='container'>
      <ClerkLoading>
      <Loader2 className='animate-spin h-10 w-10 dark:text-slate-200' />
      </ClerkLoading>
      <ClerkLoaded>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <SignedInState/>
          <SignedOutState/>
        </DropdownMenu>
      </ClerkLoaded>
    </div>
  )
}


export default MenuButton;



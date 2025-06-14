'use client'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
import { BsDot } from 'react-icons/bs'
import useCurrentUser from '../hooks/useCurrentUser';
import useLoginModal from '../hooks/useLoginModal';

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void
    auth?: boolean //checking id the route is protected
    alert?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label, 
    href, 
    icon: Icon, 
    onClick,
    auth,
    alert
}) => {
        console.log("Alert: ", alert);
        const router = useRouter();
        const loginModal = useLoginModal();
        const {data: currentUser} = useCurrentUser();
        const handleClick = useCallback(() => {
            if(onClick){
                return onClick();
            }

            if(auth && !currentUser) {
                loginModal.onOpen();
            }
            else if(href){
                router.push(href);
            }
        }, [router, onClick, href, currentUser, auth, loginModal]);

  return (
    <div onClick={handleClick} className='flex flex-row items-center'>
        <div
            className='
            relative
            rounded-full
            h-14w-14
            flex
            items-center
            justify-center
            p-4
            hover:bg-slate-300
            hover:bg-opacity-10
            cursor-pointer
            transition
            lg:hidden       
            '
        >
            <Icon size={28} color="white"/>
            { alert ? <BsDot className='text-sky-500 absolute -top-4 left-0' size={70}/> : null }
        </div>

        <div
            className='
                relative
                hidden
                lg:flex
                items-center
                gap-4
                p-4
                rounded-fullhover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
            '
        >
            <Icon size={24} color="white" />
            <p className='text-white text-xl hidden lg:block'>
                {label}
            </p>
            { alert ? <BsDot className='text-sky-500 absolute -top-4 left-0' size={70}/> : null }
        </div>
    </div>
  )
}

export default SidebarItem
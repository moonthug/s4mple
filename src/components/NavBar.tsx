'use client';

import { Avatar, Button, Dropdown, Navbar as FlowbiteNavbar } from 'flowbite-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import logo from '../../public/logo.png';


type NavbarProps = {
  session: Session | null
}

export function isRouteActive(route: string, segment: string | null) {
  return route === segment;
}

export const Navbar: React.FC<NavbarProps> = ({
  session
}) => {
  const segment = useSelectedLayoutSegment();

  // console.log('segment', segment);

  return (
    <FlowbiteNavbar className="!bg-gray-50" fluid rounded>
      <FlowbiteNavbar.Brand href="https://s4mple.com/">
        <Image src={ logo } height="40" className="mr-3" alt="s4mple"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">S4MPLE</span>
      </FlowbiteNavbar.Brand>
      <div className="flex md:order-2">
        { session &&
          <>
            <Dropdown
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{ session.user?.name }</span>
                <span className="block truncate text-sm font-medium">{ session.user?.email }</span>
              </Dropdown.Header>
              <Dropdown.Item
                onClick={ () => signOut() }
              >Sign out</Dropdown.Item>
            </Dropdown>
            <FlowbiteNavbar.Toggle/>
          </>
        }
        { !session?.user &&
          <Link href="/auth/signin">
            <Button>Sign In</Button>
          </Link>
        }
      </div>

      { session &&
        <FlowbiteNavbar.Collapse>
          <FlowbiteNavbar.Link href="/" active={ isRouteActive('', segment) }>Dashboard</FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link
            href="/recordings"
            active={ isRouteActive('recordings', segment) }>Recordings</FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link
            href="/recipes"
            active={ isRouteActive('recipes', segment) }>Recipes</FlowbiteNavbar.Link>
        </FlowbiteNavbar.Collapse>
      }
    </FlowbiteNavbar>
  );
};

export default Navbar;

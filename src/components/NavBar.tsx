'use client';

import { Avatar, Button, Dropdown, Navbar as FlowbiteNavbar } from 'flowbite-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';


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

  console.log('segment', segment);

  return (
    <FlowbiteNavbar fluid rounded>
      <FlowbiteNavbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="s4mple"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">S4MPLE</span>
      </FlowbiteNavbar.Brand>

      <div className="flex md:order-2">
        { session &&
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
        }
        { !session &&
          <Link href="/auth/signin">
            <Button>Sign In</Button>
          </Link>
        }
        <FlowbiteNavbar.Toggle/>
      </div>

      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="/" active={ isRouteActive('', segment) }>Dashboard</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link
          href="/recordings"
          active={ isRouteActive('recordings', segment) }>Recordings</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link
          href="/recipes"
          active={ isRouteActive('recipes', segment) }>Recipes</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;

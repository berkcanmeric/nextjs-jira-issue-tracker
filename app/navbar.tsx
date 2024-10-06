'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from 'react-icons/fa';
import classnames from 'classnames';
import { useSession } from 'next-auth/react';
import {
  Box,
  DropdownMenu,
  Avatar,
  Flex,
  Container,
  Text,
} from '@radix-ui/themes';

const NavBar = () => {
  return (
    <nav className='border-b mb-5 px-5 py-3'>
      <Container>
        <Flex justify='between'>
          <Flex align='center' gap='3'>
            <Link href='/'>
              <FaBug />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return null;

  if (status === 'unauthenticated')
    return (
      <Link className='nav-link' href='/api/auth/signin'>
        Login
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user?.image!}
            fallback='?'
            size='3'
            radius='full'
            className='cursor-pointer'
            referrerPolicy='no-referrer'
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={5}>
          <DropdownMenu.Label>
            <Text size='2' color='gray'>
              {session?.user?.email}
            </Text>
          </DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link href='/api/auth/signout' className='w-full'>
              Logout
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { name: 'Dashboard', href: '/' },
    { name: 'Issues', href: '/issues/list' },
  ];
  return (
    <ul className='flex space-x-6'>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              '!text-zinc-900': link.href === currentPath,
              'nav-link': true,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;

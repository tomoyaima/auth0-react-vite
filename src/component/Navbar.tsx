// src/components/Navbar.tsx
import React from 'react';
import { Box, Flex, HStack, Button,IconButton, useDisclosure, CircularProgress , Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,ChevronDownIcon } from '@chakra-ui/icons';


import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuthenticated, isLoading } = useAuth0();

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>CIC検証アプリ</Box>
     
        </HStack>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
        <Flex alignItems={'center'}>
        {isLoading? <CircularProgress isIndeterminate color='green.300' /> : 
        !isAuthenticated?  <LoginButton /> : <LogoutButton />}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

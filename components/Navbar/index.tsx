import type { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'

import SocialButton from '../Hero/SocialButton'
import NavLink from './NavLink'

import { NavLinks, BRAND_NAME } from '../../utils'

const Navbar: NextComponentType<NextPageContext, {}, {}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const showSocialMedia = useBreakpointValue({
    base: 'none',
    md: 'block',
  })

  return (
    <Box>
      <Container
        maxW={'7xl'}
        bg={'transparent'}
        backdropFilter="blur(5px)"
        borderRadius={'0.375rem'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color="white">{BRAND_NAME}</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {NavLinks.map((link) => (
                <NavLink key={link} label={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack
              direction={'row'}
              spacing={3}
              justify="center"
              display={showSocialMedia}
            >
              <SocialButton
                label={'Github'}
                href="https://github.com/prajnastra"
              >
                <FaGithub color="#fff" />
              </SocialButton>
              <SocialButton
                label={'YouTube'}
                href="https://www.youtube.com/@itsabhijit"
              >
                <FaYoutube color="#fff" />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href="https://www.instagram.com/thatsabhijit"
              >
                <FaInstagram color="#fff" />
              </SocialButton>
              <SocialButton
                label={'Twitter'}
                href="https://twitter.com/prajnastra"
              >
                <FaTwitter color="#fff" />
              </SocialButton>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NavLinks.map((link) => (
                <NavLink key={link} label={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}

export default Navbar

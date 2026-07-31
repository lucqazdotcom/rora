'use client'

import { ChakraProvider } from '@chakra-ui/react';
import system from '../../styles/theme'
import { ColorModeProvider } from './color-mode'

// The CLI snippet ships `defaultSystem` here; swapped for our own system so
// the custom tokens/textStyles/recipes actually reach the tree.
export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

import { extendTheme, CssVarsProvider } from '@mui/joy/styles'
import Example from './Components/Example'
import CssBaseline from '@mui/joy/CssBaseline'


const theme = extendTheme({
  cssVarPrefix: 'mode-toggle',
  colorSchemeSelector: '.demo_mode-toggle-%s',
});

export default function App() {
  return (
    <>
      <CssVarsProvider theme={theme} modeStorageKey="mode-toggle-demo" disableNestedContext>
        <CssBaseline />
        <Example />
      </CssVarsProvider>
    </>
  )
}

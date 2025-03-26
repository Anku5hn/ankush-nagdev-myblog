import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';//app cache import
import { ThemeProvider, createTheme } from '@mui/material/styles';//mui imports
import { Roboto } from 'next/font/google';//mui required font
//font optimization
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
//theme provider theme
const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});
//export 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppCacheProvider {...pageProps}>
        <ThemeProvider theme={theme}>
          <main className={roboto.variable}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </AppCacheProvider>
    </>)
}
//referance: https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs-pages-router-ts/pages/_app.tsx
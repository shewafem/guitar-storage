import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function ThemedImage() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = '/images/logo-dark.png'
      break
    case 'dark':
      src = '/images/logo-light.png'
      break
    default:
      src = '/images/logo-dark.png'
      break
  }

  return <Image alt="logo" src={src} width={48} height={48} />
}

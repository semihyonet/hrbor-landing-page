import logo from '@/images/hrbor_logo.png'
import Image from "next/image";
export function Logo(props) {
  return (
    <Image src={logo} aria-hidden="true"  {...props} alt={'hrbor-logo'}>

    </Image>
  )
}

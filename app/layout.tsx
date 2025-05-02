import "./globals.css";
import Image from "next/image";
export default function RootLayout ({children}: {children: React.ReactNode}) {
  return (
      <header>
         <Image
        src="/AkInkorporated.JPG"
        alt="AkInkorporated Logo"
        width={100}
        height={100}
        /> 
      
        <html lang="en">
          <body>{children}</body>
        </html>
       
        </header>

  )
}


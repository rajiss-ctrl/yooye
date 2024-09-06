import Link from "next/link"
import { Separator } from "./ui/separator"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from 'lucide-react'

const MobileNavbar = () => {
  return (
    <nav className="md:hidden pt-3 px-3 bg-[#120800]">
      <Sheet>
        <SheetTrigger> 
          <Menu className="text-white" /> 
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetTitle>
            <span>Welcome omo onira laage!</span>
          </SheetTitle>
          <Separator />
          <ul>
            <li className="text-md mt-5 py-4">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md mt-5 py-4">
              <Link href="/about-me">About Me</Link>
            </li>
            <li className="text-md mt-5 py-4">
              <Link href="/agenda">My Agenda</Link>
            </li>
            <li className="text-md mt-5 py-4">
              <Link href="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNavbar

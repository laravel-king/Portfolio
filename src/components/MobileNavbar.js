import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify} from "lucide-react";
import AppLogo from "@/components/AppLogo";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";

const MobileNavbar = () => {
return (
  <Sheet>
      <SheetTrigger asChild>
          <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
          <div className="flex flex-col items-center justify-between h-full py-8">
              <div className="flex flex-col items-center gap-y-32">
                  <AppLogo />
                  <Navbar containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-2xl" />
              </div>
              <Socials containerStyles="flex gap-x-3" iconStyles="text-2xl" />
          </div>
      </SheetContent>
  </Sheet>
);
}

export default MobileNavbar;
import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleUserRoundIcon, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { useCreateUserStore } from "../../../store/auth/createUser";

const LoggedInNav = () => {
  const user = useCreateUserStore((state) => state.user);
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={() => setOpen(!open)} open={open}>
      <DropdownMenuTrigger>
        <div className="">
          <p className="text-[#0C0F4D] bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center">
            MS
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 h-[220px] flex flex-col justify-center items-center gap-4 py-4">
        <DropdownMenuItem className="text-base hover:bg-none">
          <div
            className="flex flex-col gap-4  items-center"
            onClick={() => setOpen(false)}
          >
            <CircleUserRoundIcon className="w-8 h-8" />
            <p className="capitalize">
              {user?.profile.firstName} {user?.profile.lastName}
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base">
          <Link to="/transactions" className="" onClick={() => setOpen(false)}>
            My Transactions
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base">
          <Link
            to="/guest/login"
            className="flex  gap-1 justify-center items-center"
            onClick={() => setOpen(false)}
          >
            <LogOut className="w-6 h-6" />
            <p className="">Sign Out</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoggedInNav;

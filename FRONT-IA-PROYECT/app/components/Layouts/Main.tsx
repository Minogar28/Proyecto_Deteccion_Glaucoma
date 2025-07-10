import { Outlet } from "react-router";
import { Button } from "@/components/Buttons";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";

export default function Main() {
  return (
    <main className=' bg-gray-600 flex-auto min-h-full box-border'>
      <header className='flex w-full justify-end border-b-1 border-b-gray-200'>
        {/* // Boton para organizar opciones del usuario (Proceso futuro)
        <Button icon={<SettingsIcon />}>
          <p>Opciones</p>
        </Button> */}
        <Avatar className='m-1'>U</Avatar>
      </header>
      <body className='p-2 w-full flex-grow overflow-auto'>
        <Outlet />
      </body>
    </main>
  );
}

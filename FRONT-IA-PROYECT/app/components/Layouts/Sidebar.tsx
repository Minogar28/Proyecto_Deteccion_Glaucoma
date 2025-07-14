import { NavLink } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@/components/Buttons";

interface Url {
  to: string;
  label: string;
}

const urls: Url[] = [
  // { to: "/", label: "Dashboard" },
  { to: "/detector_ia", label: "Detector IA" },
  { to: "/pacientes", label: "Pacientes" },
];

export function LinksTo({ urls }: { urls: Url[] }) {
  return (
    <>
      {urls.map((link) => (
        <li key={link.to} className='w-full'>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `flex pl-3 w-full rounded-md text-justify text-lg
              ${
                isActive
                  ? "bg-white text-black pointer-events-none"
                  : "bg-gray-400 text-white hover:bg-white hover:text-black"
              }`
            }>
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default function Sidebar() {
  return (
    <aside className='flex flex-col w-[250px] bg-zinc-800 h-screen p-2 justify-between'>
      <div className='w-full p-2.5'>
        <h2 className='text-3xl font-semibold mb-4'>Menú</h2>
        <nav>
          <ul className='space-y-2'>
            <LinksTo urls={urls} />
          </ul>
        </nav>
      </div>

      <div className='w-full flex items-center justify-center'>
        <IconButton
          icon={<LogoutIcon />}
          size='md'
          variant='secondary'
          className='w-full md:w-1/2 text-center'>
          <p>Logout</p>
        </IconButton>
      </div>
    </aside>
  );
}

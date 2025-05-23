import { BookOpen, Backpack, FileSpreadsheet, NotepadText } from "lucide-react";

export default function Asside() {
  return (
    <div
      className="w-60 h-scree rounded-r-xl "
      style={{ backgroundColor: "#4C506B",}}
    >
    <nav className="text-white flex flex-col justify-between h-full w-full">
        <div className="flex flex-col justify-center items-center gap-9 mt-15">
          <div className="flex items-center">
            <BookOpen />
            <a className="ml-3" href="/dashboard/comodato">
              Comodato
            </a>
          </div>
          <div className="flex items-center">
            <Backpack />
            <a className="ml-3" href="/dashboard/inventario">
              Inventário Comodato
            </a>
          </div>
          <div className="flex items-center">
            <Backpack />
            <a className="ml-3" href="/dashboard/inventariog">
              Inventário Patrimonial
            </a>
          </div>
          <div className="flex items-center">
            <FileSpreadsheet />
            <a className="ml-4" href="relatorio">Relatório</a>
          </div>
          <div className="flex items-center">
            <NotepadText/>
            <a className="ml-4 flex flex-wrap" href="/dashboard/stats">Status <br />Comodato</a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mb-6">
          <a href="/dashboard">
            <img src="/imgs/LogoLeoncio.png" alt="Logo" className="w-20" />
          </a>
        </div>
      </nav>
    </div>
  );
}

import Link from "next/link";
import { Building } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              &copy; {currentYear} Samsung para Empresas. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#comprar" className="text-sm text-muted-foreground hover:text-primary">
              Como Comprar
            </Link>
            <Link href="#contato" className="text-sm text-muted-foreground hover:text-primary">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

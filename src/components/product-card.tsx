import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';
import { CheckCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const categoryMap: { [key: string]: string } = {
  mobility: "Mobilidade",
  displays: "Displays",
  hvac: "Climatização",
  services: "Serviços"
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-xl leading-tight">{product.name}</CardTitle>
            {product.category && <Badge variant="secondary">{categoryMap[product.category] || product.category}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {product.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {product.specs && <CardDescription className="mt-4 text-xs italic">{product.specs}</CardDescription>}
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2 sm:flex-row">
        <Button asChild className="flex-1">
          <Link href="#comprar">Como comprar</Link>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link href="#contato">Solicitar proposta</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

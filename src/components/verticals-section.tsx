"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Store, BedDouble, School, Factory } from 'lucide-react';

const verticals = [
  { icon: <Building2 className="h-10 w-10" />, label: 'Corporativo' },
  { icon: <Store className="h-10 w-10" />, label: 'Varejo' },
  { icon: <BedDouble className="h-10 w-10" />, label: 'Hotelaria' },
  { icon: <School className="h-10 w-10" />, label: 'Educação' },
  { icon: <Factory className="h-10 w-10" />, label: 'Indústria' },
];

export function VerticalsSection() {
  return (
    <section id="verticais" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-extrabold text-primary sm:text-4xl">Setores Atendidos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Soluções personalizadas para as necessidades específicas de cada mercado.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="rounded-2xl bg-secondary/50 p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                  <div className="text-primary">{vertical.icon}</div>
                  <span className="text-center font-semibold text-foreground">{vertical.label}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

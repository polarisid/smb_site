"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, MonitorPlay, ThermometerSun } from 'lucide-react';

const solutions = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Samsung Knox Suite',
    description: 'Gestão completa e segura dos seus dispositivos móveis. Inclui MDM, E-FOTA para atualizações controladas e compliance garantido.',
  },
  {
    icon: <MonitorPlay className="h-10 w-10 text-primary" />,
    title: 'Sinalização Digital',
    description: 'Impacte seu público com displays profissionais, video walls imersivos e gestão de conteúdo remota e simplificada para sua rede de telas.',
  },
  {
    icon: <ThermometerSun className="h-10 w-10 text-primary" />,
    title: 'Climatização Comercial',
    description: 'Máxima eficiência energética com a tecnologia WindFree™. Soluções integradas com BMS e SmartThings Pro para um controle inteligente.',
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-extrabold text-primary sm:text-4xl">Soluções Integradas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Hardware, software e serviços que trabalham juntos para o sucesso do seu negócio.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader className="items-center">
                  {solution.icon}
                  <CardTitle className="font-headline mt-4">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

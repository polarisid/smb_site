"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Lightbulb, TicketPercent } from 'lucide-react';

const steps = [
  { step: '1', title: 'Cadastre seu CNPJ', description: 'Acesse o portal e crie sua conta de empresa.' },
  { step: '2', title: 'Navegue e Selecione', description: 'Explore nosso catálogo e adicione produtos ao seu carrinho.' },
  { step: '3', title: 'Solicite ou Compre', description: 'Peça uma proposta personalizada ou compre diretamente.' },
];

const coupons = [
    { code: 'CRP3198122'},
    { code: 'CRP3886546'},
    { code: 'CRP5286953'},
]

export function HowToBuySection() {
  return (
    <section id="comprar" className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-extrabold text-primary sm:text-4xl">Como Comprar</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Adquirir soluções Samsung para sua empresa é um processo simples e direto.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Portal Samsung Empresas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className='space-y-6'>
                    {steps.map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="mt-1 text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>

                <Card className='bg-primary/5'>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2 font-headline text-xl text-primary'>
                           <TicketPercent /> Use nossos cupons!
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-muted-foreground mb-4'>Utilize os cupons abaixo no portal para garantir descontos progressivos exclusivos em suas compras.</p>
                        <div className='flex flex-wrap gap-3'>
                            {coupons.map(coupon => (
                                <div key={coupon.code} className='bg-background border-dashed border-2 border-primary/50 rounded-lg px-4 py-2 font-mono text-primary font-bold'>
                                    {coupon.code}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="flex-1">
                    <a href={process.env.NEXT_PUBLIC_PORTAL_EMPRESAS_URL} target="_blank" rel="noopener noreferrer">
                      Abrir portal <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <Link href="#contato">Falar com especialista</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="rounded-2xl bg-primary/10 border-primary/20">
              <CardHeader className="flex-row items-center gap-3">
                <Lightbulb className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-xl text-primary">Dica de Especialista</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-primary/80">
                <p>Para grandes volumes ou projetos customizados, recomendamos sempre "Falar com um especialista" para obter condições e suporte exclusivos.</p>
                <p>A "Enterprise Edition" dos nossos smartphones inclui licenças Knox e atualizações de segurança estendidas, ideal para o ambiente corporativo.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-secondary/50 pt-16 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Portfólio Samsung para Empresas
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80 lg:mx-0">
              Inovação e tecnologia para impulsionar o seu negócio. Descubra nossas soluções completas.
            </p>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Button asChild size="lg">
                <Link href="#produtos">Ver produtos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#comprar">Como comprar</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="https://placehold.co/600x400.png"
              alt="Banner de produtos Samsung para empresas"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-2xl"
              data-ai-hint="business technology"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

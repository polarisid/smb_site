"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { app as firebaseApp } from '@/lib/firebase';
import { ProductCard } from './product-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { seedProducts } from '@/data/products';
import { Skeleton } from '@/components/ui/skeleton';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'mobility', name: 'Mobilidade' },
  { id: 'displays', name: 'Displays' },
  { id: 'hvac', name: 'Climatização' },
  { id: 'services', name: 'Serviços' },
];

export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('active', '==', true));
        const productSnapshot = await getDocs(q);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));

        if (productList.length > 0) {
          setProducts(productList);
        } else {
          setProducts(seedProducts);
        }
      } catch (error) {
        console.error("Error fetching products from Firestore:", error);
        setProducts(seedProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => activeCategory === 'all' || product.category === activeCategory)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [products, activeCategory, searchTerm]);

  return (
    <section id="produtos" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="font-headline text-3xl font-extrabold text-primary sm:text-4xl">Nossos Produtos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Conheça nossas soluções inovadoras projetadas para o ambiente corporativo.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="relative w-full md:max-w-xs">
              <Input
                type="search"
                placeholder="Buscar por nome..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[225px] w-full rounded-2xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">Nenhum produto encontrado.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

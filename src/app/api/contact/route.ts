import { NextResponse } from 'next/server';
import { z } from 'zod';
import admin from '@/lib/firebase-admin';

const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  subject: z.string().min(1, 'Assunto é obrigatório'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { name, email, phone, subject } = parsed.data;

    const db = admin.firestore();
    await db.collection('contacts').add({
      name,
      email,
      phone,
      subject,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'new',
    });

    return NextResponse.json({ ok: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json({ error: 'Ocorreu um erro ao enviar a mensagem.' }, { status: 500 });
  }
}

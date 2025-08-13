export interface Product {
  id: string;
  name: string;
  category: 'mobility' | 'displays' | 'hvac' | 'services';
  bullets: string[];
  specs: string;
  active: boolean;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  createdAt: any; // Firestore Timestamp
  status: 'new' | 'read' | 'answered';
}

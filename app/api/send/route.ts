import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'FULLTime eCommerce <website@fulltime-ecommerce.de>',
      to: ['kontakt@fulltime-ecommerce.de'],
      subject: 'Hello world',
      text: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
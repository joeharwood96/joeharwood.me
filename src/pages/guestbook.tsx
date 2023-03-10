import Layout from '../components/Layout';
import Guestbook from '../components/Guestbook';
import { prisma } from '../server/db';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function GuestbookPage({ fallbackData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Leave a comment below. It could be anything – appreciation,
          information, wisdom, or even humor. Surprise me!
        </p>
        <Guestbook fallbackData={fallbackData}/>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: 'desc'
      }
    });
  
    const fallbackData = entries.map((entry) => ({
      id: entry.id.toString(),
      body: entry.body,
      created_by: entry.created_by.toString(),
      updated_at: entry.updated_at.toString()
    }));
  
    return {
      props: {
        fallbackData
      },
      revalidate: 60
    };
  }
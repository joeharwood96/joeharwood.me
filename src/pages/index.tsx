import { type NextPage } from "next";
import Layout from "../components/Layout";
import Subscribe from "../components/Subscribe";
import Image from 'next/image';
import ProfilePic from "../content/Images/me.jpeg"
import Repos from "../components/Repos";

const Home: NextPage = () => {

  return (
    <Layout >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Joe Harwood
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Front End Software Engineer II at{' '}
              <span className="font-semibold">Booking.com</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Passionate about web
              development, serverless, and React / Next.js.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Joe Harwood"
              height={150}
              width={150}
              src={ProfilePic}
              sizes="30vw"
              priority
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <Repos />
        <span className="h-8" />
        <Subscribe />
      </div>
    </Layout>
  );
};

export default Home;

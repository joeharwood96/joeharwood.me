import { useState, useRef } from 'react';
import useSWR from 'swr';

import fetcher from '../utils/fetcher';
import type { FormState, Subscribers } from '../types/Forms';
import { Form } from '../types/Forms';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const [email, setEmail] = useState<string>('')
  const subscriberCount = new Number(data?.count);

  const subscribe = async (e: any) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch(`/api/subscribe?email=${email}`, {
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`
    });
  };

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-zinc-800">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message || ''}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message || ''}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
          <a
            href="https://www.getrevue.co/profile/leerob"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all issues
          </a>
        </p>
      )}
    </div>
  );
}
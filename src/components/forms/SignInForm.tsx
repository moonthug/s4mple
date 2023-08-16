'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';


export default function SignInForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={ (e) => {
        e.preventDefault();
        setLoading(true);
        signIn('credentials', {
          redirect: false,
          email: e.currentTarget.email.value,
          password: e.currentTarget.password.value,
          // @ts-ignore
        }).then(({ error }) => {
          if (error) {
            setLoading(false);
            toast.error(error);
          } else {
            router.refresh();
            router.push('/');
          }
        });
      } }
    >
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Your email"
          />
        </div>
        <TextInput
          id="email"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
            value="Your password"
          />
        </div>
        <TextInput
          id="password"
          required
          type="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember"/>
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

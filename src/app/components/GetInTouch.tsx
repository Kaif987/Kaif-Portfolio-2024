'use client'

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, ValidationError } from '@formspree/react';

export default function GetInTouch() {
  const [state, handleSubmit] = useForm("xwpeewej");

  return (
    <div className="flex justify-center items-center px-4 pt-8 min-h-screen">
      <div className='flex flex-col items-center max-w-4xl w-full'>
        <div>
          <span className='text-2xl'>What&apos;s next ?</span>
        </div>
        <div>
          <h1 className='text-4xl md:text-6xl font-bold py-6 dark:text-slate-300'>Get In Touch</h1>
        </div>
        <div className='dark:text-slate-400'>
          <p>Got a question or proposal, or just want to say Hello? Go Ahead</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-16 gap-3 w-full max-w-3xl'>
          <div className='flex flex-col items-center gap-8 sm:flex-row w-full'>
            <div className='flex flex-col gap-3 w-full md:w-1/2'>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="name"
                name="name"
                placeholder='Enter your name'
              />
            </div>
            <div className='flex flex-col gap-3 w-full md:w-1/2'>
              <Label htmlFor="email">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder='Enter your email'
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className='w-full'>
            <Label htmlFor="" className='self-start'>
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder='Hi, I think we need a design system for our products at company X. How soon can you hop on to disuss this?'
              className='mt-3'
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button type="submit" disabled={state.submitting} className='w-1/3 mt-8'>
            Submit
          </Button>
          {state.succeeded && <p>Thanks for joining!</p>}
        </form>
      </div>
    </div>
  )
}
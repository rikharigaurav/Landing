/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eoLwzuNhK8p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Github, GitlabIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

export default function Component() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='fixed top-0 left-0 right-0 z-10 bg-background px-4 py-3 shadow-sm sm:px-6 md:px-8'>
        <div className='container mx-auto flex items-center justify-between'>
          <Link
            href='#'
            className='text-lg font-semibold text-foreground'
            prefetch={false}
          >
            Portfolio
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='/'>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='/projects'>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='/blog'>Blog</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='/contact'>Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className='flex-1 mt-16'>
        <section className='bg-background py-12 sm:py-16 md:py-20'>
          <div className='container mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 md:px-8'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-bold text-foreground sm:text-4xl md:text-5xl'>
                Welcome to My Portfolio
              </h1>
              <p className='text-muted-foreground'>
                Hi, I'm John Doe, a passionate web developer with a keen eye for
                design. I specialize in creating modern, responsive websites
                that deliver exceptional user experiences.
              </p>
              <div className='flex gap-4'>
                <Link
                  href='#'
                  className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  prefetch={false}
                >
                  View Projects
                </Link>
                <Link
                  href='#'
                  className='inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className='overflow-hidden rounded-lg'>
              <img
                src='/placeholder.svg'
                width={800}
                height={600}
                alt='Hero Image'
                className='h-full w-full object-cover'
                style={{ aspectRatio: '800/600', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
        <section className='bg-muted py-12 sm:py-16 md:py-20'>
          <div className='container mx-auto px-4 sm:px-6 md:px-8'>
            <h2 className='mb-8 text-2xl font-bold text-foreground sm:text-3xl'>
              Featured Projects
            </h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
              <Link
                href='#'
                className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'
                prefetch={false}
              >
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Project 1'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Project 1
                  </h3>
                  <p className='text-muted-foreground'>
                    A brief description of the project.
                  </p>
                </div>
              </Link>
              <Link
                href='#'
                className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'
                prefetch={false}
              >
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Project 2'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Project 2
                  </h3>
                  <p className='text-muted-foreground'>
                    A brief description of the project.
                  </p>
                </div>
              </Link>
              <Link
                href='#'
                className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'
                prefetch={false}
              >
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Project 3'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Project 3
                  </h3>
                  <p className='text-muted-foreground'>
                    A brief description of the project.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className='bg-background py-12 sm:py-16 md:py-20'>
          <div className='container mx-auto px-4 sm:px-6 md:px-8'>
            <h2 className='mb-8 text-2xl font-bold text-foreground sm:text-3xl'>
              Latest Blog Posts
            </h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
              <Link
                href='#'
                className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'
                prefetch={false}
              >
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Blog Post 1'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Blog Post 1
                  </h3>
                  <p className='text-muted-foreground'>
                    A brief description of the blog post.
                  </p>
                </div>
              </Link>
              <Link
                href='#'
                className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'
                prefetch={false}
              >
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Blog Post 2'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Blog Post 2
                  </h3>
                  <p className='text-muted-foreground'>
                    A brief description of the blog post.
                  </p>
                </div>
              </Link>
              <Link
                href='#'
                className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'
                prefetch={false}
              >
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Blog Post 3'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Blog Post 3
                  </h3>
                  <p className='text-muted-foreground'>
                    A brief description of the blog post.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className='bg-muted py-12 sm:py-16 md:py-20'>
          <div className='container mx-auto px-4 sm:px-6 md:px-8'>
            <h2 className='mb-8 text-2xl font-bold text-foreground sm:text-3xl'>
              Certificates
            </h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
              <div className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'>
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Certificate 1'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Certificate 1
                  </h3>
                  <p className='text-muted-foreground'>
                    Description of Certificate 1
                  </p>
                </div>
              </div>
              <div className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'>
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Certificate 2'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Certificate 2
                  </h3>
                  <p className='text-muted-foreground'>
                    Description of Certificate 2
                  </p>
                </div>
              </div>
              <div className='group block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md'>
                <img
                  src='/placeholder.svg'
                  width={400}
                  height={300}
                  alt='Certificate 3'
                  className='h-48 w-full object-cover transition-all group-hover:scale-105'
                  style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-foreground'>
                    Certificate 3
                  </h3>
                  <p className='text-muted-foreground'>
                    Description of Certificate 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-muted py-12 sm:py-16 md:py-20'>
          <div className='container mx-auto px-4 sm:px-6 md:px-8'>
            <h2 className='mb-8 text-2xl font-bold text-foreground sm:text-3xl'>
              Get in Touch
            </h2>
            <form className='mx-auto max-w-md space-y-4'>
              <Input type='text' placeholder='Name' className='w-full' />
              <Input type='email' placeholder='Email' className='w-full' />
              <Textarea placeholder='Message' className='w-full' />
              <Button type='submit' className='w-full'>
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className='bg-background px-4 py-6 shadow-sm sm:px-6 md:px-8'>
        <div className='container mx-auto flex items-center justify-between'>
          <p className='text-sm text-muted-foreground'>
            &copy; 2024 John Doe. All rights reserved.
          </p>
          <div className='flex items-center space-x-4'>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
              prefetch={false}
            >
              <TwitterIcon className='h-5 w-5' />
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
              prefetch={false}
            >
              <LinkedinIcon className='h-5 w-5' />
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground'
              prefetch={false}
            >
              <Github className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}






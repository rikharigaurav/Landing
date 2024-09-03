"use client"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import { FloatingNav } from '@/components/ui/floating-navbar'
// import { LogIn } from 'lucide-react'

import { BackgroundBeams } from "@/components/ui/background-beams"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { Compare } from "@/components/ui/compare"
import Image from "next/image";

export default function Home() {
  const navItems = [
    {
      name: 'Sign Up',
      link: '/',
      // icon: <LogIn className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
  ]
  return (
    <main className='min-w-full min-h-full bg-black absolute align-middle'>
      {/* <BackgroundBeamsWithCollision  className="p-2 rounded-md"> */}
      <div>
        <BackgroundBeams />
        <h2 className='text-2xl z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight flex p-3 align-middle justify-center items-center m-4'>
          Learn with Personalized Tech
        </h2>
      </div>
      {/* </BackgroundBeamsWithCollision> */}
      <div className='min-w-100% flex'>
        <CardContainer className='inter-var justify-start p-10 items-center min-w-50%'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-50% sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white min-w-50%'
            >
              One Platform, Endless Possibilities
            </CardItem>
            <CardItem
              translateZ='100'
              rotateX={20}
              rotateZ={-10}
              className='w-full mt-4'
            >
              <Image
                src='/Screenshot 2024-09-03 064042.png'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className='border p-4 text-white rounded-lg'>
          Why juggle multiple apps when you can have it all in one place? Our
          software unifies chat, meetings, cloud storage, calendar, and canvas
          into a single, powerful classroom management hub.
        </div>
      </div>
      <div className='min-w-100% flex'>
        <CardContainer className='inter-var justify-end p-10 items-center'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border justify-end '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Seamless Vector Store Integration
            </CardItem>
            <CardItem
              translateZ='100'
              rotateX={20}
              rotateZ={-10}
              className='w-full mt-4'
            >
              <Image
                src='/Screenshot 2024-09-03 054127.png'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className='border p-4 text-white rounded-lg'>
          Our advanced vector store securely organizes all your canvas, meeting
          notes, and documents, making them instantly accessible and actionable.
        </div>
      </div>
      <div className='min-w-100% flex'>
        <CardContainer className='inter-var justify-start p-10 items-center'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Automated Scheduling with Intelligence
            </CardItem>
            <CardItem
              translateZ='100'
              rotateX={20}
              rotateZ={-10}
              className='w-full mt-4'
            >
              <Image
                src='/Screenshot 2024-09-03 054127.png'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className='border p-4 text-white rounded-lg'>
          Our platform’s smart calendar automatically schedules meetings,
          quizzes, and assignments based on course content and student needs
        </div>
      </div>
      <div className='min-w-100% flex'>
        <CardContainer className='inter-var justify-start p-10 items-center'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Intelligent Access to All Resources
            </CardItem>
            <CardItem
              translateZ='100'
              rotateX={20}
              rotateZ={-10}
              className='w-full mt-4'
            >
              <Image
                src='/Screenshot 2024-09-03 054127.png'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className='border p-4 text-white rounded-lg'>
          Our integrated chatbot provides personalized and immediate access to
          every document, note, and meeting stored in the vector space, ensuring
          you always find what you need.
        </div>
      </div>
      <div className='min-w-100% flex'>
        <CardContainer className='inter-var justify-start p-10 items-center'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Transforming Data into Knowledge
            </CardItem>
            <CardItem
              translateZ='100'
              rotateX={20}
              rotateZ={-10}
              className='w-full mt-4'
            >
              <Image
                src='/Screenshot 2024-09-03 054127.png'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className='border p-4 text-white rounded-lg'>
          Our software doesn't just store information; it leverages AI to
          analyze and create a knowledge graph, helping track student progress
          and highlighting areas for improvement.
        </div>
        <div className='min-w-100% flex'>
          <CardContainer className='inter-var justify-start p-10 items-center'>
            <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'
              >
                Data Versioning for Canvas
              </CardItem>
              <CardItem
                translateZ='100'
                rotateX={20}
                rotateZ={-10}
                className='w-full mt-4'
              >
                <Image
                  src='/Screenshot 2024-09-03 054127.png'
                  height='1000'
                  width='1000'
                  className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <div className='border p-4 text-white rounded-lg'>
            With built-in data versioning, easily revert to previous states of
            your canvas boards, ensuring that no idea or piece of information is
            ever lost.
          </div>
        </div>
      </div>
    </main>
  )
}

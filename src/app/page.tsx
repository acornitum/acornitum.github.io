import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen px-[10vw] py-0">
        <div className="w-[50vw] flex flex-col justify-center">

          <div className="text-[30px]">
            <p>hi! i'm acon :D </p>
            
          </div>
          

          <div className="mt-4">
            <p>welcome to my corner of the webs!</p>
            <p>I'm a high school student from Waterloo, Ontario.</p>

            <div className="mt-4">
              <p>Some things about me:</p>
            </div>

            
          </div>

          <div className="mt-4 ml-4">
            <p>-> I code! Or, try to, at least. Check out my (probably empty) <a href="https://github.com/acornitum" className="text-[rgb(245,126,126)]">GitHub</a></p>
            <p>-> Sometimes I dabble in art</p>
            <p>-> I like yapping - wait, sorry, I mean debating (BP best format)</p>
            <p>-> I'm a trading card game enthusiast - I play Magic the Gathering!</p>
            <p>-> This spring, I organized <a href="https://apocalypse.hackclub.com/" className="text-[rgb(245,126,126)]">Apocalypse</a>, a 44h hackathon for 150 teens!</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>


        </div>

        <div className="">



        </div>


        


      </div>
    </main>
  );
}

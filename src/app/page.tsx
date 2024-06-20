import Link from "next/link";

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'


const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
    >
      <section>
        <BlogList/>
      </section>
    </Layout>
  )
}


export default function Home() {
  return (
    <main>
      <div className="landing">
        <div className="landing-left">

          <div className="text-[30px]">
            <p>hi! i'm acon :D </p>
            
          </div>
          

          <div className="mt-4">
            <p>Welcome to my corner of the webs!</p>
            <p>I'm a high school student from Waterloo, Ontario.</p>

            <div className="mt-4">
              <p>Some things about me:</p>
            </div>
            
          </div>

          <div className="mt-4 ml-4">
            <p>🡢 I code! Or, try to, at least. Check out my (probably empty) <a href="https://github.com/acornitum" className="text-[rgb(245,126,126)]">GitHub</a></p>
            <p>🡢 Sometimes I dabble in art</p>
            <p>🡢 I like yapping - wait, sorry, I mean debating (BP best format)</p>
            <p>🡢 I'm a trading card game enthusiast - I play Magic the Gathering!</p>
            <p>🡢 This spring, I organized <a href="https://apocalypse.hackclub.com/" className="text-[rgb(245,126,126)]">Apocalypse</a>, a 44h hackathon for 150 teens!</p>
          </div>

          <div className="mt-4"> 
            <p>Blog coming soon :D</p>
          </div>

          <div className="mt-4 text-xs">
            <p>Want to connect? Send me a message at <a href="mailto:acon@hackclub.com" className="text-[rgb(245,126,126)]">acon@hackclub.com</a>!</p>
          </div>

        </div>

        <div className="landing-right">
          
        </div>

      </div>


      <div className="bg-[#232323] pt-20 pb-10 grid items-center justify-center text-center">
        <p className="text-2xl">blog</p>
        <p className="mt-2">under construction</p>
      </div>
      

      <div className="blog bg-[#232323] flex items-center flex-wrap flex-row justify-center pb-5 px-[10vw] py-0;">

        <div className="post h-[400px] w-[300px] border-[color:white] border-[length:2px] rounded-[5px] m-3"><ul><li><Link href="/blog"> 

          <div className="post-image h-[200px] w-full bg-[#333333] rounded-t-[5px]"></div>
          <div className="post-content p-4">
            <p className="text-[rgb(245,126,126)] pb-2">my hackathon ux design philosophy</p>
            <p className="text-[color:white] text-xs pb-6">or, ramblings on why i bother with designing hacker interactivity</p>
            <p className="text-[color:white] text-xs">coming soon!</p>
          </div>

        </Link></li></ul></div>
        
      </div>

      <div className="bg-[#232323] flex justify-center text-xs pb-5 pt-20">
        <p><a href="https://github.com/acornitum/site-v2" className="text-[rgb(245,126,126)]">made by acon © 2024</a></p>
      </div>



    </main>
  );
}

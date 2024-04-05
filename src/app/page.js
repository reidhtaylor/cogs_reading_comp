// Import
import Link from 'next/link';
import Image from 'next/image'

const Home = () => {
  return (
    <main className="flex h-full flex-col items-center justify-between pb-24 pt-14">
      <div className="z-10 w-11/12 items-center justify-between text-center font-mono text-white text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
          Reading Comprehension
        </p>
      </div>

      <div className='flex flex-row w-full'>
        <div className='h-screen w-3/4 p-16 space-y-10'>
        </div>

        <text className="my-10 text-white font-light leading-8 tracking-wider">
          The rusty swing set creaked as Maya pushed herself back and forth, her worn red sneakers barely skimming the dusty ground. The park was deserted, a stark contrast to the usual cacophony of children&apos;s laughter that filled the air after school. Today, a thick blanket of disappointment hung heavy after her best friend, Liam, had to cancel their planned fort-building adventure due to a sudden illness.
          <br></br>
          <br></br>
          Lost in a world of daydreams, Maya didn&apos;t notice the ginger blur dart across the periphery of her vision. It zipped again, closer this time, its bushy tail a flickering orange flag. Intrigued, Maya stopped swinging. There, perched on a nearby bench, sat a small fox. Its fur, the color of autumn leaves, shimmered in the fading sunlight.
          <br></br>
          <br></br>
          The fox cocked its head, its eyes glinting like polished amber. Unlike the wild foxes Maya had seen only in pictures, this one seemed unafraid. It tilted its head further at the crustless peanut butter and jelly sandwich Maya held in her hand, a leftover from lunch. Tentatively, Maya extended the sandwich towards the fox. To her surprise, it snatched the offering with a delicate nip, leaving only a few crumbs behind.
          <br></br>
          <br></br>
          Emboldened, Maya rummaged through her backpack, pulling out a crumpled granola bar. The fox devoured that too, its movements quick and precise. Maya spent the rest of the afternoon regaling the unlikely visitor with tales of her adventures with Liam, her voice filling the silent park. The fox, in turn, seemed to listen intently, occasionally tilting its head in apparent understanding.
          <br></br>
          <br></br>
          As the last rays of the sun dipped below the horizon, painting the sky in hues of orange and purple, Maya realized it was getting late. With a heavy heart, she rose to leave. The fox, as if sensing her departure, let out a small whine. On a whim, Maya reached out and gently scratched behind its ear. The fur was surprisingly soft, and the fox leaned into her touch, letting out a contented sigh.
          <br></br>
          <br></br>
          &lsquo;I&apos;ll come back tomorrow,&rsquo; Maya promised, a genuine smile lighting up her face. The fox blinked, then disappeared as quickly as it had come, leaving only a rustle in the bushes in its wake. The park felt less lonely suddenly, as if a new kind of friendship had bloomed amidst the swings and slides.
        </text>

        <div className='h-screen w-3/4 p-16 space-y-10'>
        </div>
      </div>

      {/* Complete Button */}
      <div className="rounded-lg border border-transparent border-white border-opacity-20 px-20 py-5 text-center transition-all hover:border-2 hover:border-opacity-25 active:border">
        <Link href="/ads/survey" className="group" target="_blank" rel="noopener noreferrer" >
          <h2 className={`text-2x1 mb-1 text-white font-semibold`}>Complete</h2>
          <p className={`text-sm text-white opacity-50`}>Finish reading and complete a short survey</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;

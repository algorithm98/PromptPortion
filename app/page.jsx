import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Prompts used by AI.</span>
    </h1>
    <p className='desc text-center'>
      Prompt Portion is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts for unbeleavable results.
    </p>

    <Feed />
  </section>
);

export default Home;

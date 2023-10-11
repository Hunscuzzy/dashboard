import Main from "@/components/layout/Main";
import data from "@/data/homepage.json";

const Home: React.FC = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col'>
      <header className='bg-blue-600 text-white p-6 rounded'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </header>

      <Main>
        <section className='my-16 text-center'>
          <h2 className='text-blue-700 text-xl font-semibold'>
            Discover Exceptional Financial Tracking
          </h2>
          <p className='text-gray-700'>
            Tailored solutions for your professional and personal needs.
          </p>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {data.advantages.map((advantage, i) => (
            <div
              key={i}
              className='bg-white p-6 rounded border border-gray-300'
            >
              <h3 className='text-lg font-semibold text-blue-700'>
                {advantage.title}
              </h3>
              <p className='text-gray-700'>{advantage.paragraph}</p>
            </div>
          ))}
        </section>
      </Main>

      <footer className='bg-blue-600 text-white p-6 rounded mt-auto'>
        <p>© 2023, Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

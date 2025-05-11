import FlightSearch from '../components/FlightSearch';

export default function Home() {
  return (
    <>
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-blue-600">AirMatch</h1>
        </div>
      </nav>
      
      <main className="flex flex-col items-center justify-center min-h-[80vh] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-center mt-10 mb-8">Search affordable flights...</h2>
          <FlightSearch />
        </div>
      </main>
    </>
  );
}

'use client';

import { useState } from 'react';

// Mock data for flight results
const mockFlights = [
  {
    id: '1',
    airline: 'Delta Airlines',
    flightNumber: 'DL1234',
    departureTime: '08:30',
    arrivalTime: '11:45',
    duration: '3h 15m',
    price: 299,
    stops: 0,
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
  },
  {
    id: '2',
    airline: 'United Airlines',
    flightNumber: 'UA5678',
    departureTime: '10:15',
    arrivalTime: '14:20',
    duration: '4h 05m',
    price: 329,
    stops: 1,
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
  },
  {
    id: '3',
    airline: 'American Airlines',
    flightNumber: 'AA9012',
    departureTime: '12:45',
    arrivalTime: '16:30',
    duration: '3h 45m',
    price: 279,
    stops: 0,
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
  },
  {
    id: '4',
    airline: 'JetBlue',
    flightNumber: 'B6345',
    departureTime: '14:20',
    arrivalTime: '18:15',
    duration: '3h 55m',
    price: 259,
    stops: 0,
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
  },
  {
    id: '5',
    airline: 'Southwest',
    flightNumber: 'WN678',
    departureTime: '16:30',
    arrivalTime: '21:45',
    duration: '5h 15m',
    price: 199,
    stops: 1,
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
  },
  {
    id: '6',
    airline: 'Alaska Airlines',
    flightNumber: 'AS789',
    departureTime: '18:15',
    arrivalTime: '22:10',
    duration: '3h 55m',
    price: 349,
    stops: 0,
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
  },
  {
    id: '7',
    airline: 'Spirit Airlines',
    flightNumber: 'NK123',
    departureTime: '07:45',
    arrivalTime: '12:35',
    duration: '4h 50m',
    price: 159,
    stops: 1,
    departureAirport: 'JFK',
    arrivalAirport: 'LAX',
  },
];

// Mock airlines for filters
const airlines = [
  'Delta Airlines',
  'United Airlines',
  'American Airlines',
  'JetBlue',
  'Southwest',
  'Alaska Airlines',
  'Spirit Airlines',
];

interface FilterState {
  stops: {
    nonstop: boolean;
    oneStop: boolean;
    multiStop: boolean;
  };
  selectedAirlines: Record<string, boolean>;
  priceRange: [number, number];
}

interface DateModifiers {
  departureDate: string;
  returnDate: string;
}

export default function SearchPage() {
  // State for filters
  const [filters, setFilters] = useState<FilterState>({
    stops: {
      nonstop: false,
      oneStop: false,
      multiStop: false,
    },
    selectedAirlines: {},
    priceRange: [0, 1000],
  });
  // State for date modifiers
  const [dateModifiers, setDateModifiers] = useState<DateModifiers>({
    departureDate: '',
    returnDate: '',
  });
  // Handle stop filter changes
  const handleStopFilterChange = (stopType: 'nonstop' | 'oneStop' | 'multiStop') => {
    setFilters({
      ...filters,
      stops: {
        ...filters.stops,
        [stopType]: !filters.stops[stopType],
      },
    });
  };

  // Handle airline filter changes
  const handleAirlineFilterChange = (airline: string) => {
    setFilters({
      ...filters,
      selectedAirlines: {
        ...filters.selectedAirlines,
        [airline]: !filters.selectedAirlines[airline],
      },
    });
  };

  // Handle date changes
  const handleDateChange = (type: 'departureDate' | 'returnDate', value: string) => {
    setDateModifiers({
      ...dateModifiers,
      [type]: value,
    });
  };

  // Handle search update
  const handleUpdateSearch = () => {
    console.log('Updating search with:', { filters, dateModifiers });
    // This would typically trigger a new search with the updated parameters
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-blue-600">SkyScanner Clone</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Flight Search Results</h1>
        
        {/* Three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Left Column - Filters */}
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            
            {/* Stops Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Stops</h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.stops.nonstop}
                    onChange={() => handleStopFilterChange('nonstop')}
                    className="rounded text-blue-500 focus:ring-blue-500 mr-2" 
                  />
                  <span>Non-stop</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.stops.oneStop}
                    onChange={() => handleStopFilterChange('oneStop')}
                    className="rounded text-blue-500 focus:ring-blue-500 mr-2" 
                  />
                  <span>1 Stop</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.stops.multiStop}
                    onChange={() => handleStopFilterChange('multiStop')}
                    className="rounded text-blue-500 focus:ring-blue-500 mr-2" 
                  />
                  <span>2+ Stops</span>
                </label>
              </div>
            </div>
            
            {/* Airlines Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Airlines</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {airlines.map((airline) => (
                  <label key={airline} className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={filters.selectedAirlines[airline] || false}
                      onChange={() => handleAirlineFilterChange(airline)}
                      className="rounded text-blue-500 focus:ring-blue-500 mr-2" 
                    />
                    <span>{airline}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Price Range (Placeholder) */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
              <div className="px-2">
                <div className="bg-blue-100 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Column - Flight Results */}
          <div className="md:col-span-2">
            <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
              {mockFlights.map((flight) => (
                <div 
                  key={flight.id} 
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="font-medium text-lg">{flight.airline}</span>
                      <span className="text-gray-500 ml-2 text-sm">#{flight.flightNumber}</span>
                    </div>
                    <div className="text-xl font-bold text-blue-600">${flight.price}</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="text-2xl font-semibold">{flight.departureTime}</div>
                      <div className="text-sm text-gray-500">{flight.departureAirport}</div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <div className="text-xs text-gray-500">{flight.duration}</div>
                      <div className="relative">
                        <div className="border-t-2 border-gray-300 my-2"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {flight.stops === 0 ? 'Non-stop' : flight.stops === 1 ? '1 Stop' : `${flight.stops} Stops`}
                      </div>
                    </div>
                    
                    <div className="flex-1 text-right">
                      <div className="text-2xl font-semibold">{flight.arrivalTime}</div>
                      <div className="text-sm text-gray-500">{flight.arrivalAirport}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-right">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm">
                      Select this flight
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Date Modifiers */}
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-4">Modify Search</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Departure Date
                </label>
                <input 
                  id="departureDate"
                  type="date"
                  value={dateModifiers.departureDate}
                  onChange={(e) => handleDateChange('departureDate', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Return Date
                </label>
                <input 
                  id="returnDate"
                  type="date"
                  value={dateModifiers.returnDate}
                  onChange={(e) => handleDateChange('returnDate', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button 
                onClick={handleUpdateSearch}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-4"
              >
                Update Search
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

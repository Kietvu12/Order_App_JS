import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h2 className="mt-6 text-6xl font-extrabold text-green-700">404</h2>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Oops! Page Not Found
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        It seems we can't find the page you're looking for.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-64 h-64">
                        {/* Plate */}
                        <div className="absolute inset-0 bg-white rounded-full shadow-lg"></div>

                        {/* Tomato */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-500 rounded-full"></div>

                        {/* Sad face */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
                            <div className="text-white text-2xl font-bold">:(</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Go Back to Homepage
                    </Link>
                </div>

                <div className="mt-6">
                    <p className="text-sm text-gray-600">
                        Looking for our menu? Check out our{' '}
                        <Link to="/menu" className="font-medium text-green-600 hover:text-green-500">
                            delicious vegetarian dishes
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound404;


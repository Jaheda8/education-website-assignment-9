import React from 'react';
import notfound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <div>
            <section class="px-4 py-24 mx-auto max-w-7xl">
  <div class="w-full mx-auto text-center lg:w-2/3">
    <h1 class="mb-4 text-6xl font-thin text-gray-900">404</h1>
    <p class="mb-3 text-xl font-bold text-gray-900 md:text-2xl">Oh no! We couldn’t find the page you were looking for.</p>
    <p class="mb-3 text-lg font-medium text-gray-700">
      Have questions? Head over to our
      <a href="#" class="underline">product documentation</a>, visit our <a href="#" class="underline">Community</a> for tutorials and the latest happenings, or go back to the
      <a href="#" class="underline">homepage</a>
    </p>
  </div>
</section>

        </div>
    );
};

export default NotFound;
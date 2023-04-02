import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import Maps from "@/components/Maps";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

function Search({ searchResults }) {
  const router = useRouter();

  //ES6 object destructuring
  const { location, startDate, endDate, guestNumber } = router.query;
  const formatStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formatEndtDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formatStartDate} - ${formatEndtDate}`;

  return (
    <div>
      <Header placeholder={`${location}  ${range}  ${guestNumber}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays from {range} for {guestNumber} Guests
          </p>
          <h1 className="text-xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => {
                return (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                );
              }
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] cursor-pointer">
          <Maps searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}

//mapbox://styles/crypton07/clfwpgf9w019x01pek5pliqdp

//pk.eyJ1IjoiY3J5cHRvbjA3IiwiYSI6ImNsZndwNTh6MTBqamczY3M2cGZjZDI3cjIifQ.3TUS4M1l8vSB2LEB2UzZVA

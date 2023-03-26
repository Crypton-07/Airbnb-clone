import Header from "../components/Header";
import Head from "next/head";
import Baner from "@/components/Baner";
import exploreList from "../config";
import SmallCard from "@/components/SmallCard";
import MiddleCard from "@/components/MiddleCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {header} */}
      <Header />

      {/* {banner} */}
      <Baner />
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section>
          <h1 className="text-4xl font-semibold pb-5 mt-4">
            Explore Airbnb now!
          </h1>
          {/* pull some data from server - API endpoints */}

          {/* Destructuring */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreList?.map(({ id, imgURL, location, distance, price }) => (
              <SmallCard
                key={id}
                img={imgURL}
                location={location}
                distance={distance}
                price={price}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold pb-5 mt-4">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scroll-smooth scrollbar-hide p-3 -ml-3 ">
            {exploreList.map(({ id, imgURL, location, distance, price }) => {
              return (
                <MiddleCard
                  key={id}
                  img={imgURL}
                  location={location}
                  distance={distance}
                  price={price}
                />
              );
            })}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// export async function getServerSideProps() {
//   const exploreData = await fetch("../config.js").then((res) => res.json());
//   return {
//     props: {
//       exploreData,
//     },
//   };
// }

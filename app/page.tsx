import Image from "next/image";
import { Hero, SearchBar, BookCard } from '@/components';
import { Books } from "@/data";

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-16 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Popular Books</h1>
          <p>Explore books that other readers are enjoying.</p>
        </div>
        <section>
          <div className="home__cars-wrapper">
            {Books.map((book) => (
              <BookCard book={book} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

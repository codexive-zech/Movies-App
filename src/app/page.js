import { Navbar, Movies, MoviesResults } from "./components";

const API_KEY = process.env.API_KEY;

export default function Home() {
  

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/*Fetching List of Movies*/}
      <Movies />
    </>
  );
}

//  {/* Navbar */}
<Navbar />;

import Banner from "@/components/Banner";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

async function fetchMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}movie/now_playing/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  return response.json();
}
export default async function Home() {
  const { results } = await fetchMovies();
  return (
    <main className="min-h-screen text-slate-200">
      <Banner movie={results[1]} />
      <Container />
      <Footer />
    </main>
  );
}

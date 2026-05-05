import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Row from '@/components/Row'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />

      <div className="space-y-8 mt-6">
        <Row title="Trending Now" />
        <Row title="Top Rated" />
        <Row title="Anime" />
      </div>
    </main>
  )
}

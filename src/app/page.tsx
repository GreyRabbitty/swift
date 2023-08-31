import Image from 'next/image'
import Link from 'next/link'
import Header from './layout/Header'
import Body from './layout/Body'
import Footer from './layout/Footer'

export default function Home() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <main className=" bg-white">
      <Header />
      <Body />
      <Footer />
    </main>
  )
}

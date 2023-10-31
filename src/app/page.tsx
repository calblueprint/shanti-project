import { useRouter } from 'next/router'
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import Store from "./pages/Store"
import { About } from "./pages/About"
import Navbar from "../components/cart/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext copy"

function App() {
  const router = useRouter();

  let Component;
  switch (router.pathname) {
    case '/':
      Component = Home;
      break;
    case '/store':
      Component = Store;
      break;
    case '/about':
      Component = About;
      break;
    default:
      Component = Home;
  }

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Component />
      </Container>
    </ShoppingCartProvider>
  )
}

export default App;
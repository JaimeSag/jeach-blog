import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { SubscribeForm } from "./components/SubscribeForm";
import { CategoryPage } from "./pages/CategoryPage";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostPage } from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="relative before:pointer-events-none before:absolute before:inset-0 before:z-20 before:bg-[url(/assets/img/grain.jpg)] before:opacity-20 before:mix-blend-multiply before:content-[''] before:select-none dark:before:opacity-50">
        <NavBar />

        <main className="pt-20 md:pt-40">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:slug" element={<PostPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <section className="from-secondary bg-linear-to-b from-50% to-transparent to-50%">
          <Container>
            <div className="py-38">
              <SubscribeForm />
            </div>
          </Container>
        </section>

        <Footer />

        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./styles/global.css";

function App() {
  return (
    <HashRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header>
          <Nav />
        </Layout.Header>
        <Layout.Content style={{ padding: '24px 24px 48px' }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </HashRouter>
  );
}

export default App;
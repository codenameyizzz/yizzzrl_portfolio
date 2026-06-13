import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';
import { useHashScroll } from './hooks/useHashScroll';
import { usePageEffects } from './hooks/usePageEffects';

export default function App() {
  const location = useLocation();

  useHashScroll(location);
  usePageEffects(location.pathname);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/:slug" element={<BlogPostPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

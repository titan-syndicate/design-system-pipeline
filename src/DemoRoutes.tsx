import { Routes, Route } from 'react-router-dom';
import App from './App';
import { DemoPage } from './DemoPage';

function DemoRoutes() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/demo" element={<DemoPage />} />
    </Routes>
  );
}

export { DemoRoutes };
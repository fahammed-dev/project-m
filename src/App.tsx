import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { PageLayout, ProjectLayout, RootLayout } from './layouts';
import { MobileApp } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<PageLayout />}>
        <Route path="projects" element={<ProjectLayout />}>
          <Route path="mobile" element={<MobileApp />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components';
import { Index, NewTask } from './pages';

const BrowserRouter = createBrowserRouter([
	{
		path: "/",
		element: <Index />
	},
	{
		path: "/task/new",
		element: <NewTask />
	},
	{
		path: "/task/list",
		element: <div className='intro'><h4>List</h4></div>
	},
	{
		path: "/task/view/:id",
		element: <div className='intro'><h4>View</h4></div>
	},
	{
		path: "/task/view/:id/page/:id",
		element: <div className='intro'><h4>View Page</h4></div>
	}
])

function App() {
  return (
    <div className="App">
	    <Header />
	    <RouterProvider router={BrowserRouter} />
    </div>
  );
}

export default App;

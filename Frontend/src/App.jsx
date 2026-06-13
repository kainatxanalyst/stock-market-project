import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <div className="ml-64 w-full">
        <AppRoutes />
      </div>
    </div>
  );
}
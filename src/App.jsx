import Home from "./pages/Home";

export default function App() {
  setTimeout(() => {
    alert("Thank you for visting, I am working on the project right now!");
  }, 10);
  return (
    <div className='font-kanit'>
      <Home />
    </div>
  );
}

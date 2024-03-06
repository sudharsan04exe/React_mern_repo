
import './App.css';
import {Link,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Books from './Books';  
import Form from './form';
import Agecalc from './agecalc';
import Booklist from './Booklist';

import Newbook from './Newbook';  
function App() {
  return (
    <div className="App">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/book">Books</Link></li>  
      <li><Link to="/Form">Form</Link></li>
      <li><Link to="/Agecalc">AgeCalculator</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <route path='book'>
        <route  index element={<Books />} />
        <route path=':id' element={<BookList />} />
        <route path='view' element={<ViewBooks />} />
      </route>
      <Route path="/book" element={<Books />} />
      <Route path="/book/:id" element={<Books />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/agecalc" element={<Agecalc />} />
      <Route path="/book/new" element={<Newbook />} />
      <Route path="*" element={<h1>page Not Found</h1>} />
    </Routes>
    </div>
  );
}
export default App;
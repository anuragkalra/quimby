import './App.scss';
//import RecordsTester from './RecordsTester';
import ChartsTester from './ChartsTester';

import {Foo, Bar} from './utils';

function App() {
  Foo()
  Bar()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Participation App</h1>
      </header>
      <section>
        <ChartsTester />
      </section>
      <section>
        {/* <RecordsTester /> */}
      </section>
    </div>
  );
}

export default App;

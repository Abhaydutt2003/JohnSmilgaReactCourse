import data from './data';

import Questions from './Questions';

//no need to use useState
const App = () => {
  return (
    <main>
      <Questions questions = {data}></Questions>
    </main>
  );
};
export default App;

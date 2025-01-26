import Article from './Article';
import BlogSettingsContext from './BlogSettingsProvider';
import SettingsPanel from './SettingsPanel';

function App() {

  return (
    <>
      <BlogSettingsContext>
        <SettingsPanel/>
        <Article/>
      </BlogSettingsContext>
    </>
  );
}

export default App;

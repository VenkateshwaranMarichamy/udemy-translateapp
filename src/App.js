import React, {useState} from 'react';
import './styles.css';
import Field from './components/field'
import Languages from './components/languages';
import Translate from './components/translate';



function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState();

  return (
    <div>
     <Field onChange={setText} />
     <Languages language={language} onChange={setLanguage} />
     <hr />
     <Translate text={text} language={language} />
    </div>
  );
}

export default App;

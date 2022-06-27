import './App.css';
import BoxView from './components/BoxView';


const data = [

  {
    heading: 'test heading 1',
    icon: 'AccessAlarms',
    list: [{ text: "text1", amount: "1" }, { text: "text2", amount: "2" }, { text: "text3", amount: "3" }]
  },
  {
    heading: 'test heading 2',
    icon: 'AccessAlarms',
    list: [{ text: "text1", amount: "1" }, { text: "text2", amount: "2" }, { text: "text3", amount: "3" }]
  },
  {
    heading: 'test heading 3',
    icon: 'AccessAlarms',
    list: [{ text: "text1", amount: "1" }, { text: "text2", amount: "2" }, { text: "text3", amount: "3" }]
  },
  {
    heading: 'test heading 4',
    icon: 'AccessAlarms',
    list: [{ text: "text1", amount: "1" }, { text: "text2", amount: "2" }, { text: "text3", amount: "3" }]
  },
  {
    heading: 'test heading 5',
    icon: 'AccessAlarms',
    list: [{ text: "text1", amount: "1" }, { text: "text2", amount: "2" }, { text: "text3", amount: "3" }]
  },
];

function App() {
  return (
    <div style={{ display: "flex", background: "lightblue" }}>
      <BoxView data={data} />
    </div>
  );
}

export default App;

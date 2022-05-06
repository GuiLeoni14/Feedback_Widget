import { useEffect, useState } from 'react';
import { Widget } from './components/Widget';
export function Button() {
    return <button className="bg-slate-900 p-2">teste</button>;
}
function App() {
    console.log('teste fora');
    useEffect(() => {
        console.log('teste');
    }, []);
    return (
        <div className="App">
            <Widget />
        </div>
    );
}

export default App;

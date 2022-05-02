import { useEffect, useState } from 'react';
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
            <Button />
        </div>
    );
}

export default App;

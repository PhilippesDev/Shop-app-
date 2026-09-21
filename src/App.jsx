
function MyComponent() {
    return (<div>Hello OpenClassrooms </div>)
}

const MyComponent2 = ({name : firstname}) => {
    return (
    <div>Hello OpenClassrooms 2 {firstname}</div>
  )
}

function App() {
  return (
      <>
        <MyComponent />
        <MyComponent2 name="By philippe mirindi"/>
      </>
  );
}

export default App
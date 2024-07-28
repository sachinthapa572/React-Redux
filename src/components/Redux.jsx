function Redux() {
    const value = 20
  return (
    <>
      <div>
        <h1>Redux</h1>
        <p>
          Redux is a predictable state container designed to help you write JavaScript apps that
          behave consistently across client, server, and native environments and are easy to test. (
          child bata parent ma data sent garna ya child ma state cha tyo lai chai parent ma update
          garna paryo vane use hane garxa)
        </p>

        <p>Store : A place where we kept the state </p>
        <p>action : what we want to do</p>
        <p>reducer : how we want to do ( change the state )</p>
        <p>dispatch : to send the action to the reducer</p>
      </div>

      <br />

      <div>
        <h2>Redux Example</h2>
        <p>Counter Example</p>
        <p>Counter : {value}</p>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </>
  );
}

export default Redux;

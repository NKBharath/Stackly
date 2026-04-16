import Child2 from "./Child2";

function Child1({ data }) {
  return (
    <div className="box">
      <h3>Child 1</h3>
      <Child2 data={data} />
    </div>
  );
}

export default Child1;
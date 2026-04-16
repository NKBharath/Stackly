import Child3 from "./Child3";

function Child2({ data }) {
  return (
    <div className="box">
      <h3>Child 2</h3>
      <Child3 data={data} />
    </div>
  );
}

export default Child2;
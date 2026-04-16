function Child5({ data }) {
  return (
    <div className="box final">
      <h3>Child 5 (Final)</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Role:</strong> {data.role}</p>
      <p><strong>Company:</strong> {data.company}</p>
    </div>
  );
}

export default Child5;
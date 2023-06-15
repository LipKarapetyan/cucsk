const Apranq = ({ hashvark }) => {
    const totalAmount = hashvark.reduce(
      (res, { count, price }) => res + count * price,
      0
    );
  
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {hashvark.map(({ id, name, date, count, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{date}</td>
              <td>{count}</td>
              <td>{price}</td>
              <td>{count * price}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  export default Apranq
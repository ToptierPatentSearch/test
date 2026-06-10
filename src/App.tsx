function App() {
  const today = new Date();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Monthly Calendar</h1>

      <h2>
        {today.getFullYear()} / {today.getMonth() + 1}
      </h2>

      <table
        border={1}
        cellPadding={10}
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={7}>
              Calendar implementation will go here.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
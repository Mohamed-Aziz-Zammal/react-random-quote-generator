import { useState } from "react";
import Axios from "axios";

function App() {
  const [type, setType] = useState("");
  const [quote, setQuote] = useState(""); // حالة لتخزين الاقتباس

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://127.0.0.1:5000/quote", {
      type
    });
    setQuote(response.data.quote); // تحديث الاقتباس بالبيانات المسترجعة
  };

  return (
    <>
      <h1>Random Quote</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="quote_type">Choose a quote type:</label>
        <select
          name="quote_type"
          id="quote_type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="science">Science</option>
          <option value="life">Life</option>
          <option value="love">Love</option>
        </select>
        <button type="submit">Get Quote</button>
      </form>
      {/* عرض الاقتباس إذا تم استرجاعه */}
      {quote && (
        <div>
          <h2>Quote:</h2>
          <p>{quote}</p>
        </div>
      )}
    </>
  );
}

export default App;

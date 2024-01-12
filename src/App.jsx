import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onChange={(currency) => setAmount(amount)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md font-semibold bg-red-500 hover:bg-red-400 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectedCurrency={to}
                amountDisable
                onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-extrabold hover:bg-blue-800"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;


//**below is gpts styling****************** */
// import { useState } from "react";
// import "./App.css";
// import Input from "./components/input";
// import useCurrencyInfo from "./hooks/useCurrencyInfo";

// function App() {
//   const [amount, setAmount] = useState();
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState();

//   const currencyInfo = useCurrencyInfo(from);

//   const options = Object.keys(currencyInfo);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to]);
//   };

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
//       }}
//     >
//       <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/30">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             convert();
//           }}
//         >
//           <div className="w-full mb-4">
//             <Input
//               label="From"
//               amount={amount}
//               currencyOptions={options}
//               onChange={(currency) => setAmount(amount)}
//               selectedCurrency={from}
//               onAmountChange={(amount) => setAmount(amount)}
//               onCurrencyChange={(currency) => setFrom(currency)}
//             />
//           </div>
//           <div className="relative w-full h-0.5 mb-4">
//             <button
//               type="button"
//               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
//               onClick={swap}
//             >
//               Swap
//             </button>
//           </div>
//           <div className="w-full mt-4 mb-8">
//             <Input
//               label="To"
//               amount={convertedAmount}
//               currencyOptions={options}
//               selectedCurrency={to}
//               amountDisable
//               onCurrencyChange={(currency) => setTo(currency)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//           >
//             Convert {from.toUpperCase()} to {to.toUpperCase()}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

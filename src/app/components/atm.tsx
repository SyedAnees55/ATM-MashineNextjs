"use client";

const Atm = () => {
  let pin: any = 55;
  let card: any = 55;
  let balance = 1000;
  const atm = () => {
    const cnumber = document.getElementById("c-number") as HTMLInputElement;
    const pnumber = document.getElementById("pin") as HTMLInputElement;
    if (cnumber.value == card && pnumber.value == pin) {
      const Home = document.getElementById("home") as HTMLDivElement;
      Home.style.display = "none";

      const Buttons = document.getElementById("buttons") as HTMLDivElement;
      Buttons.style.display = "block";
    } else {
      alert("Error");
    }
  };
  const BackHome = () => {
    const Home = document.getElementById("home") as HTMLDivElement;
    Home.style.display = "block";

    const Buttons = document.getElementById("buttons") as HTMLDivElement;
    Buttons.style.display = "none";
    const c_number = document.getElementById("c-number") as HTMLInputElement;
    const p_number = document.getElementById("pin") as HTMLInputElement;

    c_number.value = "";
    p_number.value = "";
  };
  const Deposit = () => {
    const Deposit = document.getElementById("deposit") as HTMLDivElement;
    Deposit.style.display = "block";
    const Buttons = document.getElementById("buttons") as HTMLDivElement;
    Buttons.style.display = "none";
  };
  const Withdraw = () => {
    const Withdraw = document.getElementById("with-draw") as HTMLDivElement;
    Withdraw.style.display = "block";
    const Buttons = document.getElementById("buttons") as HTMLDivElement;
    Buttons.style.display = "none";
  };
  const CheckBalance = () => {
    alert("Your Balance is $" + balance);
  };
  const cancel = () => {
    const Deposit = document.getElementById("deposit") as HTMLDivElement;
    Deposit.style.display = "none";
    const Withdraw = document.getElementById("with-draw") as HTMLDivElement;
    Withdraw.style.display = "none";
    const Buttons = document.getElementById("buttons") as HTMLDivElement;
    Buttons.style.display = "block";
  };
  let deposiT = () => {
    let Amount: any = document.getElementById("amount") as HTMLInputElement;

    if (Amount.value > 0) {
      balance += Amount.value;
      Amount.value = "";
      alert("Deposit Successfully Added Amount");
    } else {
      alert("Invalid Amount");
    }
  };
  let withDraw = () => {
    let withdrawAmount: any = document.getElementById(
      "withdraw"
    ) as HTMLInputElement;

    if (withdrawAmount.value > 0) {
      if (balance - withdrawAmount.value < 0) {
        alert("Insufficient Balance");
        withdrawAmount.value = "";
        return;
      }
      balance -= withdrawAmount.value;
      withdrawAmount.value = "";
      alert("Remaining Balance:" + balance);
    } else {
      alert("Invalid Amount");
    }
  };

  return (
    <div className=" bg-black flex  flex-col justify-center items-center h-screen w-screen">
      <div id="home">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-white">ATM-Mashine</h1>
          <label htmlFor="input" className="text-white p-3">
            Card Number
            <input
              type="number"
              placeholder="Enter Your Card Number "
              id="c-number"
              className="border-4 text-md ml-3 text-black"
            />
          </label>
          <label htmlFor="input" className=" text-white p-3">
            Pin Number
            <input
              type="Password"
              placeholder="Enter Your Pin Number"
              id="pin"
              className="border-4 text-md ml-6 text-black"
            />
          </label>
          <button className="bg-blue-400 p-1 w-48" onClick={atm}>
            Submit
          </button>
        </div>
      </div>
      <div id="buttons" className="hidden">
        <div className="flex flex-col ">
          <h1 className="text-center text-3xl text-white">Welcome</h1>
          <button
            className="border-8 rounded-2xl border-transparent text-xl p-1 bg-slate-500 text-gray-300 mt-2"
            onClick={BackHome}
          >
            Home
          </button>
          <button
            className="border-8 rounded-2xl border-transparent text-xl p-1 bg-slate-500 text-gray-300 mt-2"
            onClick={CheckBalance}
          >
            Check Balance
          </button>
          <button
            className="border-8 rounded-2xl border-transparent text-xl p-1 bg-slate-500 text-gray-300 mt-2"
            onClick={Withdraw}
          >
            with-draw
          </button>
          <button
            className="border-8 rounded-2xl border-transparent text-xl p-1 bg-slate-500 text-gray-300 mt-2"
            onClick={Deposit}
          >
            Deposit
          </button>
        </div>
      </div>
      <div id="deposit" className="hidden">
        <h1 className="text-center text-3xl text-white">Deposit</h1>
        <input
          type="number"
          placeholder="Enter aPayment"
          name="number"
          id="amount"
          className="border-4 text-md border-b-black"
        />
        <button
          className="border-8 rounded-2xl border-transparent  text-xl p-1 bg-slate-500 text-gray-300  ml-2"
          onClick={deposiT}
        >
          Deposit
        </button>
        <button
          className="border-8 rounded-2xl border-transparent text-xl p-1 bg-slate-500 text-gray-300  ml-4"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
      <div id="with-draw" className="hidden">
        <h1 className="text-center text-3xl text-white ">With-Draw</h1>
        <input
          type="number"
          placeholder="Enter a Payment"
          name="number"
          id="withdraw"
          className="border-b-black border-4 text-md"
        />
        <button
          className="border-8 rounded-2xl border-transparent text-xl p-1 bg-slate-500 text-gray-300  ml-2"
          onClick={withDraw}
        >
          Withdraw
        </button>
        <button
          className="border-8 rounded-2xl border-transparent text-xl p-1 bg-slate-500 text-gray-300  ml-4"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Atm;

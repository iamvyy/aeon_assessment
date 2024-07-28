import { useState, CSSProperties } from "react";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [secondNumber, setSecondNumber] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const calculatorDiv: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: "lightgrey",
    color: "black",
    border: "1px solid black",
    borderRadius: "0px",
  };

  const total = () => {
    setResult(
      firstNumber !== null && secondNumber !== null
        ? firstNumber + secondNumber
        : null
    );
  };

  return (
    <div style={calculatorDiv}>
      <h1>Adding Two Numbers</h1>

      <NumericInput
        placeholder={"First Number"}
        onChange={(e) => setFirstNumber(e.target.valueAsNumber)}
      />

      <NumericInput
        placeholder={"Second Number"}
        onChange={(e) => setSecondNumber(e.target.valueAsNumber)}
      />

      <button onClick={total} style={buttonStyle}>
        Add Two Numbers
      </button>

      <p style={{ color: "black" }}>Result: {result ?? ""}</p>
    </div>
  );
}

interface NumericInputProps {
  placeholder: string;
  name?: string;
  value?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function NumericInput({
  placeholder,
  value,
  onChange,
  name,
}: NumericInputProps) {
  const inputStyle: CSSProperties = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid #ccc",
    padding: "8px",
    fontSize: "16px",
  };

  return (
    <>
      <input
        style={inputStyle}
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
}

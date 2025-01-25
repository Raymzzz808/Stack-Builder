export default function UserInputs({ onChange, isValue }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment ($) </label>
            <input
              type="number"
              step="100"
              required
              value={isValue.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
            />
          </p>

          <p>
            <label>Annual Investment ($) </label>
            <input
              type="number"
              required
              step="1000"
              value={isValue.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
      </section>

      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Expected Return ($) </label>
            <input
              type="number"
              required
              value={isValue.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            />
          </p>

          <p>
            <label> Duration (Years)</label>
            <input
              type="number"
              required
              value={isValue.duration}
              onChange={(event) => onChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}

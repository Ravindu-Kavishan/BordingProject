export default function DynamicFormField({ field, value, onChange }) {
  const {
    label,
    name,
    type = "text",
    required = true,
    options = [],
    rows = 4,
    extraElement = null,
  } = field;

  return (
    <div className="mb-4">
      <label className="addPlace-Text block mb-1 font-medium">
        {label}: {required && <span className="text-red-500">*</span>}
        {extraElement && <span className="ml-2">{extraElement}</span>}
      </label>

      {/* Inputs remain the same */}
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus"
        >
          <option value="" disabled className="addPlace-selectbg addPlace-selectText">
            -- Select --
          </option>
          {options.map((opt) => (
            <option
              key={opt}
              value={opt}
              className="addPlace-selectbg addPlace-selectText"
            >
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className="addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          min={type === "number" ? 0 : undefined}
          required={required}
          className="addPlace-Text w-full border addPlace-inptborder rounded px-3 py-2 focus:outline-none focus:ring-2 addPlace-inputForcus [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [appearance:textfield]"
        />
      )}
    </div>
  );
}

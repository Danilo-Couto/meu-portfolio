const ChangeThemeMode = ({ changeMode }) => (
  <div>
    <span>☀️</span>
    <label htmlFor="checkbox">
      <input type="checkbox" id="checkbox" onChange={() => changeMode()} />
      <div className="slider round" />
    </label>
    <span>🌒</span>
  </div>
);

export default ChangeThemeMode;

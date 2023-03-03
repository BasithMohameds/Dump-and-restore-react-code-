function Dump({ updateUri, dumpDbUri, mongoDbDump, showResponse }) {
  return (
    <div className="main">
      <h1 className="dump-heading">Dump mongodb</h1>
      <br />
      <input
        type="text"
        className="dump-text"
        placeholder=" Enter Dump DB Uri"
        value={dumpDbUri}
        onChange={updateUri}
      />
      <br />
      <br />
      <button className="submit-button" onClick={mongoDbDump}>
        Dump Database
      </button>
      <br />
      <br />
      <p>{showResponse}</p>
    </div>
  );
}

function Restore({
  updateRestoreUri,
  retoreDbUri,
  mongoDbRestore,
  showRestoreResponse,
  selectedFolder,
  folderName,
  checking,
}) {
  return (
    <div className="main">
      <h1 className="dump-heading">Restore mongodb</h1>
      <br />
      {/* 
      <div className="form-group">
        <label htmlFor="role">Select DB:</label>
        <select
          value={selectedFolder}
          onChange={checking}
          style={{ padding: "5px" }}
          required
        >
          <option value="">Select DB</option>
          {folderName.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {selectedFolder && <p>Selected: {selectedFolder}</p>}
      </div> */}

      <input
        type="text"
        className="dump-text"
        placeholder=" Enter Restore DB Uri"
        value={retoreDbUri}
        onChange={updateRestoreUri}
      />
      <br />
      <br />
      <button className="submit-button" onClick={mongoDbRestore}>
        Restore Database
      </button>
      <br />
      <br />
      <p>{showRestoreResponse}</p>
    </div>
  );
}

export { Dump };
export { Restore };

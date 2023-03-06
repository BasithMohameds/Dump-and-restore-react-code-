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
  uri,
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
      <br />
      <div className="form-group">
        <label htmlFor="role" className="Select-DB">
          Select Database:
        </label>
        <select
          value={selectedFolder}
          onChange={checking}
          style={{ padding: "7px", margin: "2px" }}
          required
        >
          <option value="">Select DB</option>
          {folderName?.length &&
            folderName.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
        </select>
        {selectedFolder && (
          <p className="selected-Folder">Selected: {selectedFolder}</p>
        )}
      </div>
      <br />
      <br />
      <input
        type="text"
        className="dump-text"
        placeholder=" Enter Restore DB Uri"
        value={uri}
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

export { Dump, Restore };

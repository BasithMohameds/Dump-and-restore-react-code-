function Content({ handleDump, handleRestore }) {
  return (
    <div className="button-content">
      <button className="dump-button" onClick={handleDump}>
        Dump DB
      </button>
      <br />
      <br />
      <button className="restore-button" onClick={handleRestore}>
        Restore DB
      </button>
    </div>
  );
}

export { Content };

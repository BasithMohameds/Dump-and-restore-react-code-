import { Content } from "./components/content";
import Header from "./components/header";
import "./App.css";
import { Dump, Restore } from "./components/main";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isopen, setOpen] = useState(false);
  const [isopenRestore, setOpenRestore] = useState(false);
  const [dumpDbUri, setUri] = useState("");
  const [showResponse, setMessage] = useState("");
  const [retoreDbUri, setRestoreUri] = useState("");
  const [showRestoreResponse, setRestoreMessage] = useState("");
  const [folderName, setFolderName] = useState([]);
  const [selectedFolder, setselectedFolder] = useState("");

  console.log({ isopen });
  console.log({ isopenRestore });

  //handle dump button
  const handleDump = () => {
    setOpen(true);
    setOpenRestore(false);
  };

  //handle restore button
  const handleRestore = () => {
    setOpenRestore(true);
    setOpen(false);
  };

  //update dump URI data
  const updateUri = (e) => {
    const value = e.target.value;
    setUri(value);
  };
  console.log({ dumpDbUri });

  //dump function
  const mongoDbDump = () => {
    axios
      .post(`http://localhost:5262/mongodb/dumpdb`, {
        dumpDbUri,
      })
      .then((res) => {
        const { status, message } = res.data;
        console.log({ status });
        setMessage(message);
      });
  };

  //update Restore URI data
  const updateRestoreUri = (e) => {
    const value = e.target.value;
    setRestoreUri(value);
  };
  console.log({ retoreDbUri });

  //restore function
  const mongoDbRestore = () => {
    axios
      .post(`http://localhost:5262/mongodb/restoredb`, {
        dumpDbUri,
      })
      .then((res) => {
        const { status, message } = res.data;
        console.log({ status });
        setRestoreMessage(message);
      });
  };

  //existing dumped database list
  const showDatabaseList = () => {
    axios.get(`http://localhost:5262/mongodb/folderlist`).then((res) => {
      const folderName = res.data.message.map((folderNames) => folderNames);
      setFolderName(folderName);
    });
  };

  useEffect(() => {
    showDatabaseList();
  }, []);
  const checking = (e) => {
    setselectedFolder(e.target.value);
  };

  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <aside>
        <Content handleDump={handleDump} handleRestore={handleRestore} />
      </aside>
      <main>
        {isopen && (
          <Dump
            updateUri={updateUri}
            dumpDbUri={dumpDbUri}
            mongoDbDump={mongoDbDump}
            // showResponse={showResponse}
            // folderName={folderName}
          />
        )}
        {isopenRestore && (
          <Restore
            updateRestoreUri={updateRestoreUri}
            retoreDbUri={retoreDbUri}
            mongoDbRestore={mongoDbRestore}
            // showRestoreResponse={showRestoreResponse}
            // selectedFolder={selectedFolder}
            // checking={checking}
          />
        )}
      </main>
    </div>
  );
}

export default App;

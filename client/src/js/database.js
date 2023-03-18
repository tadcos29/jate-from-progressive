import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


  export const putDb = async (content) => {
    console.log('PUT to the database');
    const jateDb = await openDB('jate', 1);
    // Assign a transaction with jate with read/write privileges
    // to tx making sure not to make extraneous async calls
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
  // attempting to override the auto-increment in order always to obtain the entirety of the text
    const request = store.put({ id: 0, value: content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };
  
  export const getDb = async () => {
    console.log('GET text from the database');
    const jateDb = await openDB('jate', 1);
    // assign a transaction with jate with readonly privs to tx as above
    const tx = jateDb.transaction('jate', 'readonly');
    // obtain the object store via the transaction 
    const store = tx.objectStore('jate');
    const request = store.get(0);
    const result = await request;
    console.log('result.value', result.value);
    return result.value;
  };


initdb();
